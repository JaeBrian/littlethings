import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'littlethings',
  description: 'NextJS',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex justify-center items-center bg-pastel-green w-full h-screen">
          <div className="flex-col justify-center items-center w-3/4 border-4 rounded-xl">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
