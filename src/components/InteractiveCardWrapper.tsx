// made with aistudio.google.com

'use client';

import React, {MouseEvent, useRef, useState} from 'react';

const TILT_INTENSITY = 1;
const PERSPECTIVE = '2000px';

export default function InteractiveCardWrapper({children}: { children: React.ReactNode }) {
    const cardRef = useRef<HTMLDivElement>(null);
    const [transform, setTransform] = useState('rotateX(0deg) rotateY(0deg)');
    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const {left, top, width, height} = cardRef.current.getBoundingClientRect();
        const x = e.clientX - left;
        const y = e.clientY - top;
        const centerX = width / 2;
        const centerY = height / 2;
        const rotateY = ((x - centerX) / centerX) * TILT_INTENSITY;
        const rotateX = -((y - centerY) / centerY) * TILT_INTENSITY;
        setTransform(`rotateX(${rotateX}deg) rotateY(${rotateY}deg)`);
    };
    const handleMouseLeave = () => {
        setTransform('rotateX(0deg) rotateY(0deg)');
    };
    return (<div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{perspective: PERSPECTIVE}}
        >
            <div
                className="transition-transform duration-200 ease-out"
                style={{transform}}
            >
                {children}
            </div>
        </div>);
}