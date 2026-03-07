import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Bitlinks - Your trusted URL shortener",
  description: "Bitlinks help you shorten your URL easily",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className="bg-purple-50"
      >
        <Navbar />
        {children}

        <script src="https://cdn.lordicon.com/lordicon.js"></script>
      </body>
    </html>
  );
}
