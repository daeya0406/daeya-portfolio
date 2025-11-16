import '@/app/globals.css';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import { Toaster } from 'sonner';
import { ThemeProvider } from 'next-themes'; // 다크 모드 적용

export const metadata = {
  title: 'Daeya Portfolio',
  description: '프론트엔드 개발자 김정대의 포트폴리오',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className="flex min-h-screen flex-col transition-colors">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />

          <main className="container mx-auto flex-1 px-4 py-8">{children}</main>

          <Footer />
          <Toaster position="bottom-right" richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}
