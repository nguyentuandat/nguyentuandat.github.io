import React from 'react';
import { ResumeData } from './types';

// Icons 
export const Icons = {
  GitHub: () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
  ),
  LinkedIn: () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg>
  ),
  Telegram: () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 11.944 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
  ),
  Mail: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
  ),
  Phone: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
  ),
  MapPin: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
  ),
  Download: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
  ),
  Printer: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" /></svg>
  ),
  Sparkles: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
  ),
  Send: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
  ),
  X: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
  ),
  Sun: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
  ),
  Moon: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
  ),
  Code: () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
  ),
  Terminal: () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
  ),
  Database: () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>
  ),
  Cube: () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
  ),
  Chip: () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" /></svg>
  ),
  Cloud: () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>
  ),
  // Tool Specific Icons (Simplified)
  VSCode: () => <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#3aaaf7"><path d="M23.15 2.587l-2.666-1.544a1.885 1.885 0 0 0-2.486.645L2.83 17.153a1.885 1.885 0 0 0 .548 2.653l2.666 1.544c.833.483 1.885.207 2.378-.645L23.618 5.74a1.885 1.885 0 0 0-.468-3.153z"/></svg>,
  Jira: () => <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#2684FF"><path d="M11.53 2C6.45 2.16 2.5 6.4 2.5 11.7c0 5.4 4.3 9.8 9.6 9.8 5.2 0 9.4-4.2 9.4-9.4 0-5.3-4.2-9.6-9.5-9.8zm0 17.6c-4.3 0-7.8-3.5-7.8-7.8s3.5-7.8 7.8-7.8 7.8 3.5 7.8 7.8-3.5 7.8-7.8 7.8z"/><path d="M9.8 7.5h3.4v9H9.8z"/></svg>,
  Figma: () => <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none"><path fill="#1ABCFE" d="M8 24c-2.209 0-4-1.791-4-4s1.791-4 4-4h4v8H8z"/><path fill="#0ACF83" d="M20 12c0 2.209-1.791 4-4 4H8v-8h8c2.209 0 4 1.791 4 4z"/><path fill="#FF7262" d="M8 8c0-2.209 1.791-4 4-4h4v8h-8V8z"/><path fill="#F24E1E" d="M8 8c-2.209 0-4-1.791-4-4s1.791-4 4-4h4v8H8z"/><path fill="#A259FF" d="M8 16c-2.209 0-4-1.791-4-4s1.791-4 4-4v8z"/></svg>,
  Copilot: () => <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4 8-8z"/></svg>, // Generic check
  ChatGPT: () => <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#10A37F"><circle cx="12" cy="12" r="10" /></svg>,
  Apple: () => <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.55 1.44.86 2.48.96 3.19-1.27.05-2.8-1.54-3.02-3.19-.53-3.12 4.14-4.8 2.06 0z"/></svg>,
  Notion: () => <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor"><path d="M4.22 1.55L3 3.17v16.7l1.32 1.59h15.35l1.33-1.7V3.17l-1.34-1.62H4.22zm13.11 16.63h-1.87V7.21l-4.73 10.97H8.57L5.67 7.21v8.86H4.03V5.19h2.39l4.58 10.63 4.54-10.63h2.38v12.99z"/></svg>,
};

