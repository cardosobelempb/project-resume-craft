import { Metadata } from 'next'
import { ReactNode } from 'react'

export const metadata: Metadata = {
    title: 'Dashboard | Resume',
    description: 'Generated by create next app',
}

export default function ResumeLayout({ children }: { children: ReactNode }) {
    return (
        <main className="w-full h-screen overflow-hidden">
            {children}
        </main>
    )
}
