
import { FRONTEND_SKILLS } from './resources/skillsFrontend';
import { BACKEND_SKILLS } from './resources/skillsBackend';
import { BLOCKCHAIN_SKILLS } from './resources/skillsBlockchain';
import { AI_SKILLS } from './resources/skillsAi';
import { DEVOPS_SKILLS } from './resources/skillsDevOps';
import { PROJECT_DETAILS } from './resources/projectDetails';

// Exporting a map of filenames to their markdown content.
// The AI service iterates over this object to feed context to the model.
export const RESOURCES: Record<string, string> = {
  "skills_frontend.md": FRONTEND_SKILLS,
  "skills_backend.md": BACKEND_SKILLS,
  "skills_blockchain.md": BLOCKCHAIN_SKILLS,
  "skills_ai.md": AI_SKILLS,
  "skills_devops.md": DEVOPS_SKILLS,
  "project_details.md": PROJECT_DETAILS,
};
