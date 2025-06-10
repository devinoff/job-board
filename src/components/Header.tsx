import {getTranslations} from "next-intl/server";
import {ReactElement} from "react";
import {config} from "@/config";
import {Link} from "@/i18n/navigation";

export default async function Header({ currentLocale }: { currentLocale: string }): Promise<ReactElement> {
    const t = await getTranslations();

    return (
        <header className='bg-surface/60 sticky top-0 h-16 flex justify-between items-center border border-t-0 border-edge rounded-b-md px-8 z-50 backdrop-blur-xs'>
            <Link href='/' className='text-2xl font-semibold'>Job Board</Link>
            <div className='flex gap-4'>
                {config.locales.map((locale: string) => (<a key={locale} href={`/${locale}`} className={`text-lg ${locale === currentLocale && 'font-semibold'}`}>{t(locale)}</a>))}
            </div>
        </header>
    );
}