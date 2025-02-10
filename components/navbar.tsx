'use client'

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from "next/image";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 200;
      setScrolled(isScrolled);
    };

    document.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const menuItems = [
    { label: 'CONTATTACI', href: '/contact' },
    { label: 'EXPERTISE', href: '/about' },
    { label: 'CONSULENZA', href: '/consulenza' },
    { label: 'PORTFOLIO', href: '/portfolio' },
    { label: 'SOLUZIONI', href: '/soluzioni' },
    { label: 'LAVORA CON NOI', href: '/careers' },
  ];

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto'; 
    };
  }, [isMenuOpen]);

  return (
    <nav
      className={`sticky top-0 z-50 w-full border-b border-white border-opacity-50 p-4 sm:p-6 md:p-10
        transition-all duration-500 ease-in-out
        ${scrolled ? 'bg-white text-black shadow-md' : 'bg-transparent text-white'}`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link href="/" className="hover:text-gray-400">
            <Image
              src="/images/logoTS.png"
              alt="Logo"
              width={120}
              height={40}
              className="hover:opacity-80"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-lg font-semibold">
          {menuItems.map((item) => (
            <li key={item.label} className="group">
              <Link
                href={item.href}
                className={`relative transition-all duration-300 ${scrolled ? 'text-black' : 'text-white'} hover:text-orange-400 group-hover:text-orange-400 transform group-hover:scale-110`}
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>
          ))}
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
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-gray-800 text-white p-6 transition-transform duration-300">
          {/* Close Button (X) */}
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-4 text-white text-3xl"
          >
            &times;
          </button>

          <ul className="space-y-4 mt-10">
            {menuItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="relative transition-all duration-300 hover:text-orange-400"
                  onClick={toggleMenu}
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-400 group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
