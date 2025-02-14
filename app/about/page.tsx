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
      {/* Ensure no horizontal overflow */}
      <div className="w-full overflow-hidden">
        {/* Competencies Section */}
        <div className="relative w-full bg-cover bg-center bg-no-repeat bg-[url('/images/attivitaBG.jpg')]">
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>

          {/* Navbar */}
          <div className="sticky top-0 z-50 bg-black bg-opacity-50 w-full">
            <Navbar />
          </div>

          {/* Main Content */}
          <div className="relative z-10 text-white px-8 md:px-20 py-20 text-center">
            <h1 className="text-6xl font-bold leading-tight mb-6 animate-slide-in-right">
              Le nostre competenze
            </h1>
            <p className="text-lg max-w-2xl mx-auto mb-8 animate-slide-in-right animation-delay-200">
              Da quando Testudo è diventata Google Partner ci siamo focalizzati sullo Google Apps e di conseguenza relativi linguaggi e database che permettano particolare versatilità.
            </p>
          </div>
        </div>

        {/* Skills Cards Section */}
        <div className="flex flex-wrap justify-center gap-6 px-6 py-10 text-white">
          {[
            { title: "Front-End", icon: FaTabletAlt, desc: "La conoscenza approfondita di ReactJS e Angular ci ha permesso di realizzare diversi progetti con risultati molto positivi." },
            { title: "Back-End", icon: GrSystem, desc: "Sfruttare le potenzialità delle Google Apps per costruire il backend di un sistema ERP completamente custom ... fatto !!!" },
            { title: "Analitycs", icon: MdOutlineQueryStats, desc: "L'adozione di soluzioni per il reporting quali Kibana ed Elastic Search per evidenziare aggregazioni dei dati." },
            { title: "Microservizi", icon: FaServicestack, desc: "Per noi il pod non è l'iPod, saper sfruttare le potenzialità della programmazione a multi-istanze è molto importante." },
            { title: "App Android", icon: FaAndroid, desc: "Sviluppiamo applicazioni mobile ad-hoc e/o riportiamo quanto già presente su applicazioni web ... il tutto in ambiente Android." },
            { title: "App IOS", icon: FaAppStoreIos, desc: "Sviluppiamo applicazioni mobile ad-hoc e/o riportiamo quanto già presente su applicazioni web ... il tutto in ambiente Apple." },
            { title: "Programmazione Funzionale", icon: FaCode, desc: "Il concetto di programmazione funzionale è alla base di un progetto di successo." },
            { title: "Test Driven Development", icon: GrTest, desc: "Modello di sviluppo del software che parte dalla stesura di test automatici." }
          ].map((skill, index) => (
            <div key={index} className="max-w-xs w-full">
              <Card title={skill.title} Icon={skill.icon} description={skill.desc} />
            </div>
          ))}
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
