import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.materatec.it"),
  title: "MateraTec | Paneele, Beratung & Systemlösungen",
  description:
    "MateraTec bietet technische Beratung, hochwertige Paneelsysteme und durchdachte Systemlösungen für anspruchsvolle Bauprojekte in Südtirol und Italien.",
  applicationName: "MateraTec",
  alternates: {
    canonical: "https://www.materatec.it",
  },
  openGraph: {
    title: "MateraTec | Paneele, Beratung & Systemlösungen",
    description:
      "MateraTec bietet technische Beratung, hochwertige Paneelsysteme und durchdachte Systemlösungen für anspruchsvolle Bauprojekte in Südtirol und Italien.",
    url: "https://www.materatec.it",
    siteName: "MateraTec",
    locale: "de_IT",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="de"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
