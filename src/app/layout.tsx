import type { Metadata } from "next";
import { ThemeProvider } from "@/components/shared/ThemeProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "AxonERP - Pakistan's Best Enterprise Resource Planning Solution",
  description:
    "Comprehensive cloud-based ERP software designed to help businesses streamline their operations. Finance, HR, sales, inventory, project management and more.",
  keywords: [
    "ERP",
    "enterprise resource planning",
    "Pakistan",
    "business software",
    "cloud ERP",
    "accounting software",
    "inventory management",
    "sales management",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
