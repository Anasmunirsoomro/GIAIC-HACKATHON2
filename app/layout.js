import { Montserrat } from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Store",
  description: "A store for all your needs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextTopLoader color="red" />
        {children}
      </body>
    </html>
  );
}