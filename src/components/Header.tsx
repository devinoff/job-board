import {getTranslations} from "next-intl/server";
import {ReactElement} from "react";
import {config} from "@/config";
import {Link} from "@/i18n/navigation";

export default async function Header({ currentLocale }: { currentLocale: string }): Promise<ReactElement> {
    const t = await getTranslations();

    return (
        <header className='bg-surface sticky top-0 h-16 flex justify-between items-center border-1 border-t-0 border-edge rounded-b-md px-8 z-50 opacity-80'>
            <Link href='/' className='text-2xl font-semibold'>Job Board</Link>
            <div className='flex gap-4'>
                {config.locales.map((locale, index) => (<a key={index} href={`/${locale}`} className={`text-lg ${locale === currentLocale && 'font-semibold'}`}>{t(locale)}</a>))}
            </div>
        </header>
    );
}