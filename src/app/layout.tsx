import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { SpeedInsights } from "@vercel/speed-insights/next";
import 'bootstrap/dist/css/bootstrap.css';
import './globals.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Monte um Time',
  description: 'Dinâmica simples para simular a montagem de um time, para o seminário de Gestão de Pessoas.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className='h-100' lang="pt-br">
      <body className={inter.className + ' h-100 d-flex flex-column'}>
        {children}
        <SpeedInsights />
        </body>
    </html >
  )
}
