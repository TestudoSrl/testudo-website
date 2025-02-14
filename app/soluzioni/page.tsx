import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function Contact() {
  return (
    <div className="overflow-x-hidden">
      {/* Competencies Section */}
      <div className="bg-cover bg-center bg-no-repeat bg-[url('/images/attivitaBG.jpg')]">
        <div className="relative z-10 text-white">
          {/* Navbar Sticky */}
          <div className="sticky top-0 z-50 bg-black bg-opacity-50"></div>
        </div>

        <div className="relative w-full bg-cover bg-center bg-no-repeat">
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <Navbar />

          <div className="relative z-10 text-white px-8 md:px-20 py-20 text-center">
            <h1 className="text-4xl md:text-7xl font-bold leading-tight mb-6 animate-slide-in-right">
              BEST IN CLASS
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 animate-slide-in-right animation-delay-200">
              Vesti i tuoi processi aziendali con la soluzione tecnologica migliore e più affine alle tue esigenze.
            </p>
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="min-h-[300px] flex flex-wrap justify-center gap-6 mt-12 px-4 w-full max-w-[1200px] mx-auto">
        {[
          {
            title: "GESTIONE ORDINI",
            description:
              "La multicanalità non ci spaventa, email, fax, edi, sms e social come acquisizione documentale ed estrazione dati per la gestione completa del processo, liberando energie e preziose risorse per l'azienda.",
            points: [
              "Identificazione di 2500+ clienti",
              "Gestione di 100+ prodotti",
              "10-15 utenti validatori",
            ],
            height: "h-[300px]",
          },
          {
            title: "GESTIONE CICLO PASSIVO",
            description:
              "L'automazione delle fatture è uno dei primi miglioramenti che un'azienda in fase di consolidamento e crescita intraprende. Automatizzare il ciclo passivo significa ridurre i costi e aumentare l'efficienza.",
            points: [
              "Identificazione 850+ fornitori",
              "Gestione 5+ currencies",
              "15-20 utenti validatori",
            ],
            height: "h-[400px]",
          },
          {
            title: "MESSAGGISTICA MASSIVA",
            description:
              "Umes è un gateway di messaggistica multicanale (SMS, Telegram, WhatsApp*, Facebook Messenger*) di livello enterprise. Sarete sempre più vicini alle esigenze dei vostri clienti.",
            points: [
              "1.000.000+ richieste/minuto",
              "Scelta automatica del canale appropriato",
              "Potenzia il tuo messaggio",
            ],
            height: "h-[300px]",
          },
          {
            title: "ERP SPARKLE",
            description:
              "Sparkle è la soluzione che ti consente di monitorare tutte le attività di magazzino, logistica e trasporti.",
            points: [
              "Sistema multi azienda",
              "Gestione di 900+ mezzi",
              "50 utenti web",
            ],
            height: "h-[300px]",
          },
          {
            title: "MOBILE A/R",
            description:
              "Scopri come la gestione delle raccomandate possa essere semplice e puntuale con livelli di tracciabilità elevati.",
            points: [
              "200 buste/giorno",
              "Gestione firma raccomandata",
              "Ricerca full text",
            ],
            height: "h-[400px]",
          },
          {
            title: "SHIPMENT TRACKER",
            description:
              "TST (Testudo Shipment Tracker) permette di geolocalizzare le consegne della vostra azienda di logistica.",
            points: [
              "Tracciamento live dei mezzi",
              "3000+ consegne/giorno",
              "Notifica ritardi consegne in tempo reale",
            ],
            height: "h-[300px]",
          },
        ].map((card, index) => (
          <div
            key={index}
            className={`bg-white p-6 w-full md:w-1/4 ${card.height} flex flex-col justify-between rounded-lg shadow-lg transition-all duration-300 hover:bg-orange-500 hover:scale-105 hover:shadow-xl`}
          >
            <h2 className="text-black font-bold text-lg mb-4">{card.title}</h2>
            <p className="text-gray-600 text-sm mb-4">{card.description}</p>
            <ul className="text-gray-600 list-disc pl-5 space-y-2">
              {card.points.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}
