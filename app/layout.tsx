import type { Metadata, Viewport } from "next";
import "./globals.css";

const title = "John Gulliver — Creative Frontend Developer";
const description = "John Gulliver builds responsive websites, interactive JavaScript experiences, and creative digital products from the Philippines.";

export const metadata: Metadata = {
  metadataBase: new URL("https://dekuding1129.github.io"),
  title,
  description,
  authors: [{ name: "John Gulliver", url: "https://github.com/Dekuding1129" }],
  alternates: { canonical: "/" },
  icons: { icon: "/og.png" },
  openGraph: {
    title,
    description,
    url: "/",
    siteName: "John Gulliver Portfolio",
    locale: "en_PH",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "John Gulliver — Creative Frontend Developer" }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/og.png"] },
};

export const viewport: Viewport = { themeColor: "#0d0d0c", colorScheme: "dark" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
