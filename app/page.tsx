import Image from "next/image";
import Navbar from "@/components/navbar";
import Card from "@/components/card"
import { GrSystem } from "react-icons/gr";
import { FaBook,FaMedal,FaTabletAlt } from "react-icons/fa";
import { MdOutlineTimeToLeave, MdOutlineTimer } from "react-icons/md";
import { BsPlugin } from "react-icons/bs";


export default function Home() {
  return (
    
    
    
    <>
      <div className="bg-cover bg-center bg-no-repeat bg-[url('/images/bg.jpg')]">

        <div className="relative z-10 text-white ">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

          <Navbar />

          <h1 className="translate-x-[-12rem] p-[20rem] text-7xl text-left font-bold">L'ARTE DEL CODING</h1>
          <h3 className="p-20 translate-x-[3rem] translate-y-[-15rem] font-thin text-xl mt-[-8rem]">Sviluppare codice... la nostra passione.... <br />la nostra forza...</h3>
          <button className="p-20 translate-x-[8rem] translate-y-[-19rem] mb-[10rem] border-opacity-50 bg-transparent border-2 border-white text-white px-7 py-2  hover:bg-white hover:text-black transition duration-300">
          CONTATTACI
           </button>
        </div>
        

      </div>

      
      <div className="flex relative z-10 translate-x-[10rem] text-white p-10">

        <Card 
        title="BackEnd Development"
        
        Icon={GrSystem}
        description="Scelta delle migliori tecnologie per garantire un sistema di
        backend a
        prova di bomba."
        />
         <Card 
        title="FrontEnd Development"
        
        Icon={FaTabletAlt}
        description="Sfoglia la nostra documentazione per capire la facilità di
        integrazione con i nostri servizi"
        />
        <Card 
        title="Feature Aggiuntive"
        
        Icon={FaMedal}
        description="Da sempre riconosciamo ed evidenziamo l'importanza di una applicazione su misura"
        />
 


      </div>
      <div className="flex relative translate-y-[-6rem] z-10 translate-x-[10rem] text-white p-10">

        <Card 
        title="Services Documentation"
        
        Icon={FaBook}
        description="Sfoglia la nostra documentazione per capire la facilità di
        integrazione con i nostri servizi"
        />

         <Card 
        title="Fast Delivery"
        
        Icon={MdOutlineTimer}
        description="I tempi di deployment sono per voi importanti? Per noi ancora di piu garantendovi il versioning"
        />
        <Card 
        title="Plugins Gratuiti"
        
        Icon={BsPlugin}
        description="Sfoglia i nostri plugin gratuiti per facilitare l'integrazione nelle vostre applicazioni sulla base delle nostre esperienze"
        />
 


      </div>
    </>
    
  );
}
