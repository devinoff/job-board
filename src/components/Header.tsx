import {ReactElement} from "react";
import {Link as IntlLink} from "@/i18n/navigation";
import Link from "next/link";
import {config} from "@/config";

export default async function Header({ currentLocale }: { currentLocale: string }): Promise<ReactElement> {
    return (
        <header className='bg-surface/60 sticky top-0 h-16 flex justify-between items-center border border-t-0 border-edge rounded-b-md px-8 z-50 backdrop-blur-xs'>
            <IntlLink href='/' className='text-2xl font-semibold'>Job Board</IntlLink>
            <div className='flex gap-4'>
                {config.locales.map((locale: string) => (<Link key={locale} href={`/${locale}`} className={`text-lg ${locale === currentLocale && 'font-semibold'}`}>{config.localeFlags[locale]} {config.localeNames[locale]}</Link>))}
            </div>
        </header>
    );
}