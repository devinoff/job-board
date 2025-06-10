import {SpinnerIcon} from "@phosphor-icons/react/ssr";

export default function Loading() {
    return (
        <div className='w-full h-64 flex justify-center items-center'>
            <SpinnerIcon size={48} className='animate-spin' />
        </div>
    );
}