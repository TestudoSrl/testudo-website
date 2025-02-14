import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { FaMedal } from "react-icons/fa";

export default function Contact() {
  return (
    <>
      {/* Ensure no horizontal overflow */}
      <div className="w-full overflow-hidden">
        {/* Competencies Section */}
        <div className="relative w-full bg-cover bg-center bg-no-repeat bg-[url('/images/attivitaBG.jpg')]">
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>

          {/* Navbar */}
          <div className="sticky top-0 z-50 bg-black bg-opacity-50 w-full">
            <Navbar />
          </div>

          {/* Main Content */}
          <div className="relative z-10 text-white px-6 sm:px-8 md:px-20 py-10 sm:py-20 text-center">
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight mb-6 animate-slide-in-right">
              NOI POSSIAMO
            </h2>
            <p className="text-base sm:text-lg max-w-2xl mx-auto mb-8 animate-slide-in-right animation-delay-200">
              I progetti e le esperienze maturate in questi anni ci hanno permesso
              di incontrare e superare diverse difficoltà, siamo pronti a qualsiasi sfida.
            </p>
          </div>
        </div>

        {/* Skills Cards Section */}
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <div className="w-full max-w-7xl p-6">
            {/* Card Grid Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
              {[
                {
                  title: "Salute / Automazione ordini",
                  desc: "La gestione degli ordini dei clienti tramite canali email e fax attraverso Kofax Communication Server e Kofax Capture Platform.",
                },
                {
                  title: "Finanza / Document Capture Platform",
                  desc: "Ottimizzazione del processo di inserimento delle disposizioni di bonifico con estrazione dati da immagini e documenti.",
                },
                {
                  title: "Assicurazioni / Business Communication Platform",
                  desc: "Gestione multicanale (fax, sms, email) con integrazione a sistemi Microsoft e ECM tramite Kofax standard connector.",
                },
                {
                  title: "Automobilistico / Automazione ciclo passivo",
                  desc: "Gestione di fatture passive multilingua e multi-canale per 10 nazioni, dagli Stati Uniti alla Francia.",
                },
                {
                  title: "Assicurazioni / Document Capture Platform",
                  desc: "Progettazione di Digital Mailroom per la gestione di documentazione proveniente da filiali e clienti.",
                },
                {
                  title: "Viaggi / Business Communication Platform",
                  desc: "Utilizzo di connettori standard per integrare diversi sistemi di gestione della comunicazione e documentazione.",
                },
              ].map((card, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-lg flex flex-col transition-all duration-300 hover:bg-orange-500 hover:scale-105 hover:shadow-xl"
                >
                  <h2 className="text-lg sm:text-xl font-bold text-black text-left mb-4">
                    {card.title}
                  </h2>
                  <p className="text-sm sm:text-base text-gray-600">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Rectangular Cards Section */}
        <div className="min-h-[300px] sm:min-h-[350px] flex flex-col sm:flex-row sm:gap-6 justify-center mt-12 px-6">
          {[
            {
              title: "SMS - € 0,06 / messaggio",
              desc: "Messaggistica di tipo professional con ricevuta di consegna.",
              features: ["1.000.000+ richieste / minuto", "140+ paesi destinatari", "Dashboard multiutente"],
            },
            {
              title: "FAX - € 0,05 / pagina",
              desc: "Messaggistica di tipo professional con ricevuta di consegna.",
              features: ["100+ canali fax disponibili", "Possibilità di utilizzo cover/utente", "Dashboard multiutente"],
              taller: true,
            },
            {
              title: "SOCIAL - € 0,03 / messaggio",
              desc: "Messaggistica di tipo professional con ricevuta di consegna.",
              features: ["100.000+ richieste / minuto", "Gestione Inbound", "Utenti illimitati"],
            },
          ].map((card, index) => (
            <div
              key={index}
              className={`bg-white p-6 sm:w-1/4 w-full ${
                card.taller ? "h-[400px] sm:h-[450px]" : "h-[300px] sm:h-[350px]"
              } flex flex-col justify-between rounded-lg shadow-lg transition-all duration-300 hover:bg-orange-500 hover:scale-105 hover:shadow-xl`}
            >
              <h2 className="text-black font-bold text-base sm:text-lg mb-4">{card.title}</h2>
              <p className="text-sm sm:text-base text-gray-600 mb-4">{card.desc}</p>
              <ul className="text-gray-600 list-disc pl-5 space-y-2 text-xs sm:text-sm">
                {card.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
