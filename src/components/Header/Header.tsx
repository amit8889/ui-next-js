"use client";
import { useState } from "react";
import { FaPhoneAlt, FaBars, FaTimes } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  // const [topContatBar, setTopContactBar] = useState(true);

  return (
    <div className="sticky top-0 w-full  shadow-md z-50">
      {/* Top Contact Bar */}
      {
        <div
          className="py-5 px-5 text-[var(--white-text-color)] flex flex-wrap justify-between items-center mx-auto sm:px-6 md:px-16 lg:px-32"
          style={{
            backgroundImage: `linear-gradient(90deg, #002F67 0%, #1E6DD0 100%)`,
          }}
        >
          {/* Contact Info */}
          <div className="flex flex-wrap gap-4 md:gap-8 text-sm md:text-lg font-medium">
            <p className="flex items-center gap-2">
              <FaPhoneAlt /> +91 7983835208
            </p>
            <p className="flex items-center gap-2">
              <MdEmail /> av416044@gmail.com
            </p>
          </div>

          {/* Quote & Admission Button */}
          <div className="hidden sm:flex items-center gap-4 md:gap-8 ">
            <h4 className=" hidden md:flex text-sm md:text-lg font-semibold  text-center">
              {`"Shaping Young Minds Today for a Better Tomorrow."`}
            </h4>
            <button className="px-4 md:px-8 py-2 text-sm md:text-base bg-[var(--white-bg-color)] font-normal rounded-md text-[var(--blue-text-color)] transition duration-200 hover:bg-slate-200 hover:text-black border-2 border-transparent hover:border-teal-500">
              Admission - 2025
            </button>
          </div>
          {/* <button
            onClick={() => setTopContactBar(false)}
            className=" bg-gray-100 hover:bg-gray-200 rounded-full transition duration-300 absolute right-3"
          >
            <IoClose className="text-gray-600 w-6 h-6" />
          </button> */}
        </div>
      }

      {/* Navigation Bar */}
      <nav className="bg-[var(--white-bg-color)] shadow-md">
        <div className="mx-auto px-4 sm:px-6 md:px-16 lg:px-32">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link href="/">
              <Image
                alt="Gurukulam Logo"
                loading="lazy"
                width={150}
                height={64}
                src="https://www.thegurukulam.school/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLogoSvgBlue.6653160f.svg&w=256&q=75"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6 text-sm md:text-lg font-semibold text-[var(--blue-text-color)]">
              <Link
                href="/"
                className="sm:hover:bg-[var(--blue-text-color-hover)] hover:border-b-[1.5px] hover:border-[[var(--blue-text-color)]] py-4 px-1"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="sm:hover:bg-[var(--blue-text-color-hover)] hover:border-b-[1.5px] hover:border-[[var(--blue-text-color)]] py-4 px-1"
              >
                About
              </Link>
              <Link
                href="/admission"
                className="sm:hover:bg-[var(--blue-text-color-hover)] hover:border-b-[1.5px] hover:border-[[var(--blue-text-color)]] py-4 px-1"
              >
                Admissions
              </Link>
              <Link
                href="/academics"
                className="sm:hover:bg-[var(--blue-text-color-hover)] hover:border-b-[1.5px] hover:border-[[var(--blue-text-color)]] py-4 px-1"
              >
                Academics
              </Link>
              <Link
                href="/contact"
                className="sm:hover:bg-[var(--blue-text-color-hover)] hover:border-b-[1.5px] hover:border-[[var(--blue-text-color)]] py-4 px-1"
              >
                Contact
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`fixed inset-0 bg-white z-50 transform transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          } md:hidden`}
        >
          <div className="flex justify-end p-4">
            <button onClick={() => setMenuOpen(false)}>
              <FaTimes size={24} className="text-gray-700" />
            </button>
          </div>
          <ul className="flex flex-col space-y-6  px-8 text-sm md:text-lg font-semibold ">
            <li>
              <Link
                href="/"
                className="block text-gray-700 hover:text-blue-700"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="block text-gray-700 hover:text-blue-700"
                onClick={() => setMenuOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/admission"
                className="block text-gray-700 hover:text-blue-700"
                onClick={() => setMenuOpen(false)}
              >
                Admissions
              </Link>
            </li>
            <li>
              <Link
                href="/academics"
                className="block text-gray-700 hover:text-blue-700"
                onClick={() => setMenuOpen(false)}
              >
                Academics
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="block text-gray-700 hover:text-blue-700"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
