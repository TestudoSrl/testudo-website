import Image from "next/image";
import Navbar from "@/components/navbar";
import Card from "@/components/card";
import { GrSystem } from "react-icons/gr";
import { FaBook, FaMedal, FaTabletAlt } from "react-icons/fa";
import { MdOutlineTimeToLeave, MdOutlineTimer } from "react-icons/md";
import { BsPlugin } from "react-icons/bs";
import SlideInDiv from "@/components/MainSlideAnimation";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      {/* Hero Section with Background Image */}
      <div className="bg-cover bg-center bg-no-repeat bg-[url('/images/bg.jpg')] overflow-hidden">
        <div className="relative z-10 text-white">
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <Navbar />
          <SlideInDiv />
        </div>
      </div>

      {/* Cards Section 1 */}
      <div className="flex flex-wrap justify-center gap-8 p-6 md:p-10 text-white max-w-full overflow-hidden">
        <Card
          title="BackEnd Development"
          Icon={GrSystem}
          description="Scelta delle migliori tecnologie per garantire un sistema di backend a prova di bomba."
        />
        <Card
          title="FrontEnd Development"
          Icon={FaTabletAlt}
          description="Sfoglia la nostra documentazione per capire la facilità di integrazione con i nostri servizi"
        />
        <Card
          title="Feature Aggiuntive"
          Icon={FaMedal}
          description="Da sempre riconosciamo ed evidenziamo l'importanza di una applicazione su misura"
        />
      </div>

      {/* Cards Section 2 */}
      <div className="flex flex-wrap justify-center gap-8 p-6 md:p-10 text-white max-w-full overflow-hidden">
        <Card
          title="Services Documentation"
          Icon={FaBook}
          description="Sfoglia la nostra documentazione per capire la facilità di integrazione con i nostri servizi"
        />
        <Card
          title="Fast Delivery"
          Icon={MdOutlineTimer}
          description="I tempi di deployment sono per voi importanti? Per noi ancora di più garantendovi il versioning"
        />
        <Card
          title="Plugins Gratuiti"
          Icon={BsPlugin}
          description="Sfoglia i nostri plugin gratuiti per facilitare l'integrazione nelle vostre applicazioni sulla base delle nostre esperienze"
        />
      </div>

      {/* Activities Section */}
      <div className="relative w-full bg-cover bg-fixed bg-[url('/images/attivitaBG.jpg')] h-auto py-20">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-white px-4 md:px-20 py-10 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-6">Ultime Attività</h1>
          <p className="text-sm sm:text-lg max-w-2xl mx-auto mb-8">
            Guarda le nostre ultime attività svolte in consulenza, sviluppo e prodotti. Potresti trovare già quello che ti serve.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-white text-black rounded-lg shadow-xl p-6 transform transition-transform hover:scale-105 hover:shadow-2xl hover:bg-orange-400">
              <div className="flex justify-center items-center text-3xl text-orange-500 mb-4">
                <MdOutlineTimeToLeave />
              </div>
              <h3 className="text-lg font-semibold mb-2">UMES</h3>
              <p className="text-sm text-gray-600">
                La nostra soluzione permette l'integrazione con applicazioni web-based, ma anche AS/400 per l'invio di messaggistica FAX, SMS, e TELEGRAM.
              </p>
            </div>
            <div className="bg-white text-black rounded-lg shadow-xl p-6 transform transition-transform hover:scale-105 hover:shadow-2xl hover:bg-orange-400">
              <div className="flex justify-center items-center text-3xl text-orange-500 mb-4">
                <FaTabletAlt />
              </div>
              <h3 className="text-lg font-semibold mb-2">Angular FrontEnd Development</h3>
              <p className="text-sm text-gray-600">
                Le nostre risorse sono state impegnate nello sviluppo della componente front-end di una applicazione di gestione reportistica e statistiche del processo di vendita.
              </p>
            </div>
            <div className="bg-white text-black rounded-lg shadow-xl p-6 transform transition-transform hover:scale-105 hover:shadow-2xl hover:bg-orange-400">
              <div className="flex justify-center items-center text-3xl text-orange-500 mb-4">
                <MdOutlineTimer />
              </div>
              <h3 className="text-lg font-semibold mb-2">UMES Bidirezionale</h3>
              <p className="text-sm text-gray-600">
                La gestione dei messaggi inbound tramite canali social come Telegram consente di ottimizzare i processi aziendali in tempi molto stretti, migliorando l'efficienza.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Partners Section */}
      <div className="mt-20 px-4 md:px-20 py-12">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Partner</h1>
        <p className="text-base md:text-lg text-gray-800 leading-relaxed max-w-3xl mx-auto mb-8">
          Gestione di Clienti Enterprise o piccole/medie imprese sono per noi all'ordine del giorno.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {["kofax", "NBD", "kub", "angular"].map((partner) => (
            <div className="relative group" key={partner}>
              <img
                src={`/images/${partner}.jpeg`}
                className="w-full h-48 object-contain transition duration-300 ease-in-out"
                alt={partner}
              />
              <div className="absolute inset-0 bg-orange-500 opacity-0 group-hover:opacity-50 transition-opacity duration-300 ease-in-out"></div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 translate-y-10 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out">
                <span className="text-white text-lg font-bold capitalize">{partner}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}
