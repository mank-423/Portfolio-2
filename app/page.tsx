'use client'

import About from "@/components/About"
import Contact from "@/components/Contact"
import Experience from "@/components/Experience"
import Footer from "@/components/Footer"
import LenisProvider from "@/components/LenisProvider"
import Navbar from "@/components/Navbar"
import Projects from "@/components/Projects"
import Skills from "@/components/Skills"

const page = () => {
  return (
    <LenisProvider>

      <div className="min-h-screen flex flex-col">

        {/* Main Content */}
        <div className="max-w-4xl mx-auto p-5 flex-1 w-full">
          <Navbar />
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Contact />
        </div>

        {/* Footer (same width) */}
        <div className="max-w-4xl mx-auto w-full px-5 pb-5">
          <Footer />
        </div>

      </div>
    </LenisProvider>
  )
}

export default page