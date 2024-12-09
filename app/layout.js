import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import ContextProvider from "@/Context/Context";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";
import { useAdmin } from "@/Context/Adminprovider";
const inter = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Store",
  description: "A store for all your needs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Adminprovider>{/children/}
          <Header />
          {/* <Toaster /> */}
          {children}
          <Footer />
          </Adminprovider>
      </body>
    </html>
  );
}
