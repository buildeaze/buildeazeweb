import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import Navbar from "@/app/components/Navbar";
import { AuthProvider } from "./context/AuthContext";

export const metadata: Metadata = {
  title: "BuildEaze - Your Dream Home Builder",
  description: "Find and build your dream home with BuildEaze. Discover premium plots, house plans, and expert contractors.",
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <body className="font-sans bg-[#F9F6F2] min-h-screen antialiased">
        <AuthProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
