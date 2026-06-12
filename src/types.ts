export interface Link {
  path: string;
  name: string;
}

export interface Jobs {
  image: string;
  jobNmae: string;
  jobDescription: string;
  workAges: string;
}

export interface Education {
  schoolName: string;
  degree: string;
  schoolAges: string;
}

export interface Skill {
  id: number;
  name: string;
}

export interface SocialNetwork {
  name: string;
  link: string;
  icon: string;
}
