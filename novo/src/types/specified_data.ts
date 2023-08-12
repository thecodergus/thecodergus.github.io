export interface Profile {
  basic_info: BasicInfo;
  projects: Project[];
  experience: Experience[];
}

export interface BasicInfo {
  description_header: string;
  description: string;
  section_name: SectionName;
}

export interface SectionName {
  about: string;
  projects: string;
  skills: string;
  experience: string;
  contact: string;
}

export interface Project {
  title: string;
  startDate: string;
  description: string;
  images: string[];
  url: string;
  technologies: Technology[];
}

export interface Technology {
  class: string;
  name: string;
}

export interface Experience {
  company: string;
  title: string;
  years: string;
  icon: string;
  mainTech: string[];
  technologies: string[];
}