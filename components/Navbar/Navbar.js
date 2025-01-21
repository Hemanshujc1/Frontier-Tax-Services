"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa";
import "./Navbar.css";
const Navbar = () => {
  const expertiseDropdownRef = useRef(null);
  const servicesDropdownRef = useRef(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState("");

  useEffect(() => {
    const handleDropdownPosition = () => {
      const dropdowns = [
        expertiseDropdownRef.current,
        servicesDropdownRef.current,
      ];
      dropdowns.forEach((dropdown) => {
        if (dropdown) {
          const rect = dropdown.getBoundingClientRect();
          if (rect.right > window.innerWidth) {
            dropdown.classList.add("adjust-left");
          } else {
            dropdown.classList.remove("adjust-left");
          }
        }
      });
    };

    const handleClickOutside = (event) => {
      if (
        expertiseDropdownRef.current &&
        !expertiseDropdownRef.current.contains(event.target) &&
        servicesDropdownRef.current &&
        !servicesDropdownRef.current.contains(event.target) &&
        !event.target.closest(".dropbtn")
      ) {
        setActiveDropdown("");
      }
      if (
        event.target.closest(".mobile-menu-icon") === null &&
        !event.target.closest("ul")
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleDropdownPosition);
    document.addEventListener("mousedown", handleClickOutside);
    handleDropdownPosition();

    return () => {
      window.removeEventListener("resize", handleDropdownPosition);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = (dropdownName) => {
    setActiveDropdown(activeDropdown === dropdownName ? "" : dropdownName);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-white opacity-[0.9] navbar text-black flex justify-around font-bold h-20 items-center p-4 sticky top-0 z-50">
      <div className="logo flex items-center gap-2">
        <Link href={"/"} className="text-2xl">
            Your Global Tax Buddy
          <p className="text-[17px]">Precision in Every Calculation</p>
        </Link>
      </div>
      <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </div>
      <ul
        className={`flex-col gap-5 lg:flex lg:flex-row lg:gap-5 lg:static fixed top-0 right-0 bg-white h-full transition-transform transform ${
          isMobileMenuOpen ? "translate-x-0 w-4/5" : "translate-x-full w-0"
        } lg:w-auto lg:transform-none lg:translate-x-0`}
      >
        <li onClick={closeMobileMenu} className="animated">
          <Link href={"/"}> Home</Link>
        </li>
        <li onClick={closeMobileMenu} className="animated">
          <Link href={"/Aboutus"}>About Us</Link>
        </li>
        <li
          onMouseEnter={() => setActiveDropdown("services")}
          onMouseLeave={() => setActiveDropdown("")}
          className="animated"
        >
          <button
            className="dropbtn"
            // onClick={() => toggleDropdown("services")}
            // onClick={() => (window.location.href = "/Services" )}
          >
            <Link
              href={"/Services"}
              className="flex align-middle justify-center items-center gap-1"
            >
              Services <FaChevronDown />{" "}
            </Link>
          </button>
          {activeDropdown === "services" && (
            <div ref={servicesDropdownRef} className="dropdown-content show">
              {/* <button onClick={closeMobileMenu}>
                <Link href={"/Service"}>Financial Reporting</Link>
              </button> */}
              <button onClick={closeMobileMenu}>
                <Link href={"/Services"}>Tax Preparation</Link>
              </button>
              <button onClick={closeMobileMenu}>
                <Link href={"/Services"}>Payroll</Link>
              </button>
              <button onClick={closeMobileMenu}>
                <Link href={"/Services"}> General Accounting</Link>
              </button>
              {/* <button onClick={closeMobileMenu}>
                <Link href={"/Service"}> Accounts Payable</Link>
              </button>
              <button onClick={closeMobileMenu}>
                <Link href={"/Service"}> Accounts Receivable</Link>
              </button> */}
            </div>
          )}
        </li>
        <li
          onMouseEnter={() => setActiveDropdown("expertise")}
          onMouseLeave={() => setActiveDropdown("")}
          className="animated"
        >
          <button
            className="dropbtn"
            // onClick={() => toggleDropdown("expertise")}
            // onClick={() => (window.location.href = "/Expertise" )}
          >
            <Link
              href={"/Expertise"}
              className="flex align-middle justify-center items-center gap-1"
            >
            Expertise <FaChevronDown />
            </Link>
          </button>
          {activeDropdown === "expertise" && (
            <div ref={expertiseDropdownRef} className="dropdown-content show">
              <button onClick={closeMobileMenu}>
                <Link href={"/Expertise"}>Real Estate</Link>
              </button>
              <button onClick={closeMobileMenu}>
                <Link href={"/Expertise"}>Hospitality</Link>
              </button>
              <button onClick={closeMobileMenu}>
                <Link href={"/Expertise"}>Healthcare</Link>
              </button>
              <button onClick={closeMobileMenu}>
                <Link href={"/Expertise"}>Technology</Link>
              </button>
              <button onClick={closeMobileMenu}>
                <Link href={"/Expertise"}>Restaurants</Link>
              </button>
              <button onClick={closeMobileMenu}>
                <Link href={"/Expertise"}>Professional</Link>
              </button>
              <button onClick={closeMobileMenu}>
                <Link href={"/Expertise"}>Entrepreneur</Link>
              </button>
              <button onClick={closeMobileMenu}>
                <Link href={"/Expertise"}>Construction</Link>
              </button>
            </div>
          )}
        </li>
        <li onClick={closeMobileMenu} className="animated">
          <Link href={"/Contactus"}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
