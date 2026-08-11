import { Metadata } from 'next';
import { HomePage } from '@/Templates';

export const metadata: Metadata = {
  title: 'Thomaz Alves - Portfolio',
  description:
    'portfolio of Thomaz Alves, a front-end developer specializing in React and Next.js. Explore my projects, skills, and experience in web development.',
  robots: 'index, follow',
  openGraph: {
    title: 'Thomaz Alves - Portfolio',
    description:
      'portfolio of Thomaz Alves, a front-end developer specializing in React and Next.js. Explore my projects, skills, and experience in web development.',
    url: 'https://thomazalves.vercel.app/imagem-home.png',
    siteName: 'Thomaz Alves - Portfolio',
    locale: 'pt-br',
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

export default function Home() {
  return <HomePage />;
}
