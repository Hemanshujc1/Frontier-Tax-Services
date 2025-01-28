import React from "react";
import Image from "next/image";
import Link from "next/link";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer static bottom-0 w-full bg-gray-200 text-black flex justify-around font-bold h-[20vh] items-center">
      <div className="footersection1 animated">
      <Link href={"/"}>
          <span className="text-[22px] text-center"> Your Global Tax Buddy</span>
          <p className="text-[12px] text-center">Precision in Every Calculation</p>
        </Link>
      </div>
      <div className="box flex items-center justify-center">
        <div className="footersection2">
          <div className="box0">
            <ul className="flex gap-6 justify-center animated">
              <li>
                <Link href="/Contactus">Contact</Link>
              </li>
              <li>
                <button>
                  <Link href="/Aboutus">About us</Link>
                </button>
              </li>
            </ul>
          </div>
          <div className="h-0.5 w-55 bg-white seperate m-2"></div>
          <div className="txt">
            <span className="p-[24px]"> &copy; Your Global Tax Buddy - All Rights Reserved</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
