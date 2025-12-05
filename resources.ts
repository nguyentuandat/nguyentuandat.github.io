
import skillsFrontend from './resources/skillsFrontend.md?raw';
import skillsBackend from './resources/skillsBackend.md?raw';
import skillsBlockchain from './resources/skillsBlockchain.md?raw';
import skillsAi from './resources/skillsAi.md?raw';
import skillsDevOps from './resources/skillsDevOps.md?raw';
import projectDetails from './resources/projectDetails.md?raw';

// Exporting a map of filenames to their markdown content.
// The AI service iterates over this object to feed context to the model.
export const RESOURCES: Record<string, string> = {
  "skills_frontend.md": skillsFrontend,
  "skills_backend.md": skillsBackend,
  "skills_blockchain.md": skillsBlockchain,
  "skills_ai.md": skillsAi,
  "skills_devops.md": skillsDevOps,
  "project_details.md": projectDetails,
};
