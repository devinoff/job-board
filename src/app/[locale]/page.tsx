import JobCard from "@/components/JobCard";
import {placeholderJobs} from "@/data/jobs";

export default function Home() {
    return (
        <div className='flex flex-col gap-4'>
            {placeholderJobs.map((job, index) => (<JobCard key={index} {...job} />))}
        </div>
    );
}
