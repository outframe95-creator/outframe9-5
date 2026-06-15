import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "outframe9-5 | AI Automation Agency",
  description: "We build AI agents, automation systems, and digital solutions that save time, reduce costs, and help businesses scale.",
  keywords: ["AI", "automation", "AI agents", "business automation", "digital products", "AI agency"],
  openGraph: {
    title: "outframe9-5 | AI Automation Agency",
    description: "We build AI agents, automation systems, and digital solutions that save time, reduce costs, and help businesses scale.",
    type: "website",
    locale: "ar_SA",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className="h-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;700&display=swap" rel="stylesheet" />
        <script dangerouslySetInnerHTML={{ __html: `!function(){var p=location.pathname.split("/")[1],l=p==="en"?"en":"ar";document.documentElement.lang=l;document.documentElement.dir=l==="ar"?"rtl":"ltr"}()` }} />
      </head>
      <body className="min-h-full bg-black text-white antialiased">
        {children}
      </body>
    </html>
  );
}
