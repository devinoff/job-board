import JobCard from "@/components/JobCard";
import {placeholderJobs} from "@/data/jobs";
import {getCompanyById} from "@/utils/getData";
import {Company} from "@/types";

export default function Home() {
    const jobsWithCompany = placeholderJobs.flatMap(job => {
        const company: Company | undefined = getCompanyById(job.companyId);
        return company ? [{job, company}] : [];
    });

    return (
        <div className='flex flex-col gap-4'>
            {jobsWithCompany.map(({job, company}) => (<JobCard key={job.id} job={job} company={company}/>))}
        </div>
    );
}