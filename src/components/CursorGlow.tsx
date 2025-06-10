// made with aistudio.google.com

'use client';

import { useEffect, ReactNode } from 'react';

export default function CursorGlowProvider({ children }: { children: ReactNode }) {
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            document.documentElement.style.setProperty('--cursor-x', `${e.clientX}px`);
            document.documentElement.style.setProperty('--cursor-y', `${e.clientY}px`);
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <>
            <div className="pointer-events-none fixed inset-0 -z-10 transition-all duration-300">
                <div
                    className="h-48 w-48 rounded-full bg-gold/20 blur-3xl"
                    style={{
                        position: 'absolute',
                        left: 'var(--cursor-x, -1000px)',
                        top: 'var(--cursor-y, -1000px)',
                        transform: 'translate(-50%, -50%)',
                    }}
                />
            </div>
            {children}
        </>
    );
}