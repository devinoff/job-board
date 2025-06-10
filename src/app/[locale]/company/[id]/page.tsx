import {ReactElement} from "react";
import {notFound} from "next/navigation";
import Image from "next/image";
import JobCard from "@/components/JobCard";
import {getCompanyById, getJobsByCompanyId} from "@/utils/getData";

export default async function CompanyPage({ params }: { params: Promise<{ id: string; }> }): Promise<ReactElement> {
    const { id } = await params;

    const currentCompany = getCompanyById(id);
    if (!currentCompany) notFound();

    const currentCompanyJobs = getJobsByCompanyId(id);

    return (
        <div className='flex gap-4'>
            <div className='flex-2/3 flex flex-col gap-4'>
                <div className='flex items-center gap-8 py-6 px-8 border border-edge rounded-md bg-surface mb-8'>
                    <Image src={currentCompany.logoUrl} alt={currentCompany.name} width={100} height={100} className='rounded-md border border-edge' />
                    <div className='flex flex-col justify-center'>
                        <h1 className='text-xl font-semibold text-balance'>{currentCompany.name}</h1>
                        <h2 className='text-muted text-balance'>{currentCompany.industry}</h2>
                    </div>
                </div>
                <h2 className='text-2xl font-medium pl-8'>Vakances:</h2>
                {currentCompanyJobs.map(job => (<JobCard key={job.id} job={job} company={currentCompany} />))}
            </div>
            <div className='flex-1/3 border border-edge p-8 flex justify-center'>Reklāma</div>
        </div>
    );
}