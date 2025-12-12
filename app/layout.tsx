import type { Metadata } from 'next';
import { Anton, Roboto_Flex } from 'next/font/google';
import { ReactLenis } from 'lenis/react';

import 'lenis/dist/lenis.css';
import './globals.css';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import ClientOnlyComponents from '@/components/ClientOnlyComponents';
import StickyEmail from './_components/StickyEmail';
import { GoogleAnalytics } from '@next/third-parties/google';
import Script from 'next/script';

const antonFont = Anton({
    weight: '400',
    style: 'normal',
    subsets: ['latin'],
    variable: '--font-anton',
});

const robotoFlex = Roboto_Flex({
    weight: ['100', '400', '500', '600', '700', '800'],
    style: 'normal',
    subsets: ['latin'],
    variable: '--font-roboto-flex',
});

export const metadata: Metadata = {
    title: 'Portfolio - Abdullah Saber',
    description: 'Personal portfolio of Abdullah Saber',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${antonFont.variable} ${robotoFlex.variable} antialiased`}
            >
                <Navbar />
                <main>{children}</main>
                <Footer />

                <ClientOnlyComponents />
                <StickyEmail />
            </body>
        </html>
    );
}
