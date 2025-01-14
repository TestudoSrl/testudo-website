import Navbar from "@/components/navbar";
import Card from "@/components/card";
import { GrSystem } from "react-icons/gr";
import { FaBook, FaCode, FaServicestack, FaMedal, FaTabletAlt, FaAndroid, FaAppStoreIos } from "react-icons/fa";
import { MdOutlineTimeToLeave, MdOutlineTimer, MdOutlineQueryStats } from "react-icons/md";
import { BsPlugin } from "react-icons/bs";
import { GrTest } from "react-icons/gr";

import Footer from "@/components/footer";

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
              Le nostre competenze
            </h1>
            <p className="text-lg max-w-2xl mx-auto mb-8 animate-slide-in-right animation-delay-200">
              Da quando Testudo è diventata Google Partner ci siamo focalizzati sullo Google Apps e di conseguenza relativi linguaggi e database che permettano particolare versatilità
            </p>
          </div>
        </div>
      </div>

      {/* Skills Cards Section */}
      <div className="flex flex-wrap justify-center gap-6 p-10 text-white">
        <div className="max-w-xs w-full">
          <Card
            title="Front-End"
            Icon={FaTabletAlt}
            description="La conoscenza approfondita di ReactJS e Angular ci ha permesso di realizzare diversi progetti con risultati molto positivi"
          />
        </div>
        <div className="max-w-xs w-full">
          <Card
            title="Back-End"
            Icon={GrSystem}
            description="Sfruttare le potenzialità delle Google Apps per costruire il backend di un sistema ERP completamente custom ... fatto !!!"
          />
        </div>
        <div className="max-w-xs w-full">
          <Card
            title="Analitycs"
            Icon={MdOutlineQueryStats}
            description="L'adozione di soluzioni per il reporting quali Kibana ed Elastic Search per evidenziare aggregazioni dei dati."
          />
        </div>
        <div className="max-w-xs w-full">
          <Card
            title="Microservizi"
            Icon={FaServicestack}
            description="Per noi il pod non è l'iPod, saper sfruttare le potenzialità della programmazione a multi-istanze è molto importante"
          />
        </div>
        <div className="max-w-xs w-full">
          <Card
            title="App Android"
            Icon={FaAndroid}
            description="Sviluppiamo applicazioni mobile ad-hoc e/o riportiamo quanto già presente su applicazioni web ... il tutto in ambiente Android"
          />
        </div>
        <div className="max-w-xs w-full">
          <Card
            title="App IOS"
            Icon={FaAppStoreIos}
            description="Sviluppiamo applicazioni mobile ad-hoc e/o riportiamo quanto già presente su applicazioni web ... il tutto in ambiente Apple"
          />
        </div>
        <div className="max-w-xs w-full">
          <Card
            title="Programmazione Funzionale"
            Icon={FaCode}
            description="Il concetto di programmazione funzionale è alla base di un progetto di successo."
          />
        </div>
        <div className="max-w-xs w-full">
          <Card
            title="Test Driven Development"
            Icon={GrTest}
            description="Modello di sviluppo del software che parte dalla stesura di test automatici"
          />
        </div>
      </div>
      
      <Footer />
    </>
  );
}
