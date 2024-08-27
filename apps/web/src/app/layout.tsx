import type { Metadata } from 'next'
import clsx from 'clsx'
import { Inter, Inter_Tight } from 'next/font/google'
import './globals.css'
import { Provider } from './provider'

const inter = Inter({ subsets: ['latin'] })
const inter_tight = Inter_Tight({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Agendamento de PetShop',
  description: 'Agendamento para clinicas e pet-shops',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='pt-BR'>
      <body className={clsx(
        inter.className,
        inter_tight.className,
        'bg-[#14151D]'
      )}>
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  )
}
