export interface Profile {
  basic_info: BasicInfo;
  skills: Skills;
}

export interface BasicInfo {
  name: string;
  titles: string[];
  social: Social[];
  image: string;
}

export interface Social {
  name: string;
  url: string;
  class: string;
}

export interface Skills {
  icons: SkillIcon[];
}

export interface SkillIcon {
  name: string;
  class: string;
  level: string;
}