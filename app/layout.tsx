import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import { profile } from "@/data/content";

export const metadata: Metadata = {
  metadataBase: new URL("https://abderrahmane-achak.dev"),
  title: `${profile.name} — ${profile.title}`,
  description: profile.bio,
  keywords: [
    "Abderrahmane Achak",
    "AI Engineer",
    "RAG",
    "Machine Learning",
    "Full Stack Developer",
    "EMSI",
    "Portfolio",
  ],
  authors: [{ name: profile.name, url: profile.linkedin }],
  openGraph: {
    title: `${profile.name} — ${profile.title}`,
    description: profile.bio,
    type: "website",
    locale: "en_US",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.title}`,
    description: profile.bio,
  },
  icons: { icon: "/favicon.svg" },
  manifest: "/manifest.json",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased selection:bg-signal selection:text-void">
        <CustomCursor />
        <ScrollProgress />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
