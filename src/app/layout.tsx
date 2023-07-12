import type { Metadata } from 'next';
import { Lora, Seaweed_Script, Ubuntu } from 'next/font/google';

import './globals.css';

const lora = Lora({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-lora',
  display: 'swap',
});

const ubuntu = Ubuntu({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-ubuntu',
  display: 'swap',
});

const seaweedScript = Seaweed_Script({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-seaweedScript',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'AHR Portfolio',
  description: 'Personal portfolio website',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="antialiased">
      <body
        suppressHydrationWarning={true}
        className={`bg-hero-pattern bg-cover bg-no-repeat ${lora.variable} ${ubuntu.variable} ${seaweedScript.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
