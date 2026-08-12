import type { Metadata } from 'next';
import '../styles';

export const metadata: Metadata = {
  title: 'Thomaz Alves - Portfolio',
  description:
    'portfolio of Thomaz Alves, a front-end developer specializing in React and Next.js. Explore my projects, skills, and experience in web development.',
  robots: 'index, follow',
  openGraph: {
    title: 'Thomaz Alves - Portfolio',
    description:
      'portfolio of Thomaz Alves, a front-end developer specializing in React and Next.js. Explore my projects, skills, and experience in web development.',
    url: 'https://thomazalves.vercel.app',
    siteName: 'Thomaz Alves - Portfolio',
    locale: 'pt_br',
    type: 'website',
    images: [
      {
        width: 800,
        height: 600,
        url: 'https://thomazalves.vercel.app/imagem-home.png',
        alt: 'Thomaz Alves - Portfolio image',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className="bg-neutral flex flex-col">{children}</body>
    </html>
  );
}
