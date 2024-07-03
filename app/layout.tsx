import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/navbar';
import { Ubuntu } from '@next/font/google';
const ubuntu = Ubuntu({ subsets: ['latin'], weight: ['400', '700'] });

export const metadata: Metadata = {
  title: 'Shyan Roy Choudhury',
  description: 'shyan.xyz',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ubuntu.className}>
        <div className="sm:flex w-full md:w-1/2 justify-center md:mx-auto sm:pt-20">
          <Navbar />
          <div className="flex-1 mt-8 mx-6">{children}</div>
        </div>
      </body>
    </html>
  );
}
