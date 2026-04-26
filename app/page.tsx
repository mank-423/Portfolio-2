'use client'

import About from "@/components/About"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"

const page = () => {
  return (
    <div className="min-h-screen flex flex-col">

      {/* Main Content */}
      <div className="max-w-4xl mx-auto p-5 flex-1 w-full">
        <Navbar />
        <About />
      </div>

      {/* Footer (same width) */}
      <div className="max-w-4xl mx-auto w-full px-5 pb-5">
        <Footer />
      </div>

    </div>
  )
}

export default page