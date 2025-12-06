import React from 'react';

export interface SocialLink {
  platform: string;
  url: string;
  icon: React.ReactNode;
  username?: string;
}

export interface LanguageItem {
  language: string;
  proficiency: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  description: string[]; // Bullet-point highlights shown in the timeline and AI prompt
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  year: string;
}

export interface SkillCategory {
  category: string;
  items: string[]; // Keep simple string array for badges
  icon?: React.ReactNode;
}

export interface ToolItem {
  name: string;
  category: string;
}

export interface ResumeData {
  name: string;
  title: string;
  summary: string;
  email: string;
  phone: string;
  address: string;
  socials: SocialLink[];
  languages: LanguageItem[];
  experience: ExperienceItem[];
  education: EducationItem[];
  skills: SkillCategory[];
  tools: ToolItem[];
  dob: string;
  hobbies?: string[];
}

export enum ChatState {
  IDLE,
  THINKING,
  RESPONDING,
  ERROR
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}