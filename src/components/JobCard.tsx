import {getTranslations} from "next-intl/server";
import {ReactElement} from "react";
import {getCurrencySymbol} from "@/utils/currency";
import Image from "next/image";
import {Link} from "@/i18n/navigation";

export default async function JobCard(props: Job): Promise<ReactElement> {
    const t = await getTranslations();

    return (
        <Link className='bg-surface border border-edge p-8 flex justify-between items-end rounded-md' href={{ pathname: '/vacancy/[id]', params: { id: props.id } }}>
            <div className='flex gap-6 items-center'>
                <Image src={props.company.logoUrl} alt={props.company.name} width={100} height={100} className='rounded-md border-1 border-edge' />
                <div className='flex flex-col gap-1'>
                    <h3 className='text-xl font-semibold'>{props.title}</h3>
                    <span><span className='text-blue-500 dark:text-blue-400'>{props.company.name}</span> – {props.location.city}{props.location.type === 'remote' && ' / '+t('remote')}</span>
                </div>
            </div>
            <span className='py-1 px-4 bg-gold text-white font-semibold rounded-md'>{getCurrencySymbol(props.salary.currency)} {props.salary.min}{props.salary.max && ' – '+props.salary.max}{props.salary.period !== 'monthly' && ' / '+t(props.salary.period)}</span>
        </Link>
    );
}