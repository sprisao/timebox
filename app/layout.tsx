import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import './globals.css'
import React from "react";

/*기본 폰트 변경*/
const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'Bruces NextJS Boilerplate',
    description: '%s | Bruces NextJS Boilerplate',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="ko">
        <body className={inter.className}>
        <header>
            {/*  NavBar*/}
        </header>
        <main>
            {children}
        </main>
        <footer>
            {/*  Footer*/}
        </footer>
        </body>
        </html>
    )
}
