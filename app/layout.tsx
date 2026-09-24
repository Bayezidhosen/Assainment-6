import "./globals.css";
import { Toaster } from "react-hot-toast";
import type { ReactNode } from "react";

import { FitlogProvider } from "../app/context/FitlogContext";
import Navbar from "../app/components/Navbar";
import Footer from "../app/components/Footer";

export const metadata = {
  title: "FitLog — Workout Library",
  description: "Train with intent. Log every set.",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#080909]">

        <FitlogProvider>

          <Navbar />

          <main className="min-h-[calc(100vh-76px)]">
            {children}
          </main>

          <Footer />

          <Toaster
            position="top-right"
            toastOptions={{
              style: {
                background: "#111313",
                color: "#fff",
                border: "1px solid #27272a",
              },
            }}
          />

        </FitlogProvider>

      </body>
    </html>
  );
}