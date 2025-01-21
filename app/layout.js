import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { FaViacoin } from "react-icons/fa";

const inter = Inter({ subsets: ["latin"] });  

export const metadata = {
  title: "Your Global Tax Buddy",
  description: "Welcome to Frontier Tax Services, your trusted partner in tax solutions. Our expert team offers comprehensive tax preparation, planning, and advisory services tailored to individuals and businesses alike. Explore our reliable expertise in maximizing returns and minimizing liabilities. Contact us today to navigate your tax journey with confidence and clarity",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
       
        <div className="min-h-screen bg-white text-black">
        {/* [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] */}
          {/*  [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] text-white */}
          {/* <div class="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div> */}
        {children}
        </div>
        {/* <div className="bg-white opacity-15 h-1"></div> */}
        <Footer/>
        </body>
    </html>
  );
}
