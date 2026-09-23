import "./globals.css";
import { Toaster } from "react-hot-toast";
import Navbar from "../app/components/Navbar";
import Footer from "../app/components/Footer";
import { FitlogProvider } from "../app/context/FitlogContext";

export const metadata = {
  title: "FitLog — Workout Library",
  description: "Train with intent. Log every set.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <FitlogProvider>
          <Navbar />

          {children}

          <Footer />

          <Toaster position="top-right" />
        </FitlogProvider>
      </body>
    </html>
  );
}