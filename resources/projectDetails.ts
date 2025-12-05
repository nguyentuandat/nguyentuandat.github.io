
export const PROJECT_DETAILS = `
# Project Deep Dives

## Cryptocurrency Exchange Platform (Double O)
**Tech Stack:** React, Redux, Web3.js, Node.js, Redis, Kafka.
**Details:**
- Built a high-frequency trading interface similar to Binance.
- Implemented real-time order book updates using WebSockets and Redis Pub/Sub.
- **Challenge:** Handling race conditions in order matching.
- **Solution:** Utilized a queue-based matching engine (Kafka) to ensure serial processing of orders.

## Blockchain Bridge (Double O)
**Tech Stack:** Solidity, Ethers.js, React, AWS Lambda.
**Details:**
- Created a bridge to move assets between EVM and TRON networks.
- Implemented a multi-sig validator mechanism to secure the mint/burn process.
- **Security:** Audited smart contracts to prevent re-entrancy attacks.

## Real Estate Platform (Ringier)
**Tech Stack:** Node.js Microservices, React, Docker, Kubernetes.
**Details:**
- Migrated a monolithic PHP application to a Node.js microservices architecture.
- Improved search query performance by 40% using Elasticsearch.

# Development Environment & Tools

## Hardware
- **Primary Machine:** MacBook Pro M4 Pro (24GB RAM) for heavy compiling and local Docker environments.
- **Peripherals:** Keychron Q1 Pro (Mechanical Keyboard), Logitech Anywhere 3S, Sony Xperia.

## Software Configuration
- **IDE:** VS Code with custom extensions (GitLens, Prettier, ESLint, Tailwind CSS IntelliSense).
- **Terminal:** Warp Terminal using Oh-My-Zsh and Starship prompt.
- **AI Workflow:** heavily reliant on GitHub Copilot for boilerplate and Grok/Claude for architectural planning.

# Side Projects & Experiments

## "CoinTracker Lite" (Mobile App)
- **Status:** Completed (2022)
- **Stack:** React Native, Firebase.
- **Description:** A simple portfolio tracker that connects to public wallet addresses on ETH and BSC chains to calculate total net worth without asking for private keys.

## "AI Resume Builder" (Web)
- **Status:** In Progress
- **Stack:** Next.js, Gemini API, Vercel.
- **Description:** An experiment to auto-generate resumes based on LinkedIn PDF exports using GenAI.
`;
