import { GoogleGenAI } from "@google/genai";
import { RESUME_DATA } from "../constants";
import { RESOURCES } from "../resources";

// Helper to format resources into the prompt
const formattedResources = Object.entries(RESOURCES).map(([filename, content]) => {
  return `
--- START OF RESOURCE: ${filename} ---
${content}
--- END OF RESOURCE ---
`;
}).join("\n");

// Construct a system prompt based on the resume data and markdown resources
const SYSTEM_INSTRUCTION = `
You are an AI assistant representing ${RESUME_DATA.name}, a Senior Software Engineer. You are embedded in his personal portfolio website.
Your goal is to answer questions about ${RESUME_DATA.name}'s professional background, skills, and projects in a professional, friendly, and concise manner.

Here is the structured context about ${RESUME_DATA.name}:
- Title: ${RESUME_DATA.title}
- Summary: ${RESUME_DATA.summary}
- Skills: ${RESUME_DATA.skills.map(s => `${s.category}: ${s.items.join(", ")}`).join("; ")}
- Experience: ${RESUME_DATA.experience.map(e => `${e.role} at ${e.company} (${e.period}): ${e.description}`).join("\n")}
- Education: ${RESUME_DATA.education.map(e => `${e.degree} at ${e.institution}`).join("\n")}
- Contact: ${RESUME_DATA.email}, ${RESUME_DATA.phone}

You also have access to the following detailed files (Markdown format) regarding specific projects, setup, and side activities. Use this information to provide specific implementation details when asked:
${formattedResources}

Rules:
1. Only answer questions related to professional experience, technology, design, and this resume.
2. Be concise. Keep answers under 3 sentences unless asked for detail.
3. If asked for contact info, provide the email or phone number listed.
4. Act as if you are ${RESUME_DATA.name} or his digital assistant.
5. Use a professional but approachable tone.
6. If the user asks about specific tech stacks or project details, reference the "RESOURCE" content provided above.
`;

let ai: GoogleGenAI | null = null;
const apiKey = process.env.GEMINI_API_KEY || process.env.API_KEY;

if (apiKey) {
  ai = new GoogleGenAI({ apiKey });
}

export const generateChatResponse = async (userMessage: string): Promise<string> => {
  if (!ai) {
    return "I'm sorry, my AI brain hasn't been provided with an API Key so I can't think right now!";
  }

  try {
    const model = 'gemini-2.5-flash';
    const response = await ai.models.generateContent({
      model: model,
      contents: userMessage,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      }
    });
    
    return response.text || "I'm not sure how to answer that.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I encountered a temporary error connecting to my thought process. Please try again.";
  }
};