export const RESUME_DATA: ResumeData = {
  name: "Dat Nguyen",
  alias:"Đạt Nguyễn or Nguyễn Tuấn Đạt",
  title: "Software Engineer",
  summary: "Dynamic and versatile professional with over 10 years of experience in full-stack development and mid-level management. Proficient in frontend technologies (React, Vue, Web3.js, Ethers.js) and backend systems (PHP, Node.js, MySQL), with a strong focus on blockchain frontend solutions and AI-driven workflows (Grok, GitHub Copilot, Gemini). Passionate about leading technical teams and delivering innovative projects, seeking a challenging role in a collaborative environment to drive impactful solutions.",
  email: "nguyentuandat.vn@gmail.com",
  phone: "(+84) 949 000 910",
  address: "Ho Chi Minh city, Viet Nam",
  dob: "5/6/1990",
  hobbies: ["Traveling", "Reading", "Gaming", "Coding", "AI Exploration", "Badminton", "Chinese chess", "Running", "Workout"],
  socials: [
    { platform: "Telegram", username: "@nguyentuandat.vn", url: "https://t.me/nguyentuandatvn", icon: <Icons.Telegram /> },
    { platform: "LinkedIn", username: "nguyentuandat", url: "https://linkedin.com/in/nguyentuandat", icon: <Icons.LinkedIn /> }
  ],
  languages: [
    { language: "Vietnamese", proficiency: "Native" },
    { language: "English", proficiency: "Communication" }
  ],
  knowledges: [
    "Full-stack Development",
    "Blockchain Frontend Solutions",
    "AI-driven Workflows",
    "Web3.js & Ethers.js",
    "React & Vue Frameworks",
    "PHP & Node.js Backend",
    "Database Management (MySQL, MongoDB)",
    "DevOps & CI/CD Pipelines",
    "Fintech & Cryptocurrency",
    "E-commerce Platforms",
    "Coporate Web Solutions",
    "Blog & Magazine Sites",
    "CMS Customization",
    "Team Leadership & Mentorship",
    "Agile Methodologies",
    "Steaming & Performance Optimization",
    "On-page SEO",
    "Cross-functional Collaboration",
    "Technical Documentation",
    "User Experience (UX) Design",
    "Healthcare IT Solutions",
    "Medical Record Systems",
    "Real Estate Platforms",
    "Project Management Tools",
    "Education & E-learning Systems",
  ],
  experience: [
    {
      id: "exp-1",
      role: "Team Leader",
      company: "Double O",
      period: "Present",
      location: "HCM, VN",
      description: [
        "Led cross-functional teams delivering outsourced web, e-commerce, and blockchain frontends (DApps, swaps, bridges, multisig wallets, NFTs) across EVM and TRON using React, Vue, Web3.js, Ethers.js, PHP stacks, and Electron",
        "Leveraged AI tools (Grok, GitHub Copilot, ChatGPT, Gemini, 8n8) for code assistance, reviews, research, and automation, boosting throughput by 20%",
        "Built high-frequency cryptocurrency exchange features while managing backend data stores (MySQL, MongoDB, Firebase) and DevOps pipelines (GitHub Actions, Jenkins, Docker)",
        "Mentored engineers and established engineering best practices for delivery quality"
      ]
    },
    {
      id: "exp-2",
      role: "Full stack developer",
      company: "Ringier",
      period: "May 2018 - May 2019",
      location: "HCM, VN",
      description: [
        "Built Node.js microservices and React interfaces for real estate trading platforms, improving interaction speed by 30%",
        "Customized WordPress-based magazine sites aligned with stakeholder branding and editorial workflows",
        "Partnered with product and design teams to ship responsive UX and optimized backend APIs for high-traffic audiences"
      ]
    },
    {
      id: "exp-3",
      role: "Full stack developer",
      company: "Wumbo",
      period: "May 2016 - May 2018",
      location: "HCM, VN",
      description: [
        "Developed building and project management platforms for luxury residential clients using PHP (Phalcon), MySQL, Node.js, and Sails.js",
        "Delivered core feature implementations guided by leadership requirements with React and Node.js",
        "Improved frontend responsiveness and trained developers to expand the team's React capability"
      ]
    },
    {
      id: "exp-4",
      role: "Full stack developer",
      company: "Apide",
      period: "May 2015 - May 2016",
      location: "HCM, VN",
      description: [
        "Delivered custom WordPress websites and plugins for magazine, corporate, and fund management clients",
        "Collaborated with stakeholders across Denmark, Italy, and Germany to tailor solutions and meet launch timelines"
      ]
    },
    {
      id: "exp-5",
      role: "Full stack developer",
      company: "BCA",
      period: "May 2013 - May 2015",
      location: "HCM, VN",
      description: [
        "Delivered web solutions spanning e-commerce, media, education, fundraising, gaming, and booking systems using CakePHP, MySQL, and WordPress",
        "Partnered with clients in Singapore, the UK, and the US to achieve 90% satisfaction and long-term engagements",
        "Optimized application performance, cutting page load times by 15% to boost user engagement"
      ]
    }
  ],
  education: [
    {
      id: "edu-1",
      degree: "Technical Information",
      institution: "Cao Thang College",
      year: "Oct 2011"
    }
  ],
  skills: [
    {
      category: "Frontend",
      icon: <Icons.Code />,
      items: ["ReactJS", "VueJS", "ViteJS", "NextJS", "Antd", "Vuetify", "Bootstrap", "Material", "Electron", "Zustand", "Redux", "Pinia", "Context", "Klinechart", "Etherjs", "Tronweb", "Lighthouse", "HTML5", "CSS3", "JS/TS"]
    },
    {
      category: "Backend",
      icon: <Icons.Database />,
      items: ["PHP", "NodeJS", "Wordpress", "CakePHP", "Laravel", "ExpressJS", "Moleculer", "Nestjs", "SQL", "NoSQL", "Locking", "Index", "Partition", "Auth", "ACL", "Micro-services", "Security"]
    },
    {
      category: "Blockchain",
      icon: <Icons.Cube />,
      items: ["Tron", "Ether", "Swap", "Bridge", "Batch-send", "CEX/DEX", "LP", "ERC20", "TRC20", "NFT", "mint", "burn", "Smart contract", "Multi-sign", "Metamask", "TronLink", "Ledger", "Walletconnect"]
    },
    {
      category: "AI",
      icon: <Icons.Chip />,
      items: ["Github Copilot", "chatGPT", "Grok", "8n8", "v0.dev", "Cursor", "Claude", "Gemini", "Midjourney", "kling", "promeai"]
    },
    {
      category: "DevOps",
      icon: <Icons.Cloud />,
      items: ["Nginx", "Apache", "Git Actions", "Jenkins", "Git", "Docker", "OSWAP", "Caching", "Rate limit"]
    }
  ],
  tools: [
    { name: "VS Code", category: "Code editor" },
    { name: "Jira", category: "Task management" },
    { name: "Github", category: "Version management" },
    { name: "Figma", category: "UI Design, prototyping" },
    { name: "Copilot", category: "AI Code Assistance" },
    { name: "chatGPT", category: "Research" },
    { name: "Gemini", category: "AI Research" },
    { name: "Terminal", category: "Command line tool" },
    { name: "Xcode", category: "iOS development" },
    { name: "Notion", category: "Documentation" }
  ]
};