import Link from "next/link";
import { Home } from 'lucide-react';

export default function HeroSection() {
    return (
    //     <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white">
    //     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
    //       <div className="md:flex md:items-center">
    //         <div className="md:w-1/2 space-y-6">
    //           <h1 className="text-4xl md:text-5xl font-bold leading-tight">
    //             One-Click Solution for Your Dream Home
    //           </h1>
    //           <p className="text-lg md:text-xl mt-4">
    //             From finding the perfect plot to moving into your dream home, BuildEaze simplifies your entire journey.
    //           </p>
    //           <div className="pt-4">
    //             <Link href="/get-started" className="inline-block bg-white text-blue-700 px-6 py-3 rounded-lg font-medium shadow-md hover:bg-gray-100">
    //               Get Started
    //             </Link>
    //           </div>
    //         </div>
    //         <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
    //           <div className="relative w-full max-w-md h-64 md:h-80">
    //             <div className="absolute w-full h-full rounded-lg bg-white/10 backdrop-blur-sm shadow-xl transform rotate-3"></div>
    //             <div className="absolute w-full h-full rounded-lg bg-gradient-to-br from-blue-400 to-blue-600 shadow-xl -rotate-3">
    //               <div className="p-6 text-center">
    //                 <h3 className="text-lg font-medium">Your Dream Home</h3>
    //                 <div className="mt-4 h-40 md:h-56 bg-white/20 rounded-md flex items-center justify-center">
    //                   <Home size={64} />
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </section>

    <section className="relative text-white">
      {/* Background image */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-black/50 z-10"></div> {/* Overlay for better text readability */}
        <img 
          src="/images/HARIS041.jpg" 
          alt="Modern building" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="md:flex md:items-center">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              One-Click Solution for Your Dream Home
            </h1>
            <p className="text-lg md:text-xl mt-4">
              From finding the perfect plot to moving into your dream home, BuildEaze simplifies your entire journey.
            </p>
            <div className="pt-4">
              <Link href="/get-started" className="inline-block bg-white text-blue-700 px-6 py-3 rounded-lg font-medium shadow-md hover:bg-gray-100">
                Get Started
              </Link>
            </div>
          </div>
          {/* <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
            <div className="relative w-full max-w-md h-64 md:h-80">
              <div className="absolute w-full h-full rounded-lg bg-white/10 backdrop-blur-sm shadow-xl transform rotate-3"></div>
              <div className="absolute w-full h-full rounded-lg bg-gradient-to-br from-blue-400/80 to-blue-600/80 shadow-xl -rotate-3">
                <div className="p-6 text-center">
                  <h3 className="text-lg font-medium">Your Dream Home</h3>
                  <div className="mt-4 h-40 md:h-56 bg-white/20 rounded-md flex items-center justify-center">
                    <Home size={64} />
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
    );
  }
  