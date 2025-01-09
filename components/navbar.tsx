// components/Navbar.js
"use client"
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from "next/image"
const Navbar = () => {

      // State to track scroll position
  const [isScrolled, setIsScrolled] = useState(false);

  // Effect to listen for scroll events
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true); // Set to true if user scrolls more than 50px
      } else {
        setIsScrolled(false); // Reset to false when at the top
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="sticky top-0 border-b border-white border-opacity-50 text-white p-10 ">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link href="/" className="hover:text-gray-400">
            
                <Image
                src="/images/logoTS.png"  // Path to your image in the public folder
                alt=""
                width={120}  // Customize width
                height={40}  // Customize height
                className="hover:opacity-80"  // Optional: add hover effect
              />
          </Link>
        </div>

        {/* Desktop Menu */}
        
        <ul className="hidden md:flex space-x-10 text-s font-bold">
        <li>
            <Link href="/" className="hover:text-gray-400">
              SOLUZIONI
            </Link>
          </li>
          <li>
            <Link href="/" className="hover:text-gray-400">
              CONTATTACI
            </Link>
          </li>

          <li>
            <Link href="/" className="hover:text-gray-400">
              HOME
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-gray-400">
              EXPERTISE
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-gray-400">
              CONSULENZA
            </Link>
          </li>
          <li>
          <Link href="/contact" className="hover:text-gray-400" onClick={() => setIsMenuOpen(false)}>
              PORTOFOLIO
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-gray-400" onClick={() => setIsMenuOpen(false)}>
              LAVORA CON NOI
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
            <Link href="/contact" className="hover:text-gray-400" onClick={() => setIsMenuOpen(false)}>
              PORTOFOLIO
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-gray-400" onClick={() => setIsMenuOpen(false)}>
              LAVORA CON NOI
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
