import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Header from "@/components/shared/Header";
import { ThemeProvider } from "@/components/providers/theme-provider";
import Footer from "@/components/shared/footer";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

type RootLayoutProps = {
  children: React.ReactNode;
};
const RootLayout = (props: RootLayoutProps) => {
  const { children } = props;

  return (
    <html lang="en-US" suppressHydrationWarning>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
      >
        <body>
          <Header />
          <main className="relative mx-auto mb-16 max-w-4xl px-8 py-24">
            {children}
          </main>

          <Toaster />
          <Footer />
        </body>
      </ThemeProvider>
    </html>
  );
};

export default RootLayout;
