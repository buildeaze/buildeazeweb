// "use client"
// import React, { useState, useEffect } from 'react';
// import { User, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

// const testimonials = [
//   {
//     name: "Ramesh Kumar",
//     location: "Hyderabad",
//     comment: "BuildEaze made the entire process seamless. From finding a plot to getting the keys to my new home, everything was handled professionally."
//   },
//   {
//     name: "Priya Sharma",
//     location: "Pune",
//     comment: "I was nervous about building my first home, but the BuildEaze team guided me through each step. The cost estimation was accurate and the quality is excellent."
//   },
//   {
//     name: "Ramesh Kumar",
//     location: "Hyderabad",
//     comment: "BuildEaze made the entire process seamless. From finding a plot to getting the keys to my new home, everything was handled professionally."
//   },
//   {
//     name: "Priya Sharma",
//     location: "Pune",
//     comment: "I was nervous about building my first home, but the BuildEaze team guided me through each step. The cost estimation was accurate and the quality is excellent."
//   },
//   {
//     name: "Ramesh Kumar",
//     location: "Hyderabad",
//     comment: "BuildEaze made the entire process seamless. From finding a plot to getting the keys to my new home, everything was handled professionally."
//   }
// ];

// export default function Testimonials() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isAnimating, setIsAnimating] = useState(false);

//   const nextTestimonial = () => {
//     if (!isAnimating) {
//       setIsAnimating(true);
//       setCurrentIndex((prevIndex) => 
//         prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
//       );
//       setTimeout(() => setIsAnimating(false), 500);
//     }
//   };

//   const prevTestimonial = () => {
//     if (!isAnimating) {
//       setIsAnimating(true);
//       setCurrentIndex((prevIndex) => 
//         prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
//       );
//       setTimeout(() => setIsAnimating(false), 500);
//     }
//   };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       nextTestimonial();
//     }, 6000);
    
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold text-gray-900">What Our Clients Say</h2>
//           <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
//             Hear from homeowners who have successfully built their dream homes with BuildEaze
//           </p>
//         </div>
        
//         <div className="relative">
//           {/* Main Testimonial */}
//           <div 
//             className={`bg-white p-8 md:p-12 rounded-2xl shadow-xl mx-auto max-w-3xl transition-all duration-500 transform ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}
//           >
//             <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -z-10"></div>
            
//             <div className="flex items-start mb-6">
//               <Quote className="text-blue-100 w-16 h-16 flex-shrink-0" />
//               <p className="text-gray-700 text-xl leading-relaxed ml-4">
//                 {testimonials[currentIndex].comment}
//               </p>
//             </div>
            
//             <div className="mt-8 pt-6 border-t border-gray-100 flex items-center">
//               <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center text-white">
//                 <User size={24} />
//               </div>
//               <div className="ml-4">
//                 <h4 className="font-bold text-xl text-gray-900">{testimonials[currentIndex].name}</h4>
//                 <p className="text-gray-500 text-lg">{testimonials[currentIndex].location}</p>
//               </div>
//             </div>
//           </div>
          
//           {/* Navigation Controls */}
//           <div className="flex justify-center items-center mt-8 space-x-4">
//             <button 
//               onClick={prevTestimonial}
//               className="p-2 rounded-full bg-white shadow-md hover:bg-blue-50 transition-colors duration-200"
//               aria-label="Previous testimonial"
//             >
//               <ChevronLeft size={24} className="text-blue-600" />
//             </button>
            
//             <div className="flex space-x-2">
//               {testimonials.map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => setCurrentIndex(index)}
//                   className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                     currentIndex === index 
//                       ? 'bg-blue-600 w-6' 
//                       : 'bg-gray-300 hover:bg-gray-400'
//                   }`}
//                   aria-label={`Go to testimonial ${index + 1}`}
//                 />
//               ))}
//             </div>
            
//             <button 
//               onClick={nextTestimonial}
//               className="p-2 rounded-full bg-white shadow-md hover:bg-blue-50 transition-colors duration-200"
//               aria-label="Next testimonial"
//             >
//               <ChevronRight size={24} className="text-blue-600" />
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";
import React from "react";
import { User, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ramesh Kumar",
    location: "Hyderabad",
    comment:
      "BuildEaze made the entire process seamless. From finding a plot to getting the keys to my new home, everything was handled professionally.",
  },
  {
    name: "Priya Sharma",
    location: "Pune",
    comment:
      "I was nervous about building my first home, but the BuildEaze team guided me through each step. The cost estimation was accurate and the quality is excellent.",
  },
  {
    name: "Suresh Menon",
    location: "Bangalore",
    comment:
      "Amazing service and commitment from the team. Would highly recommend BuildEaze to anyone planning to build.",
  },
  {
    name: "Anita Desai",
    location: "Chennai",
    comment:
      "They really understood my vision and brought it to life. Communication was smooth and the timeline was well managed.",
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">What Our Clients Say</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from homeowners who have successfully built their dream homes with BuildEaze
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md transition hover:shadow-lg"
            >
              <div className="flex items-start mb-4">
                <Quote className="text-blue-100 w-10 h-10 flex-shrink-0" />
                <p className="text-gray-700 text-base leading-relaxed ml-3">
                  {testimonial.comment}
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 flex items-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white">
                  <User size={20} />
                </div>
                <div className="ml-3">
                  <h4 className="font-semibold text-md text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
