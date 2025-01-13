import Image from "next/image";
import Navbar from "@/components/navbar";
import Card from "@/components/card";
import { GrSystem } from "react-icons/gr";
import { FaBook, FaMedal, FaTabletAlt } from "react-icons/fa";
import { MdOutlineTimeToLeave, MdOutlineTimer } from "react-icons/md";
import { BsPlugin } from "react-icons/bs";
import SlideInDiv from "@/components/MainSlideAnimation";

export default function Home() {
  return (
    <>
      {/* Hero Section with Background Image */}
      <div className="bg-cover bg-center bg-no-repeat bg-[url('/images/bg.jpg')]">
        <div className="relative z-10 text-white">
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <Navbar />
          <SlideInDiv />
        </div>
      </div>

      {/* Cards Section 1 */}
      <div className="flex flex-wrap justify-center gap-8 p-10 text-white">
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
      <div className="flex flex-wrap justify-center gap-8 p-10 text-white">
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

      {/* Activities Section (Improved with Tailwind CSS) */}
      <div className="relative w-full bg-cover bg-center bg-no-repeat bg-fixed bg-[url('/images/attivitaBG.jpg')] h-[500px]">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-white px-8 md:px-20 py-20 text-center">
          <h1 className="text-4xl font-bold leading-tight mb-6">Ultime Attività</h1>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Guarda le nostre ultime attività svolte in consulenza, sviluppo e prodotti. Potresti trovare già quello che ti serve.
          </p>

          {/* Activity Cards Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
            {/* Activity Card 1 */}
            <div className="relative bg-white text-black rounded-lg shadow-xl transform transition-all hover:scale-105 hover:shadow-2xl hover:bg-orange-400 p-6">
              <div className="flex justify-center items-center text-4xl text-orange-500 mb-4">
                <MdOutlineTimeToLeave />
              </div>
              <h3 className="text-xl font-semibold mb-2">UMES</h3>
              <p className="text-sm font-light text-gray-700 mb-4">UNIFIED MESSAGING ENTERPRISE</p>
              <p className="text-sm text-gray-600">
                La nostra soluzione permette l'integrazione con applicazioni web-based, ma anche AS/400 per l'invio di messaggistica FAX, SMS, e TELEGRAM.
              </p>
            </div>

            {/* Activity Card 2 */}
            <div className="relative bg-white text-black rounded-lg shadow-xl transform transition-all hover:scale-105 hover:shadow-2xl hover:bg-orange-400 p-6">
              <div className="flex justify-center items-center text-4xl text-orange-500 mb-4">
                <FaTabletAlt />
              </div>
              <h3 className="text-xl font-semibold mb-2">Angular FrontEnd Development</h3>
              <p className="text-sm font-light text-gray-700 mb-4">DEVELOPMENT</p>
              <p className="text-sm text-gray-600">
                Le nostre risorse sono state impegnate nello sviluppo della componente front-end di una applicazione di gestione reportistica e statistiche del processo di vendita.
              </p>
            </div>

            {/* Activity Card 3 */}
            <div className="relative bg-white text-black rounded-lg shadow-xl transform transition-all hover:scale-105 hover:shadow-2xl hover:bg-orange-400 p-6">
              <div className="flex justify-center items-center text-4xl text-orange-500 mb-4">
                <MdOutlineTimer />
              </div>
              <h3 className="text-xl font-semibold mb-2">UMES Bidirezionale</h3>
              <p className="text-sm font-light text-gray-700 mb-4">INTEGRATION</p>
              <p className="text-sm text-gray-600">
                La gestione dei messaggi inbound tramite canali social come Telegram consente di ottimizzare i processi aziendali in tempi molto stretti, migliorando l'efficienza.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-[18rem] py-12">
  <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight transform transition-transform duration-300 ease-in-out">
    Partner
  </h1>
  
  <p className="text-xl text-opacity-30 translate-x-[-162px] text-thin text-gray-800 leading-relaxed md:text-xl md:leading-relaxed max-w-3xl mx-auto">
  Gestione di Clienti Enterprise o piccole/medie imprese sono per noi all'ordine del giorno 

  </p>
  <br />
  <br />
  <div className="flex space-x-4">
  {/* Kofax Image */}
  <div className="relative group">
    <img
      src="/images/kofax.jpeg"
      style={{ height: "300px", width: "auto" }}
      width="600"
      alt=""
      className="transition duration-300 ease-in-out"
    />
    {/* Hover Overlay */}
    <div className="absolute inset-0 bg-orange-500 opacity-0 group-hover:opacity-50 transition-opacity duration-300 ease-in-out"></div>
    {/* Hover Text (with fade from bottom to top effect) */}
    <div className="absolute inset-0 flex items-center justify-center opacity-0 translate-y-10 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out">
      <span className="text-white text-xl font-bold">Kofax</span>
    </div>
  </div>

  {/* NBD Image */}
  <div className="relative group">
    <img
      src="/images/NBD.jpeg"
      style={{ height: "300px", width: "300px" }}
      alt=""
      className="transition duration-300 ease-in-out translate-x-[-20px]"
    />
    {/* Hover Overlay */}
    <div className="absolute inset-0 bg-orange-500 opacity-0 translate-x-[-20px] group-hover:opacity-50 transition-opacity duration-300 ease-in-out"></div>
    {/* Hover Text (with fade from bottom to top effect) */}
    <div className="absolute inset-0 flex items-center justify-center opacity-0 translate-y-10 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out">
      <span className="text-white text-xl font-bold">NBD</span>
    </div>
  </div>
</div>

<div className="flex space-x-4">
  {/* Kub Image */}
  <div className="relative group">
    <img
      src="/images/kub.jpeg"
      className="transition duration-300 ease-in-out"
      style={{ height: "250px", width: "auto" }}
      alt=""
    />
    {/* Hover Overlay */}
    <div className="absolute inset-0 bg-orange-500 opacity-0 group-hover:opacity-50 transition-opacity duration-300 ease-in-out"></div>
    {/* Hover Text (with fade from bottom to top effect) */}
    <div className="absolute inset-0 flex items-center justify-center opacity-0 translate-y-10 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out">
      <span className="text-white text-xl font-bold">Kub</span>
    </div>
  </div>

  {/* Angular Image */}
  <div className="relative group">
    <img
      src="/images/angular.jpeg"
      className="transition duration-300 ease-in-out"
      style={{ height: "250px", width: "353px" }}
      alt=""
    />
    {/* Hover Overlay */}
    <div className="absolute inset-0 bg-orange-500 opacity-0 group-hover:opacity-50 transition-opacity duration-300 ease-in-out"></div>
    {/* Hover Text (with fade from bottom to top effect) */}
    <div className="absolute inset-0 flex items-center justify-center opacity-0 translate-y-10 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out">
      <span className="text-white text-xl font-bold">Angular</span>
    </div>
  </div>
</div>

</div>

    </>
  );
}
