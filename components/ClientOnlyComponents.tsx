'use client';
import dynamic from 'next/dynamic';
import React from 'react';

const CustomCursor = dynamic(() => import('@/components/CustomCursor'), {
    ssr: false,
    loading: () => null,
});

const Preloader = dynamic(() => import('@/components/Preloader'), {
    ssr: false,
    loading: () => null,
});

const ScrollProgressIndicator = dynamic(
    () => import('@/components/ScrollProgressIndicator'),
    { ssr: false, loading: () => null },
);

const ParticleBackground = dynamic(
    () => import('@/components/ParticleBackground'),
    {
        ssr: false,
        loading: () => null,
    },
);

export default function ClientOnlyComponents() {
    return (
        <>
            <CustomCursor />
            <Preloader />
            <ScrollProgressIndicator />
            <ParticleBackground />
        </>
    );
}
