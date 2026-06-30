import "./globals.css";
import { LenisProvider } from "@/components/LenisProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark h-full antialiased">
      <body>
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
