'use client';

import {useTranslations} from "next-intl";

export default function ErrorPage() {
    const t = useTranslations();

    return (
        <div className='w-full h-64 flex justify-center items-center text-lg font-medium text-balance'>
            {t('unexpectedError')}
        </div>
    );
}