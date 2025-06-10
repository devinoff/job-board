import {hasLocale, NextIntlClientProvider} from 'next-intl';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';

import type {Metadata} from "next";
import {Onest} from "next/font/google";
import "./globals.css";
import {ReactElement} from "react";
import Header from "@/components/Header";
import CursorGlowProvider from "@/components/CursorGlow";

const onest = Onest({subsets: ['latin-ext', 'cyrillic-ext']});

export const metadata: Metadata = {
    title: "Job board", description: "Job board built with next.js",
};

export default async function RootLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }>; }): Promise<ReactElement> {
    const {locale} = await params;
    if (!hasLocale(routing.locales, locale)) {
        notFound();
    }

    return (
        <html lang={locale} className='bg-primary'>
            <body className={`max-w-[1200px] mx-auto antialiased ${onest.className} text-secondary`}>
                <NextIntlClientProvider>
                    <CursorGlowProvider>
                        <Header currentLocale={locale} />
                        <main className='my-4'>
                            {children}
                        </main>
                    </CursorGlowProvider>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
