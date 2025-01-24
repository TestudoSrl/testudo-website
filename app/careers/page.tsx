import Navbar from "@/components/navbar";
import Card from "@/components/card";
import { GrSystem } from "react-icons/gr";
import { FaBook, FaCode, FaServicestack, FaMedal, FaTabletAlt, FaAndroid, FaAppStoreIos } from "react-icons/fa";
import { MdOutlineTimeToLeave, MdOutlineTimer, MdOutlineQueryStats } from "react-icons/md";
import { BsPlugin } from "react-icons/bs";
import { GrTest } from "react-icons/gr";

import Footer from "@/components/footer";

export default function Careers() {
  return (
    <>
      {/* Job Positions Section */}
      <div className="bg-cover bg-center bg-no-repeat bg-[url('/images/attivitaBG.jpg')]">
        <div className="relative z-10 text-white">
          {/* Navbar Sticky */}
          <div className="sticky top-0 z-50 bg-black bg-opacity-50">
          </div>
        </div>


        <div className="relative w-full bg-cover bg-center bg-no-repeat">

          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <Navbar />

          <div className="relative z-10 text-white px-8 md:px-20 py-20 text-center">
            <h1 className="text-7xl font-bold leading-tight mb-6 animate-slide-in-right">
              LAVORA CON NOI
            </h1>
            <p className="text-lg max-w-2xl mx-auto mb-8 animate-slide-in-right animation-delay-200">
              Scopri le posizioni aperte e unisciti a un team altamente qualificato per lavorare a un progetto complesso e sfidante.
              Direttamente da casa tua.
            </p>
            {/* Career Intro Section */}
            <div className="text-center max-w-3xl mx-auto px-6 py-12">
              <h2 className="text-4xl font-bold mb-6 animate-slide-in-right animation-delay-400">
                Entra nel team (100% remoto)
              </h2>
              <p className="text-lg mb-8 leading-relaxed animate-slide-in-right animation-delay-600">
                Testudo è una realtà dove c’è una forte cultura aziendale, che coinvolge chiunque entri in contatto con noi.
                Crediamo, innanzitutto, in alcuni valori e principi di base: rispetto reciproco, etica prima del business, spirito di
                collaborazione e crescita, sia personale sia professionale, elevata professionalità, al di là delle proprie competenze
                tecniche, e partecipazione attiva alla crescita aziendale.
              </p>
              <p className="text-lg mb-8 leading-relaxed animate-slide-in-right animation-delay-800">
                Testudo è un posto molto piacevole dove lavorare: ambiente senza pressioni dove si può mettere e produrre qualità.
                Tutti insieme, sviluppatori, ingegneri, dev-ops, tecnici e non, lavoriamo per produrre e mantenere soluzioni altamente
                innovative. Crediamo fortemente nel lavoro remoto, per poter raggiungere personale di qualità senza sradicarlo dal posto
                dove preferisce vivere.
              </p>
              <p className="text-lg mb-8 leading-relaxed animate-slide-in-right animation-delay-1000">
                Il nostro obiettivo è far sì che ogni membro del team di Testudo diventi una parte vitale dell’azienda, prenda parte
                attivamente alla vita aziendale e possa crescere professionalmente insieme al resto del team.
              </p>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}
