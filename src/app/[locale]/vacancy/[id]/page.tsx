import {ReactElement} from "react";
import {notFound} from "next/navigation";
import Image from "next/image";
import {Link} from "@/i18n/navigation";
import {getCompanyById, getJobById} from "@/utils/getData";

export default async function JobPage({ params }: { params: Promise<{ id: string; }> }): Promise<ReactElement> {
    const { id } = await params;

    const currentJob = getJobById(id);
    if (!currentJob) notFound();

    const currentJobCompany = getCompanyById(currentJob.companyId);
    if (!currentJobCompany) notFound();

    return (
        <div className='flex gap-4'>
            <div className='flex-2/3 flex flex-col border border-edge rounded-md bg-surface'>
                <div className='flex items-center gap-8 py-6 px-8'>
                    <Image src={currentJobCompany.logoUrl} alt={currentJobCompany.name} width={100} height={100} className='rounded-md border border-edge' />
                    <div className='flex flex-col justify-center'>
                        <h1 className='text-xl font-semibold text-balance'>{currentJob.title}</h1>
                        <Link className='text-blue-500 dark:text-blue-400'  href={{ pathname: '/company/[id]', params: { id: currentJobCompany.id } }}>{currentJobCompany.name}</Link>
                    </div>
                </div>
            </div>
            <div className='flex-1/3 border border-edge'>{currentJob.title}</div>
        </div>
    );
}