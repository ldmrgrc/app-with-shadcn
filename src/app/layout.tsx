import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { MainNav, UserNav, DarkTheme, Sidebar, Search } from '@/components/dash';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-co" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme='system' enableSystem disableTransitionOnChange>
        <div className="flex">       
        <Sidebar />
        <div className='flex flex-col w-full'>
        <div className="border-b sticky w-full z-50 top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="flex h-16 items-center px-4">
            {/* <MainNav className="mx-6" /> */}
            <div className="ml-auto flex items-center space-x-4">
              <Search />
              <UserNav />
              <DarkTheme />
            </div>
          </div>
        </div>
          {children}
        
        </div>
      </div>
          </ThemeProvider>
      </body>
    </html>
  );
}