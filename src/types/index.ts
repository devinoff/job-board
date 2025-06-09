// --- Helper Interfaces / Types ---

interface Company {
    id: string;
    name: string;
    logoUrl: string;
    websiteUrl?: string;
    description?: string;
    industry?: string;
    size?: '1-10' | '11-50' | '51-200' | '201-500' | '501-1000' | '1000+';
}

interface JobLocation {
    type: 'on-site' | 'remote' | 'hybrid';
    city: string;
    stateProvince?: string;
    country: string;
    address?: string;
    description?: string;
}

interface SalaryRange {
    min: number;
    max?: number;
    currency: string;
    period: 'yearly' | 'monthly' | 'weekly' | 'hourly';
    type: 'gross' | 'net';
    isEstimated?: boolean;
}

type JobType = 'full-time' | 'part-time' | 'contract' | 'internship' | 'temporary';

type ExperienceLevel = 'entry-level' | 'junior' | 'mid-level' | 'senior' | 'lead' | 'executive';

interface LanguageRequirement {
    name: string;
    proficiency?: 'basic' | 'conversational' | 'fluent' | 'native';
}

interface JobDescriptionContent {
    summary?: string;
    responsibilities: string[];
    requirements: string[];
    niceToHave?: string[];
    benefits: string[];
    fullText?: string;
}

interface Application {
    url?: string;
    method?: 'external_link' | 'email' | 'internal_form';
    instructions?: string;
}

// --- Main Job Interface ---

interface Job {
    id: string;
    title: string;

    company: Company;

    location: JobLocation;

    salary: SalaryRange;

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