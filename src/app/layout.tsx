import type { Metadata } from 'next'
import { Nunito, Nunito_Sans as NunitoSans } from 'next/font/google'
import './../styles/globals.css'
import { cn } from '@/lib/utils'
import { ThemeProvider } from '@/components/shared/theme-provider/theme-provider'

const fontSans = NunitoSans({
    subsets: ['latin'],
    variable: '--font-sans',
    weight: ['300', '400', '500'],
    display: 'swap',
})
const fontTitle = Nunito({
    subsets: ['latin'],
    variable: '--font-title',
    weight: ['200', '300', '400', '500', '700', '800'],
})

export const metadata: Metadata = {
    title: 'Resume Craft',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="pt-BR">
            <body
                className={cn(
                    'min-h-screen bg-background font-sans antialiased',
                    fontSans.variable,
                    fontTitle.variable,
                )}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    {children}
                </ThemeProvider>
            </body>
        </html>
    )
}
