
import "./globals.css";
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

export const metadata = {
  title: "Miraj Gautam - 3D Portfolio",
  description: "A 3D portfolio showcasting my skills and projects in web development, design, and 3D modeling.",
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
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
