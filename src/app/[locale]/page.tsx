import JobCard from "@/components/JobCard";
import {placeholderJobs} from "@/data/jobs";
import {getCompanyById} from "@/utils/getData";
import {Company} from "@/types";
import InteractiveCardWrapper from "@/components/InteractiveCardWrapper";

export default function Home() {
    const jobsWithCompany = placeholderJobs.flatMap(job => {
        const company: Company | undefined = getCompanyById(job.companyId);
        return company ? [{job, company}] : [];
    });

    return (<div className='flex flex-col gap-4'>
            {jobsWithCompany.map(({job, company}) => (
                <InteractiveCardWrapper key={job.id}>
                    <JobCard job={job} company={company}/>
                </InteractiveCardWrapper>
            ))}
        </div>);
}