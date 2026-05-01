export interface SocialLink {
  name: string;
  url: string;
  class: string;
}

export interface BasicInfo {
  name: string;
  titles: string[];
  image: string;
  social: SocialLink[];
}

export interface Skill {
  name: string;
  class: string;
  level: string;
}

export interface SkillsData {
  icons: Skill[];
}

export interface Technology {
  name: string;
  class: string;
}

export interface Project {
  title: string;
  startDate: string;
  endDate?: string;
  description: string;
  url?: string;
  images: string[];
  technologies: Technology[];
}

export interface Experience {
  company: string;
  title: string;
  years: string;
  icon: string;
  mainTech: string[];
  technologies: string[];
}

export interface SectionNames {
  about: string;
  projects: string;
  skills: string;
  experience: string;
  contact: string;
}

export interface BasicInfoMessages {
  description_header: string;
  description: string;
  section_name: SectionNames;
}

export interface NavbarMessages {
  about: string;
  skills: string;
  experience: string;
  projects: string;
  contact: string;
}

export interface HeroMessages {
  subtitle: string;
}

export interface ContactMessages {
  paragraph: string;
}

export interface FooterMessages {
  made_with: string;
}

export interface ProjectsFilterMessages {
  all: string;
  view_project: string;
}

export interface SkillsCategoryMessages {
  languages: string;
  frameworks: string;
  data: string;
}

export interface StatsMessages {
  projects: string;
  years: string;
  languages: string;
  deploys: string;
}

export interface Messages {
  basic_info: BasicInfoMessages;
  projects: Project[];
  experience: Experience[];
  navbar?: NavbarMessages;
  hero?: HeroMessages;
  contact_message?: ContactMessages;
  footer?: FooterMessages;
  projects_filter?: ProjectsFilterMessages;
  skills_categories?: SkillsCategoryMessages;
  stats?: StatsMessages;
}

export interface SharedData {
  basic_info: BasicInfo;
  skills: SkillsData;
}

export interface StatItem {
  label: string;
  value: number;
  suffix?: string;
}

export enum Language {
  PtBr = "pt-br",
  En = "en",
}
