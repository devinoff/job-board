import {placeholderCompanies} from "@/data/companies";
import {placeholderJobs} from "@/data/jobs";
import {Company, Job} from "@/types";

export function getCompanyById(id: string): Company | undefined {
    return placeholderCompanies.find(company => company.id === id);
}

export function getJobsByCompanyId(id: string): Job[] {
    return placeholderJobs.filter(job => job.companyId === id);
}

export function getJobById(id: string): Job | undefined {
    return placeholderJobs.find(job => job.id === id);
}