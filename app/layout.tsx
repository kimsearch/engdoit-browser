import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "engdoit",
  description: "영단어 학습 앱",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
