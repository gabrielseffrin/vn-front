import { Sidebar } from '@/app/components/Sidebar'
import '@/app/globals.css'

export const metadata = {
  title: 'Relatórios VN Solution',
  description: 'Sistema de geração de relatórios de chamados',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="flex h-screen bg-gray-100 text-gray-900">
        {/*eslint-disable-next-line @typescript-eslint/no-unused-vars */}
        <Sidebar 
            activeMenuItem={'relatorio'} 
           setActiveMenuItem={function (item: string): void {
            throw new Error('Function not implemented.');
          }} 
          />
        <main className="flex-1 p-6 overflow-auto">{children}</main>
      </body>
    </html>
  )
}
