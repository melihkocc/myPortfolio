import { Oswald } from "next/font/google";
const oswald = Oswald({ subsets: ["latin"] });
import "./globals.css";
import Header from "@/components/Header";
import StoreProvider from "@/redux/StoreProvider";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/react"

export const metadata = {
  title: "Melih Koç",
  description: "Melih Koç Portfolio Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={oswald.className}>
        <StoreProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            {children}
            <Analytics />
          </ThemeProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
