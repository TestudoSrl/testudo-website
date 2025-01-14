import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function Contact() {
  return (
    <>
      {/* Background Section */}
      <div className="bg-cover bg-center bg-no-repeat bg-[url('/images/attivitaBG.jpg')] min-h-screen">
        <div className="relative z-10 text-white">
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <Navbar />
        </div>

        <div className="relative w-full bg-cover bg-center bg-no-repeat min-h-screen">
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="relative z-10 text-white px-8 md:px-20 py-20 text-center">
            {/* Title */}
            <h1 className="text-7xl font-bold leading-tight mb-6 animate-slide-in-right">
              CONTATTI
            </h1>
            {/* Description */}
            <p className="text-lg max-w-2xl mx-auto mb-8 animate-slide-in-right animation-delay-200">
              Per qualsiasi esigenza contattateci oppure prenotate un incontro in una delle nostre sedi
            </p>

            {/* Contact Information Cards */}
            <div className="max-w-7xl mx-auto px-8 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Phone Number Card */}
              <div className="bg-white text-black rounded-lg shadow-lg overflow-hidden animate-slide-in-right animation-delay-400">
                <div className="bg-orange-500 text-white p-4">
                  <h3 className="text-xl font-semibold">Milano</h3>
                </div>
                <div className="p-6">
                  <p className="text-lg text-left">
                    <a href="tel:+390230568001" className="">
                      Via Picco, 31 <br />
                      20132 Milano (MI) <br />
                      P.IVA: 10520950964 <br />
                      SDI: M5UXCR1 <br />
                      <p className="text-orange-500 hover:underline">+39 02 3056 8001</p>
                      <span className="block">info@testudosrl.com</span>
                    </a>
                  </p>
                </div>
              </div>

              {/* Street Name Card */}
              <div className="bg-white text-black rounded-lg shadow-lg overflow-hidden animate-slide-in-right animation-delay-600">
                <div className="bg-orange-500 text-white p-4">
                  <h3 className="text-xl font-semibold">Cavenago B.za</h3>
                </div>
                <div className="p-6">
                  <p className="text-lg text-left">
                    Piazza Liberta, 12 <br />
                    20873 Cavenago di Biranza (MB) <br />
                    <p className="text-orange-500 hover:underline">+39 02 3056 8001</p>
                    sales@testudosrl.com
                  </p>
                </div>
              </div>

              {/* Email Card */}
              <div className="bg-white text-black rounded-lg shadow-lg overflow-hidden animate-slide-in-right animation-delay-800">
                <div className="bg-orange-500 text-white p-4">
                  <h3 className="text-xl font-semibold">Colturano</h3>
                </div>
                <div className="p-6">
                  <p className="text-lg text-left">
                    <a href="mailto:info@tuaazienda.com" className="">
                      SP 39 della Cerca - km 2 <br />
                      20060 - Colturano (MI) <br />
                      <p className="text-orange-500 hover:underline">+39 02 3056 8001</p>
                      support@testudosrl.com
                    </a>
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
