import React from "react";
import Image from "next/image";
import Link from "next/link";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer static bottom-0 w-full bg-gray-900 text-white flex justify-around font-bold h-[20vh] items-center">
      <div className="footersection1">
        <Link href="/">
          <h2>Frontier Tax Services</h2>
        </Link>
        <p>Precision in Every Calculation</p>
      </div>
      <div className="box flex items-center justify-around">
        <div className="footersection2">
          <div className="box0">
            <ul className="flex gap-6 justify-center">
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
            <span className="p-[24px]"> &copy; Frontier Tax Services - All Rights Reserved</span>
          </div>
        </div>
        <div className="footersection3 socialmedia flex gap-2">
          {/* <Link href="/Home">
            <Image src="/twitter.gif" alt="Twitter" width={34} height={34} className="rounded-[100%]" unoptimized />
          </Link> */}
          <Link href="mailto:arpit.alice@gmail.com">
            <Image src="/gmail.gif" alt="Gmail" width={34} height={34} className="rounded-[8px] cursor-pointer" unoptimized />
          </Link> 
          {/* <Link href="/Home">
            <Image src="/Linkendin.gif" alt="LinkedIn" width={34} height={34} className="rounded-[100%]" unoptimized />
          </Link> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
