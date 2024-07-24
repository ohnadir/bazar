import type { Metadata } from "next";
import "./globals.css";
import dynamic from "next/dynamic";

export const metadata: Metadata = {
  title: "Bazar",
  description: "Generated by create next app",
};


const ClientProvider = dynamic(() => import('./ClientProvider'), { ssr: false })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ClientProvider>
          {children}
        </ClientProvider>
      </body>
    </html>
  );
}
