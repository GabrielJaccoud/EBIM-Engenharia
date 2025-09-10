import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EBIM Engenharia e Consultoria - Soluções em Engenharia Industrial",
  description: "Empresa especializada em engenharia de produção e mecânica. Oferecemos consultoria em planejamento, metalização, teste hidrostático, limpeza química e inspeções técnicas para os setores naval, petróleo e gás, siderurgia e petroquímica.",
  keywords: "engenharia, consultoria, metalização, teste hidrostático, limpeza química, BIM, inspeções técnicas, naval, petróleo, gás, siderurgia, petroquímica",
  authors: [{ name: "EBIM Engenharia e Consultoria" }],
  creator: "EBIM Engenharia e Consultoria",
  publisher: "EBIM Engenharia e Consultoria",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://ebimengenharia.com.br",
    siteName: "EBIM Engenharia e Consultoria",
    title: "EBIM Engenharia e Consultoria - Soluções em Engenharia Industrial",
    description: "Empresa especializada em engenharia de produção e mecânica. Oferecemos consultoria em planejamento, metalização, teste hidrostático, limpeza química e inspeções técnicas.",
    images: [
      {
        url: "/logo-ebim.png",
        width: 1200,
        height: 630,
        alt: "EBIM Engenharia e Consultoria",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EBIM Engenharia e Consultoria - Soluções em Engenharia Industrial",
    description: "Empresa especializada em engenharia de produção e mecânica. Oferecemos consultoria em planejamento, metalização, teste hidrostático, limpeza química e inspeções técnicas.",
    images: ["/logo-ebim.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/logo-ebim.png" />
        <link rel="canonical" href="https://ebimengenharia.com.br" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#00C75A" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
