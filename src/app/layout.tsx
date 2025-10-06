import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "My Next.js App",
  description: "A simple Next.js demo project",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        {/* Navbar */}
        <nav className="bg-gray-200 p-4 flex justify-center gap-6 text-lg font-medium">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/dashboard">Dashboard</Link>
        </nav>

        {/* Main Content */}
        <main className="flex-grow p-6">{children}</main>

        {/* Footer */}
        <footer className="bg-gray-200 text-center p-4 text-sm">
          © 2025 My Next.js App. All rights reserved.
        </footer>
      </body>
    </html>
  );
}