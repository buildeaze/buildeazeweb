import Link from "next/link";

export default function HeroSection() {
    return (

    <section className="relative text-white min-h-[85vh] flex items-center">
      {/* Background image */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A472A]/90 via-[#1A472A]/80 to-[#1A472A]/70 z-10"></div>
        <img 
          src="/images/HARIS041.jpg" 
          alt="Modern building" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="md:flex md:items-center">
          <div className="md:w-1/2 space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-[#F9F6F2]">
              One-Click Solution for Your Dream Home
            </h1>
            <p className="text-lg md:text-xl text-[#F9F6F2]/90 leading-relaxed">
              From finding the perfect plot to moving into your dream home, BuildEaze simplifies your entire journey.
            </p>
            <div className="pt-4 flex gap-4">
              <Link 
                href="/login" 
                className="inline-flex items-center px-8 py-4 bg-[#DAA520] hover:bg-[#C69320] text-white rounded-xl font-medium shadow-lg shadow-[#DAA520]/20 hover:shadow-[#DAA520]/30 transition-all duration-300"
              >
                Get Started
              </Link>
              <Link 
                href="/about" 
                className="inline-flex items-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-xl font-medium backdrop-blur-sm transition-all duration-300 ring-1 ring-white/20"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
    );
  }
  