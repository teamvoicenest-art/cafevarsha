import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cafe Varsha Gokarna | Beachside Cafe & Restaurant",
  description:
    "Cafe Varsha Gokarna — food, coffee, snacks and a relaxing beachside atmosphere near Kariyappa Katte, Gokarna.",
  openGraph: {
    title: "Cafe Varsha Gokarna",
    description:
      "A relaxed beachside cafe experience near Kariyappa Katte, Gokarna.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#17120d",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
