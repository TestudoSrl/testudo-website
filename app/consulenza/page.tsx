import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { FaMedal } from "react-icons/fa";

export default function Contact() {
  return (
    <>
      {/* Competencies Section */}
      <div className="bg-cover bg-center bg-no-repeat bg-[url('/images/attivitaBG.jpg')]">
        <div className="relative z-10 text-white">
          {/* Navbar Sticky */}
          <div className="sticky top-0 z-50 bg-black bg-opacity-50">
            <Navbar />
          </div>
        </div>

        <div className="relative w-full bg-cover bg-center bg-no-repeat">
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="relative z-10 text-white px-6 md:px-12 py-12 text-center">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight mb-4 animate-slide-in-right">
              TRASFORMAZIONE <br /> DIGITALE
            </h1>
            <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-6 animate-slide-in-right animation-delay-200">
              Sviluppare l’azienda, cogliere le opportunità, ottimizzare procedure. Le nostre competenze di processo e tecnologiche abilitano l'espansione e il consolidamento dei tuoi affari.
            </p>
          </div>
        </div>
      </div>

      {/* Skills Cards Section */}
      <div className="min-h-[50vh] flex items-center justify-center py-8">
        <div className="w-full max-w-7xl p-3">
          {/* Card Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-6">
            {/* Card 1 */}
            <div className="bg-white p-5 rounded-lg flex flex-col transition-all duration-300 hover:bg-orange-500 hover:scale-105 hover:shadow-xl">
              <h2 className="text-xl font-bold text-black text-left mb-3">Business Process Reengineering</h2>
              <p className="text-gray-600 text-sm sm:text-base">
                La reingenierizzazione dei processi aziendali è un punto focale non solo per l'ottimizzazione dei costi ma anche rendere i propri processi quanto più efficaci ed efficienti possibili.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-5 rounded-lg flex flex-col transition-all duration-300 hover:bg-orange-500 hover:scale-105 hover:shadow-xl">
              <h2 className="text-xl font-bold text-black text-left mb-3">Robotic Automation</h2>
              <p className="text-gray-600 text-sm sm:text-base">
                Siamo nell'era dell'automazione ... non sempre e non tutte le operatiivtà però è possibile e conviene, in termini di efficacia ed efficienza, automatizzare. Noi ti aiutiamo a scopire dove e come.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-5 rounded-lg flex flex-col transition-all duration-300 hover:bg-orange-500 hover:scale-105 hover:shadow-xl">
              <h2 className="text-xl font-bold text-black text-left mb-3">Massive Communication</h2>
              <p className="text-gray-600 text-sm sm:text-base">
                Non si smetterà mai di comunicare con i propri clienti, anzi, la comunicazione transazionale è diventata al giorno d'oggi uno dei maggiori fattori di fiderlizzazione del cliente e di sviluppo dei servizi da offrire.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <div className="bg-cover bg-center bg-no-repeat bg-[url('/images/attivitaBG.jpg')]">
        <div className="relative w-full bg-cover bg-center bg-no-repeat">
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="relative z-10 text-white px-6 md:px-12 py-12 text-center">
            <h1 className="text-5xl sm:text-6xl font-bold leading-tight mb-4 animate-slide-in-right">
              A proposito di noi ...
            </h1>
            <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-6 animate-slide-in-right animation-delay-200">
              Siamo il risultato di una sinergia tra persone che per passione hanno sviluppato competenze di sviluppo su diversi linguaggi di programmazione e capacità commerciali. I contatti e le referenze pluriennali ci consentono di avere visibilità quando è necessario sviluppare un progetto dove complessità e performance richieste sono ai livelli massimi ... questo non ci spaventa ... anzi ... ci rende sempre pià consapevoli delle nostre potenzialità.
            </p>
          </div>
        </div>
      </div>

      {/* IL NOSTRO TEAM Section */}
      <div className="relative text-center my-8">
        <h1 className="text-4xl sm:text-5xl font-bold text-black mb-6">IL NOSTRO TEAM</h1>
      </div>

{/* Team Members Cards Section */}
<div className="min-h-[40vh] flex items-center justify-center pb-8">
  <div className="w-full max-w-7xl p-3">
    {/* Card Grid Layout */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-6">
      {/* Card 1 */}
      <div className="bg-white p-5 rounded-lg flex flex-col transition-all duration-300 hover:bg-orange-500 hover:scale-105 hover:shadow-xl">
        <h2 className="text-xl font-bold text-black text-left mb-3">
          Luana Girolamo
          <span className="block text-sm text-gray-400 mt-1">CEO</span> {/* Role added with lower opacity */}
        </h2>
        <p className="text-gray-600 text-sm sm:text-base">
          Come gestire una azienda mettendo in evidenza e risaltando le capacità delle singole risorse
        </p>
      </div>

      {/* Card 2 */}
      <div className="bg-white p-5 rounded-lg flex flex-col transition-all duration-300 hover:bg-orange-500 hover:scale-105 hover:shadow-xl">
        <h2 className="text-xl font-bold text-black text-left mb-3">
          Fulvio Cazzanti
          <span className="block text-sm text-gray-400 mt-1">SOFTWARE ARCHITECT</span> {/* Role added with lower opacity */}
        </h2>
        <p className="text-gray-600 text-sm sm:text-base">
          La pluriennale esperienza in ambito applicativo e la continua voglia di "conoscere" nuove soluzioni sono le nostre fondamenta
        </p>
      </div>

      {/* Card 3 */}
      <div className="bg-white p-5 rounded-lg flex flex-col transition-all duration-300 hover:bg-orange-500 hover:scale-105 hover:shadow-xl">
        <h2 className="text-xl font-bold text-black text-left mb-3">
          Andrea Lugo
          <span className="block text-sm text-gray-400 mt-1">BUSINESS DEVELOPMENT</span> {/* Role added with lower opacity */}
        </h2>
        <p className="text-gray-600 text-sm sm:text-base">
          Aggregare le conoscenze e anticipare gli andamenti del mercato con la massima reattività possibile
        </p>
      </div>
    </div>
  </div>
</div>
      {/* Footer */}
      <Footer />
    </>
  );
}
