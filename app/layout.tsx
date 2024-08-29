import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ClerkProvider } from "@clerk/nextjs";
import Head from "next/head";
const IBM_PLEX = IBM_Plex_Sans({ 
  subsets: ["latin"],
  weight : ['400', '500', '600', '700'],
  variable : '--font-ibm-plex'
});

export const metadata: Metadata = {
  title: "PixelForge",
  description: "AI powered image generator",
  icons: {
    icon: '/favicon.svg',
  }
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider afterSignOutUrl={'/'} appearance={{
      variables: {colorPrimary : '#624cf5'},
    }}>
      <html lang="en">
        <body className={cn("font-IBM_PLEX antialiased", IBM_PLEX.variable)}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
