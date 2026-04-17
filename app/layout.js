
import "./globals.css";

export const metadata = {
  title: "Miraj Gautam - 3D Portfolio",
  description: "A 3D portfolio showcasting my skills and projects in web development, design, and 3D modeling.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
