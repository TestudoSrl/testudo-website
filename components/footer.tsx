'use client'

import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa'; // Puoi installare react-icons

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-16 relative">
      {/* Sfondo con sovrapposizione scura */}
      <div className="absolute inset-0 bg-cover bg-center opacity-30" 
        style={{ backgroundImage: 'url("/images/attivitaBG.jpg")' }}></div>
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Sezione Chi Siamo */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Chi Siamo</h3>
            <p className="text-sm text-gray-400">
              Siamo un team di professionisti dedicati a fornire soluzioni innovative per aiutare le aziende a prosperare nell'era digitale. La nostra esperienza copre vari settori e tecnologie.
            </p>
          </div>

          {/* Link Rapidi */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Link Rapidi</h3>
            <ul>
              <li>
                <Link href="/" className="text-sm text-gray-400 hover:text-orange-400">Home</Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-gray-400 hover:text-orange-400">Chi Siamo</Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-400 hover:text-orange-400">Contatti</Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-sm text-gray-400 hover:text-orange-400">Portfolio</Link>
              </li>
            </ul>
          </div>

          {/* Link ai Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Seguici</h3>
            <div className="flex space-x-4">
              <Link href="https://facebook.com" target="_blank" className="text-gray-400 hover:text-orange-400">
                <FaFacebookF size={24} />
              </Link>
              <Link href="https://linkedin.com" target="_blank" className="text-gray-400 hover:text-orange-400">
                <FaLinkedinIn size={24} />
              </Link>
            </div>
          </div>

          {/* Sezione Contatti */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contattaci</h3>
            <p className="text-sm text-gray-400">
              Email: <a href="mailto:info@tuaazienda.com" className="text-gray-400 hover:text-orange-400">info@testudosrl.com</a>
            </p>
            <p className="text-sm text-gray-400">
              Telefono: <a href="tel:+123456789" className="text-gray-400 hover:text-orange-400">+39 02 3056 8001
</a>
            </p>
          </div>
        </div>

        {/* Sezione Copyright */}
        <div className="text-center text-sm text-gray-400 mt-8">
          <p>© {new Date().getFullYear()} Testudo Srl. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
