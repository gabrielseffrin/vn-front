import '@/app/globals.css';
import ClientLayout from './ClientLayout';

export const metadata = {
  title: 'Relatórios VN Solution',
  description: 'Sistema de geração de relatórios de chamados',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
