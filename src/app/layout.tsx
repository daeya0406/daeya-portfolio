import '@/app/globals.css';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import TopButton from '@/components/common/TopButton';
import { ReactQueryProvider } from '@/components/providers/ReactQueryProvider';
import { Toaster } from 'sonner';
import { ThemeProvider } from 'next-themes';

export const metadata = {
  title: 'Daeya Portfolio',
  description: '프론트엔드 개발자 김정대 포트폴리오',
  icons: {
    icon: '/daeya-favicon.ico',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className="flex min-h-screen flex-col transition-colors">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <ReactQueryProvider>
            <Header />

            <main className="container mx-auto flex-1 px-4 py-8">{children}</main>

            <TopButton />
            <Footer />
            <Toaster position="bottom-right" richColors />
          </ReactQueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
