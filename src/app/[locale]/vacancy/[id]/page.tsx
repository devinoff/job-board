import {ReactElement} from "react";
import {placeholderJobs} from "@/data/jobs";
import {notFound} from "next/navigation";
import Image from "next/image";

export default async function JobListing(props: {
    params: Promise<{
        id: string;
    }>;
}): Promise<ReactElement> {
    const params = await props.params;
    const id = params.id;

    const currentJob = placeholderJobs.find(job => job.id === id);
    if (!currentJob) notFound();

    return (
        <div className='flex gap-2'>
            <div className='flex-2/3 flex flex-col border-1 border-edge rounded-md bg-surface'>
                <div className='flex items-center gap-4 p-4'>
                    <Image src={currentJob.company.logoUrl} alt={currentJob.company.name} width={100} height={100} className='rounded-md border-1 border-edge' />
                    <div className='flex flex-col justify-center'>
                        <h1 className='text-xl font-semibold text-balance'>{currentJob.title}</h1>
                        <h2 className='text-muted text-balance'>{currentJob.company.name}</h2>
                    </div>
                </div>
            </div>
            <div className='flex-1/3 border-1 border-edge'>{currentJob.title}</div>
        </div>
    );
}