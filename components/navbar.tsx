'use client'

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from "next/image";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 200;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav
      className={`sticky top-0 z-50 w-full border-b border-white border-opacity-50 p-10
        transition-all duration-300 ease-in-out
        ${scrolled ? 'bg-white text-black shadow-md' : 'bg-transparent text-white'}`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link href="/" className="hover:text-gray-400">
            <Image
              src="/images/logoTS.png"
              alt="Logo"
              width={120}
              height={40}
              className="hover:opacity-80" // Optional: add hover effect to the logo
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-10 text-s font-bold">
          <li className="group">
            <Link
              href="/"
              className={`relative transition-all duration-300 ${scrolled ? 'text-black' : 'text-white'} hover:text-orange-400 group-hover:text-orange-400 transform group-hover:scale-110`}
            >
              SOLUZIONI
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </li>
          <li className="group">
            <Link
              href="/contact"
              className={`relative transition-all duration-300 ${scrolled ? 'text-black' : 'text-white'} hover:text-orange-400 group-hover:text-orange-400 transform group-hover:scale-110`}
            >
              CONTATTACI
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </li>
          <li className="group">
            <Link
              href="/"
              className={`relative transition-all duration-300 ${scrolled ? 'text-black' : 'text-white'} hover:text-orange-400 group-hover:text-orange-400 transform group-hover:scale-110`}
            >
              HOME
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </li>
          <li className="group">
            <Link
              href="/about"
              className={`relative transition-all duration-300 ${scrolled ? 'text-black' : 'text-white'} hover:text-orange-400 group-hover:text-orange-400 transform group-hover:scale-110`}
            >
              EXPERTISE
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </li>
          <li className="group">
            <Link
              href="/contact"
              className={`relative transition-all duration-300 ${scrolled ? 'text-black' : 'text-white'} hover:text-orange-400 group-hover:text-orange-400 transform group-hover:scale-110`}
            >
              CONSULENZA
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </li>
          <li className="group">
            <Link
              href="/portfolio"
              className={`relative transition-all duration-300 ${scrolled ? 'text-black' : 'text-white'} hover:text-orange-400 group-hover:text-orange-400 transform group-hover:scale-110`}
            >
              PORTOFOLIO
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </li>
          <li className="group">
            <Link
              href="/careers"
              className={`relative transition-all duration-300 ${scrolled ? 'text-black' : 'text-white'} hover:text-orange-400 group-hover:text-orange-400 transform group-hover:scale-110`}
            >
              LAVORA CON NOI
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none"
        >
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
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-gray-800 text-white p-4`}
      >
        <ul className="space-y-4">
          <li>
            <Link href="/" className="hover:text-gray-400" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-gray-400" onClick={() => setIsMenuOpen(false)}>
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-gray-400" onClick={() => setIsMenuOpen(false)}>
              Contact
            </Link>
          </li>
          <li>
            <Link href="/portfolio" className="hover:text-gray-400" onClick={() => setIsMenuOpen(false)}>
              PORTOFOLIO
            </Link>
          </li>
          <li>
            <Link href="/careers" className="hover:text-gray-400" onClick={() => setIsMenuOpen(false)}>
              LAVORA CON NOI
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
