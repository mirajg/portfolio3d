
import "./globals.css";
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

export const metadata = {
  metadataBase: new URL('https://www.mirajgautam.com.np'), // Essential for Next.js OG images
  title: "Miraj Gautam - Portfolio",
  description: "A portfolio showcasing my skills and projects in web development, design and Animation.",
  author: "Miraj Gautam",
  keywords: [
    "Miraj Gautam",
    "3D portfolio",
    "web development",
    "React developer",
    "Next.js portfolio",
    "3D design",
    "frontend developer",
    "Animated Website"
  ],
  openGraph: {
    title: "Miraj Gautam - Portfolio",
    description: "A portfolio showcasing my skills and projects in web development, design and Animation.",
    url: 'https://www.mirajgautam.com.np',
    siteName: 'Miraj Gautam Portfolio',
    images: [
      {
        url: '/images/ogImg.png', // Can be relative now because metadataBase handles the domain!
        width: 1200, // Recommended standard size for social cards
        height: 630,
        alt: 'Miraj Gautam Portfolio Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Miraj Gautam - Portfolio',
    description: 'A portfolio showcasing my skills and projects in web development, design and Animation.',
    images: ['/images/ogImg.png'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}