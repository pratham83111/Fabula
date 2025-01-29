import { StaticImageData } from "next/image";

export interface IJobType {
  company: any;
  id:any;
  english_fluency: any;
  created_at: any;
  // id: number;
  // logo: StaticImageData;
  // title: string;
  // duration: string;
  // date: string;
  // company: string;
  // location: string;
  // category: string[];
  // tags?: string[];
  // experience: string;
  // salary: number;
  // salary_duration: string;
  // english_fluency: string;
  // overview: string;

  _id: string;
  name: string;
  salary: number;
  logo: StaticImageData;
  title: string;
  duration: string;
  tags?: string[];
  jobDescription: string;
  location: string;
  salary_duration: string;
  budget: string;
  jobType: string;
  category: string[];
  skillsAndExpertise: string;
  experience: string;
  note: string;
  admin_note: string;
  responsibilities: string;
  overview: string;
  requiredSkills: string;
  benefits: string;
  date: string;
}

export interface Job {
  _id: string;
  name: string;
  jobDescription: string;
  location: string;
  budget: string;
  jobType: string;
  skillsAndExpertise: string;
  experience: string;
  note: string;
  admin_note: string;
  responsibilities: string;
  overview: string;
  requiredSkills: string;
  benefits: string;
}

export interface JobState {
  job: {};  // Stores individual job data
  jobs: Job[];  // Stores an array of jobs
  loading: boolean;  // Loading state for async operations
  error: string | null;  // Error message in case of a failed API call
}

export interface ContractorTender {
  id: number;
  logo: StaticImageData;
  title: string;
  duration: string;
  date: string;
  company: string;
  location: string;
  category: string[];
  experience: string;
  salary: number;
  salary_duration: string;
  tags: string[];
  english_fluency: string;
  overview: string;
  created_at: string;
  description: string;  // New field
  responsibilities: string;  // New field
  benefits: string;  // New field
  tenderType: string;  // New field
}
