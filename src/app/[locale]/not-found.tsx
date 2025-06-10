import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { ArrowLeftIcon } from "@phosphor-icons/react/ssr";

export default async function NotFoundPage() {
        const t = await getTranslations();

        return (
            <div className='w-full h-64 flex flex-col gap-6 justify-center items-center text-lg font-medium text-balance'>
                    {t('notFound')}
                <Link
                    href='/'
                    className="
                        group relative isolate
                        flex items-center gap-2
                        px-3 py-1
                        text-gold
                        transition-transform duration-300 ease-in-out
                        hover:scale-95

                        before:absolute before:inset-y-0 before:left-1/2 before:-translate-x-1/2
                        before:bg-gold/20
                        before:rounded-full
                        before:z-[-1]
                        before:w-0
                        before:transition-[width] before:duration-300 before:ease-in-out
                        hover:before:w-full
                        "
                >
                    <ArrowLeftIcon weight='bold' />
                    {t('goToHomepage')}
                </Link>
            </div>
        );
}