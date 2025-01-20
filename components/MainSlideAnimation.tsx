'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'  // Import Link component from Next.js

export default function SlideInDiv() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div
      className={`
        transform transition-transform duration-1000 ease-in-out
        ${isVisible ? 'translate-x-0' : '-translate-x-full'}
      `}
    >
      <div>
        <h1 className="translate-x-[-12rem] p-[20rem] text-7xl text-left font-bold">L'ARTE DEL CODING</h1>
        
        <h3 className="p-20 translate-x-[3rem] translate-y-[-15rem] font-thin text-xl mt-[-8rem]">
          Sviluppare codice... la nostra passione.... <br />la nostra forza...
        </h3>

        {/* Wrap the button with a Link component */}
        <Link href="/contact">
          <button
            className="p-20 translate-x-[8rem] translate-y-[-19rem] mb-[10rem] border-2 border-white text-white px-7 py-2 
            bg-transparent hover:bg-orange-500 hover:text-black 
            hover:scale-110 transition-all duration-300 ease-in-out"
          >
            CONTATTACI
          </button>
        </Link>
      </div>
    </div>
  )
}
