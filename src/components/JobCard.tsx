'use client';

import {useTranslations} from "next-intl";
import {ReactElement} from "react";
import {getCurrencySymbol} from "@/utils/currency";
import Image from "next/image";
import {Link, useRouter} from "@/i18n/navigation";
import {Company, Job} from "@/types";

interface JobCardProps {
    job: Job;
    company: Company;
}

export default function JobCard({job, company}: JobCardProps): ReactElement {
    const t = useTranslations();
    const router = useRouter();

    const handleCardClick = () => {
        router.push({
            pathname: '/vacancy/[id]',
            params: {id: job.id}
        });
    };

    return (<div
        className="group bg-surface border border-edge rounded-md transition-all duration-200 ease-in-out hover:border-gold cursor-pointer"
        onClick={handleCardClick}
    >
        <div className="p-8 flex justify-between items-end">
            <div className='flex gap-6 items-center'>
                <Image src={company.logoUrl} alt={company.name} width={100} height={100}
                       className='rounded-md border border-edge'/>
                <div className='flex flex-col gap-1'>
                    <Link
                        href={{pathname: '/vacancy/[id]', params: {id: job.id}}}
                        className="text-xl font-semibold"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {job.title}
                    </Link>
                    <span className='text-muted'>
                            <Link
                                className='text-blue-500 dark:text-blue-400 hover:underline'
                                href={{pathname: '/company/[id]', params: {id: company.id}}}
                                onClick={(e) => e.stopPropagation()}
                            >
                                {company.name}
                            </Link>
                            – {job.location.city}{job.location.type === 'remote' && ' / ' + t('remote')}
                        </span>
                </div>
            </div>

            {job.salary && <span className='py-1 px-4 bg-gold text-white font-semibold rounded-md'>
                        {getCurrencySymbol(job.salary.currency)} {job.salary.min}{job.salary.max && ' – ' + job.salary.max}{job.salary.period !== 'monthly' && ' / ' + t(job.salary.period)}
                    </span>}
        </div>
    </div>);
}