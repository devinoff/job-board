export interface Company {
    id: string;
    name: string;
    logoUrl: string;
    websiteUrl?: string;
    description?: string;
    industry?: string;
    size?: '1-10' | '11-50' | '51-200' | '201-500' | '501-1000' | '1001-5000' | '5000+';
}

export interface JobLocation {
    type: 'on-site' | 'remote' | 'hybrid';
    city: string;
    stateProvince?: string;
    country: string;
    address?: string;
    description?: string;
}

export interface SalaryRange {
    min: number;
    max?: number;
    currency: string;
    period: 'yearly' | 'monthly' | 'weekly' | 'hourly';
    type: 'gross' | 'net';
    isEstimated?: boolean;
}

export type JobType = 'full-time' | 'part-time' | 'contract' | 'internship' | 'temporary' | 'seasonal' | 'volunteer';

export type ExperienceLevel = 'entry-level' | 'junior' | 'mid-level' | 'senior' | 'lead' | 'executive';

export interface LanguageRequirement {
    name: string;
    proficiency?: 'basic' | 'conversational' | 'fluent' | 'native';
}

export interface JobDescriptionContent {
    summary?: string;
    responsibilities: string[];
    requirements: string[];
    niceToHave?: string[];
    benefits: string[];
    fullText?: string;
}

export interface Application {
    url?: string;
    method?: 'external_link' | 'email' | 'internal_form' | 'phone';
    instructions?: string;
}

export type JobCategory = 'admin' | 'it' | 'sales' | 'services' | 'trade' | 'management' | 'technical' | 'finance' | 'production' | 'construction' | 'logistics' | 'banking' | 'marketing' | 'healthcare' | 'electronics' | 'hr' | 'other' | 'publicAdmin' | 'law' | 'quality' | 'energy' | 'hospitality' | 'education' | 'media' | 'pharmacy' | 'security' | 'agriculture' | 'forestry' | 'culture' | 'internship' | 'seasonal' | 'volunteer' | 'ngo';

export interface Job {
    id: string;
    title: string;

    jobCategory: JobCategory;

    companyId: string;

    location: JobLocation;

    salary?: SalaryRange;

    jobTypes: JobType[];

    experienceLevel?: ExperienceLevel;

    description: JobDescriptionContent;

    skills?: string[];

    languages?: LanguageRequirement[];

    application: Application;

    postedAt: Date;
    updatedAt?: Date;
    deadline?: Date;

    status: 'active' | 'closed' | 'draft';
}