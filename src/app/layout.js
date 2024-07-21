import { Oswald } from "next/font/google";
const oswald = Oswald({ subsets: ["latin"] });
import "./globals.css";
import Header from "@/components/Header";
import StoreProvider from "@/redux/StoreProvider";

export const metadata = {
  title: "Melih Koç",
  description: "Melih Koç Portfolio Website",
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ overflowX: "hidden" }} className={oswald.className}>
        <StoreProvider>
          <Header />
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}