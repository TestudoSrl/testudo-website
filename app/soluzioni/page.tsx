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
          <div className="relative z-10 text-white px-8 md:px-20 py-20 text-center">
            <h1 className="text-7xl font-bold leading-tight mb-6 animate-slide-in-right">
                BEST IN CLASS
            </h1>
            <p className="text-lg max-w-2xl mx-auto mb-8 animate-slide-in-right animation-delay-200">
            Vesti i tuoi processi aziendali con la soluzione tecnologica migliore e più affine alle tue esigenze.

            </p>
          </div>
        </div>
      </div>

      {/* New Section: Rectangular Cards (3 cards) */}
      <div className="min-h-[300px] flex justify-center gap-0 mt-12">
        {/* Left Card */}
        <div className="bg-white p-6 w-1/4 h-[300px] flex flex-col justify-between rounded-lg shadow-lg transition-all duration-300 hover:bg-orange-500 hover:scale-105 hover:shadow-xl">
          <h2 className="text-black font-bold text-lg mb-4">GESTIONE ORDINI </h2>
          <p className="text-gray-600 text-sm mb-4">
          La multicanalità non ci spaventa, email, fax, edi, sms e social come acquisizione documentale ed estrazione dati per la gestione completa del processo, liberando energie e preziose risorse per l'azienda.</p>
          <ul className="text-gray-600 list-disc pl-5 space-y-2">
            <li>Identificazione di 2500+ clienti
</li>
            <li>Gestione di 100+ prodotti</li>
            <li>10-15 utenti validatori</li>
          </ul>
        </div>

        {/* Middle Card (Taller - Adjusted on both top and bottom) */}
        <div className="bg-white p-6 w-1/4 h-[400px] flex flex-col justify-between rounded-lg shadow-lg transition-all duration-300 hover:bg-orange-500 hover:scale-105 hover:shadow-xl">
          <h2 className="text-black font-bold text-lg flex items-center justify-between mb-4">
GESTIONE CICLO PASSIVO          </h2>
          <p className="text-gray-600 text-sm mb-4">
          L'automazione delle fatture è uno dei primi miglioramenti che un'azienda in fase di consolidamento e crescita intraprende. Automatizzare il ciclo passivo significa ridurre i costi e aumentare l'efficienza</p> 
          <ul className="text-gray-600 list-disc pl-5 space-y-2">
            <li>Identificazione 850+ fornitori</li>
            <li>gestione 5+ currencies</li>
            <li>15-20 utenti validatori</li>
          </ul>
        </div>

        {/* Right Card */}
        <div className="bg-white p-5 w-1/4 h-[300px] flex flex-col justify-between rounded-lg shadow-lg transition-all duration-300 hover:bg-orange-500 hover:scale-105 hover:shadow-xl">
          <h2 className="text-black font-bold text-lg mb-4">MESSAGGISTICA MASSIVA</h2>
          <p className="text-gray-600 text-sm mb-4">
          Umes é un gatway di messagistica multicanale (SMS, Telegram, WhatsApp*, Facebook Messenger*) di livello enterprise. Sarete sempre più vicini alle esigenze dei vostri clienti.</p>
          <ul className="text-gray-600 list-disc pl-5 space-y-2">
            <li>1.000.000+ richieste/minuto</li>
            <li>scelta automatica del canale appropriato</li>
            <li>potenzia il tuo messaggio</li>
          </ul>
        </div>
      </div>

      {/* New Section: Rectangular Cards (3 cards) */}
      <div className="min-h-[300px] flex justify-center gap-0 mt-12">
        {/* Left Card */}
        <div className="bg-white p-6 w-1/4 h-[300px] flex flex-col justify-between rounded-lg shadow-lg transition-all duration-300 hover:bg-orange-500 hover:scale-105 hover:shadow-xl">
          <h2 className="text-black font-bold text-lg mb-4">ERP SPARKLE </h2>
          <p className="text-gray-600 text-sm mb-4">
          Sparkle é la soluzione che ti consente di monitorare tutte le attività di magazzino, logistica e trasporti.

</p><ul className="text-gray-600 list-disc pl-5 space-y-2">
            <li>sistema multi azienda
</li>
            <li>Gestione di 900+ mezzi</li>
            <li>50 utenti web</li>
          </ul>
        </div>

        {/* Middle Card (Taller - Adjusted on both top and bottom) */}
        <div className="bg-white p-6 w-1/4 h-[400px] flex flex-col justify-between rounded-lg shadow-lg transition-all duration-300 hover:bg-orange-500 hover:scale-105 hover:shadow-xl">
          <h2 className="text-black font-bold text-lg flex items-center justify-between mb-4">
MOBILE A/R          </h2>
          <p className="text-gray-600 text-sm mb-4">
          Scopri come la gestione delle raccomandate possa essere semplice e puntuale con livelli di tracciabilità elevati

</p><ul className="text-gray-600 list-disc pl-5 space-y-2">
            <li>200 buste/giorno</li>
            <li>gestione firma raccomandata</li>
            <li>ricerca full text</li>
          </ul>
        </div>

        {/* Right Card */}
        <div className="bg-white p-5 w-1/4 h-[300px] flex flex-col justify-between rounded-lg shadow-lg transition-all duration-300 hover:bg-orange-500 hover:scale-105 hover:shadow-xl">
          <h2 className="text-black font-bold text-lg mb-4"> SHIPMENT TRACKER</h2>
          <p className="text-gray-600 text-sm mb-4">
          TST (Testudo Shipment Tracker) permette di geolocalizzare le consegne della vostra azienda di logistica.

</p><ul className="text-gray-600 list-disc pl-5 space-y-2">
            <li>tracciamento live dei mezzi</li>
            <li>3000+ consegne/giorno</li>
            <li>notifica ritardi consegne in tempo reale</li>
          </ul>
        </div>
      </div>

      <Footer />
    </>
  );
}
