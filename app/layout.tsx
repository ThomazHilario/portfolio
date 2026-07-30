import type { Metadata } from "next";
import "../styles";

export const metadata: Metadata = {
  title: "Thomaz Alves",
  description: "Portfolio de Thomaz Alves",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className="bg-neutral flex flex-col">
        {children}
      </body>
    </html>
  );
}
