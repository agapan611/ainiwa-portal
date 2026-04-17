import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AiNiwa - AIキャラクターの庫",
  description: "AIが紡ぐキャラクターたちの住まう庫。世界観ごとに扉が開かれていく。",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0a0f",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="min-h-dvh flex flex-col">{children}</body>
    </html>
  );
}
