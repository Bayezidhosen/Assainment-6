import "./globals.css";

import type { ReactNode } from "react";
import { Toaster } from "react-hot-toast";

import { FitlogProvider } from "./context/FitlogContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

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
      <body className="bg-[#08090b] text-white">

        <FitlogProvider>

          <div className="flex min-h-screen flex-col">

            <Navbar />

            <main className="flex-1">
              {children}
            </main>

            <Footer />

          </div>

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