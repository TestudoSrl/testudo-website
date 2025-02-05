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
          </div>
        </div>

        <div className="relative w-full bg-cover bg-center bg-no-repeat">
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <Navbar />

          <div className="relative z-10 text-white px-6 sm:px-8 md:px-20 py-10 sm:py-20 text-center">
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight mb-6 animate-slide-in-right">
              NOI POSSIAMO
            </h2>
            <p className="text-base sm:text-lg max-w-2xl mx-auto mb-8 animate-slide-in-right animation-delay-200">
              I progetti e le esperienze maturate in questi anni ci hanno permesso
              di incontrare e superare diverse difficoltà, siamo pronti a qualsiasi sfida
            </p>
          </div>
        </div>
      </div>

      {/* Skills Cards Section */}
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="w-full max-w-7xl p-6">
          {/* Card Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col transition-all duration-300 hover:bg-orange-500 hover:scale-105 hover:shadow-xl">
              <h2 className="text-lg sm:text-xl font-bold text-black text-left mb-4">Salute / Automazione ordini</h2>
              <p className="text-sm sm:text-base text-gray-600">
                La gestione degli ordini dei clienti tramite canali email e fax
                attraverso e l'ausilio di Kofax Communication Server e Kofax Capture Platform come armi per la
                semplificazione e tracciatura del processo.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col transition-all duration-300 hover:bg-orange-500 hover:scale-105 hover:shadow-xl">
              <h2 className="text-lg sm:text-xl font-bold text-black text-left mb-4">Finanza / Document Capture Platform</h2>
              <p className="text-sm sm:text-base text-gray-600">
                La numerosità e molteplicità di documentazione da gestire
                nell'adozione del MIFID e la possibilità di ottimizzare il processo di inserimento delle disposizioni
                di bonifico sono stati terreno fertile per la nostra soluzione di estrazione dati da
                immagini e documenti.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col transition-all duration-300 hover:bg-orange-500 hover:scale-105 hover:shadow-xl">
              <h2 className="text-lg sm:text-xl font-bold text-black text-left mb-4">Assicurazioni / Business Communication Platform</h2>
              <p className="text-sm sm:text-base text-gray-600">
                Gestione del sistema multicanale (fax, sms, email) di Business
                Communication. Integrazione con sistemi Microsoft, applicativi file interface, e sistema ECM
                tramite Kofax standard connector.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col transition-all duration-300 hover:bg-orange-500 hover:scale-105 hover:shadow-xl">
              <h2 className="text-lg sm:text-xl font-bold text-black text-left mb-4">Automobilistico / Automazione ciclo passivo</h2>
              <p className="text-sm sm:text-base text-gray-600">
                La necessità di adottare una soluzione centralizzata per la gestione
                di fatture passive multilingua e provenienti da canali differenti sono state gestite
                egregiamente dalla nostra soluzione di classificazione ed estrazione dati da immagini / documenti.
                Coinvolte nel progetto 10 nazioni dagli Stati Uniti alla Francia.
              </p>
            </div>

            {/* Card 5 */}
            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col transition-all duration-300 hover:bg-orange-500 hover:scale-105 hover:shadow-xl">
              <h2 className="text-lg sm:text-xl font-bold text-black text-left mb-4">Assicurazioni / Document Capture Platform</h2>
              <p className="text-sm sm:text-base text-gray-600">
                La documentazione che quotidianamente una società assicurativa riceve
                sia dalle filiali che direttamente dai propri clienti è numerosa e relativa a differenti
                tipologie di gestione della stessa. Progettazione di Digital Mailroom affrontato ed
                implementato con successo.
              </p>
            </div>

            {/* Card 6 */}
            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col transition-all duration-300 hover:bg-orange-500 hover:scale-105 hover:shadow-xl">
              <h2 className="text-lg sm:text-xl font-bold text-black text-left mb-4">Viaggi / Business Communication Platform</h2>
              <p className="text-sm sm:text-base text-gray-600">
                Fare della propria soluzione di comunicazione "LA PIATTAFORMA DI
                VENDITA" è stato un privilegio non solo per la possibilità di gestire molteplici tipologie di
                documentazione e dati (fax, email, sms) ma anche perché l'utilizzo di questa soluzione
                ha contribuito in maniera notevole a facilitare la comunicazione tra differenti
                applicazioni interne; ecco la nostra forza: utilizzare connettori standard per integrarli in sistemi
                pensati, sviluppati in modalità differenti.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* New Section: Rectangular Cards (3 cards) */}
      <div className="min-h-[300px] sm:min-h-[350px] flex flex-col sm:flex-row sm:gap-6 justify-center mt-12">
        {/* Left Card */}
        <div className="bg-white p-6 sm:w-1/4 w-full h-[300px] sm:h-[350px] flex flex-col justify-between rounded-lg shadow-lg transition-all duration-300 hover:bg-orange-500 hover:scale-105 hover:shadow-xl">
          <h2 className="text-black font-bold text-base sm:text-lg mb-4">SMS - € 0,06 / messaggio</h2>
          <p className="text-sm sm:text-base text-gray-600 mb-4">
            Messaggistica di tipo professional con ricevuta di consegna
          </p>
          <ul className="text-gray-600 list-disc pl-5 space-y-2 text-xs sm:text-sm">
            <li>1.000.0000+ richieste / minuto</li>
            <li>140+ paesi destinatari</li>
            <li>dashboard multiutente</li>
          </ul>
        </div>

        {/* Middle Card (Taller - Adjusted on both top and bottom) */}
        <div className="bg-white p-6 sm:w-1/4 w-full h-[400px] sm:h-[450px] flex flex-col justify-between rounded-lg shadow-lg transition-all duration-300 hover:bg-orange-500 hover:scale-105 hover:shadow-xl">
          <h2 className="text-black font-bold text-base sm:text-lg flex items-center justify-between mb-4">
            FAX - € 0,05 / pagina
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mb-4">
            Messaggistica di tipo professional con ricevuta di consegna
          </p>
          <ul className="text-gray-600 list-disc pl-5 space-y-2 text-xs sm:text-sm">
            <li>100+ canali fax disponibili</li>
            <li>possibilità di utilizzo cover/utente</li>
            <li>dashboard multiutente</li>
          </ul>
        </div>

        {/* Right Card */}
        <div className="bg-white p-5 sm:w-1/4 w-full h-[300px] sm:h-[350px] flex flex-col justify-between rounded-lg shadow-lg transition-all duration-300 hover:bg-orange-500 hover:scale-105 hover:shadow-xl">
          <h2 className="text-black font-bold text-base sm:text-lg mb-4">SOCIAL - € 0,03 / messaggio</h2>
          <p className="text-sm sm:text-base text-gray-600 mb-4">
            Messaggistica di tipo professional con ricevuta di consegna
          </p>
          <ul className="text-gray-600 list-disc pl-5 space-y-2 text-xs sm:text-sm">
            <li>100.000+ richieste / minuto</li>
            <li>Gestione Inbound</li>
            <li>Utenti illimitati</li>
          </ul>
        </div>
      </div>

      <Footer />
    </>
  );
}
