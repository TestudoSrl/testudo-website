"use client"

import { useState } from 'react';
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function Contact() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Background Section */}
      <div className="bg-cover bg-center bg-no-repeat bg-[url('/images/attivitaBG.jpg')] min-h-screen">
        <div className="relative z-10 text-white">
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <Navbar />

        {/* Main Content Section */}
        <div
          className={`relative w-full bg-cover bg-center bg-no-repeat min-h-screen pt-[60px] transition-all duration-300 ${
            isMenuOpen ? 'pt-[260px]' : 'pt-[60px]' // Add more padding when the mobile menu is open
          }`}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="relative z-10 text-white px-6 md:px-12 lg:px-20 py-16 text-center">
            {/* Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate__animated animate__fadeIn animate__delay-1s">
              CONTATTI
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto mb-8 animate__animated animate__fadeIn animate__delay-2s">
              Per qualsiasi esigenza contattateci oppure prenotate un incontro in una delle nostre sedi
            </p>

            {/* Contact Information Cards */}
            <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Phone Number Card */}
              <div className="bg-white text-black rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl hover:translate-x-2 animate__animated animate__fadeIn animate__delay-3s">
                <div className="bg-orange-500 text-white p-4">
                  <h3 className="text-xl sm:text-2xl font-semibold">Milano</h3>
                </div>
                <div className="p-6">
                  <p className="text-lg sm:text-xl text-left">
                    <span>Via Picco, 31 <br />
                      20132 Milano (MI) <br />
                      P.IVA: 10520950964 <br />
                      SDI: M5UXCR1 <br />
                    </span>
                    <a href="tel:+390230568001" className="text-orange-500 hover:underline">
                      +39 02 3056 8001
                    </a>
                    <span className="block">info@testudosrl.com</span>
                  </p>
                </div>
              </div>

              {/* Street Name Card */}
              <div className="bg-white text-black rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl hover:translate-x-2 animate__animated animate__fadeIn animate__delay-4s">
                <div className="bg-orange-500 text-white p-4">
                  <h3 className="text-xl sm:text-2xl font-semibold">Cavenago B.za</h3>
                </div>
                <div className="p-6">
                  <p className="text-lg sm:text-xl text-left">
                    <span>Piazza Liberta, 12 <br />
                      20873 Cavenago di Biranza (MB) <br />
                    </span>
                    <a href="tel:+390230568001" className="text-orange-500 hover:underline">
                      +39 02 3056 8001
                    </a>
                    <span className="block">sales@testudosrl.com</span>
                  </p>
                </div>
              </div>

              {/* Email Card */}
              <div className="bg-white text-black rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl hover:translate-x-2 animate__animated animate__fadeIn animate__delay-5s">
                <div className="bg-orange-500 text-white p-4">
                  <h3 className="text-xl sm:text-2xl font-semibold">Colturano</h3>
                </div>
                <div className="p-6">
                  <p className="text-lg sm:text-xl text-left">
                    <span>SP 39 della Cerca - km 2 <br />
                      20060 - Colturano (MI) <br />
                    </span>
                    <a href="mailto:info@tuaazienda.com" className="text-orange-500 hover:underline">
                      support@testudosrl.com
                    </a>
                    <span className="block">+39 02 3056 8001</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}
