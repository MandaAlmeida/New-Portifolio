import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({
  weight: "400",
  subsets: ["latin"],
  variable: "--fonst-inter",
});

export const metadata: Metadata = {
  title: { template: "%s | Amanda Almeida", default: "Amanda Almeida" },
  description: "Saiba mais sobre minha trajetória e projetos! Vamos construir algo incrível juntos?",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body >
        {children}
      </body>
    </html>
  );
}
