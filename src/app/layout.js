import { Oswald } from "next/font/google";
const oswald = Oswald({ subsets: ["latin"] });
import "./globals.css";
import Header from "@/components/Header";
import StoreProvider from "@/redux/StoreProvider";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata = {
  title: "Melih Koç",
  description: "Melih Koç Portfolio Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={oswald.className}>
        <StoreProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            {children}
          </ThemeProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
