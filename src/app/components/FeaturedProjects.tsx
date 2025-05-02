// import Link from "next/link";
// import { Home, MapPin, Search } from 'lucide-react';

// const featuredProjects = [
//   {
//     name: "Modern Villa",
//     location: "Bangalore, Karnataka",
//     type: "3 BHK Villa",
//     price: "₹45L",
//     area: "2400 sq.ft",
//     duration: "8 months"
//   },
//   {
//     name: "Contemporary Apartment",
//     location: "Chennai, Tamil Nadu",
//     type: "2 BHK Apartment",
//     price: "₹32L",
//     area: "1200 sq.ft",
//     duration: "6 months"
//   },
//   {
//     name: "Traditional Home",
//     location: "Kochi, Kerala",
//     type: "4 BHK House",
//     price: "₹58L",
//     area: "3200 sq.ft",
//     duration: "10 months"
//   }
// ];

// export default function FeaturedProjects() {
//     return (
//       <section className="py-16">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl font-bold text-gray-900">Featured Projects</h2>
//           <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
//             Explore our showcase of beautiful homes built through BuildEaze
//           </p>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {featuredProjects.map((project, index) => (
//             <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all">
//               <div className="relative h-48 bg-gray-200">
//                 <div className="absolute inset-0 flex items-center justify-center">
//                   <Home size={48} className="text-gray-400" />
//                 </div>
//               </div>
//               <div className="p-4">
//                 <h3 className="text-xl font-semibold">{project.name}</h3>
//                 <div className="flex items-center mt-2">
//                   <MapPin size={16} className="text-gray-500" />
//                   <span className="ml-1 text-gray-600">{project.location}</span>
//                 </div>
//                 <div className="mt-2 flex justify-between items-center">
//                   <span className="text-gray-800 font-medium">{project.type}</span>
//                   <span className="text-blue-600 font-bold">{project.price}</span>
//                 </div>
//                 <div className="mt-4 flex justify-between">
//                   <span className="text-sm text-gray-600">{project.area}</span>
//                   <span className="text-sm text-gray-600">{project.duration}</span>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//         <div className="mt-10 text-center">
//           <Link href="/projects" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700">
//             View All Projects
//           </Link>
//         </div>
//       </div>
//     </section>
//     );
//   }
  
import Link from "next/link";
import { MapPin, ArrowRight } from 'lucide-react';
import Image from "next/image";

const featuredProjects = [
  {
    name: "Modern Villa",
    location: "Bangalore, Karnataka",
    type: "3 BHK Villa",
    price: "₹45L",
    area: "2400 sq.ft",
    duration: "8 months",
    image: "/images/fp1.jpg" // Add your image paths here
  },
  {
    name: "Contemporary Apartment",
    location: "Chennai, Tamil Nadu",
    type: "2 BHK Apartment",
    price: "₹32L",
    area: "1200 sq.ft",
    duration: "6 months",
    image: "/images/fp2.jpg"
  },
  {
    name: "Traditional Home",
    location: "Kochi, Kerala",
    type: "4 BHK House",
    price: "₹58L",
    area: "3200 sq.ft",
    duration: "10 months",
    image: "/images/fp3.jpg"
  }
];

export default function FeaturedProjects() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">Featured Projects</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our showcase of beautiful homes built through BuildEaze
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {featuredProjects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                <Image 
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                  priority={index === 0} // Prioritize loading the first image
                />
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3">{project.name}</h3>
                
                <div className="flex items-center mb-4">
                  <MapPin size={18} className="text-blue-600" />
                  <span className="ml-2 text-gray-600 font-medium">{project.location}</span>
                </div>
                
                <div className="flex items-center justify-between mb-6">
                  <span className="text-gray-800 font-semibold text-lg">{project.type}</span>
                  <span className="text-blue-600 font-bold text-2xl">{project.price}</span>
                </div>
                
                <div className="flex justify-between pt-4 border-t border-gray-100">
                  <div className="text-left">
                    <p className="text-xs text-gray-500 uppercase font-semibold">Area</p>
                    <p className="text-gray-800 font-medium">{project.area}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-500 uppercase font-semibold">Timeline</p>
                    <p className="text-gray-800 font-medium">{project.duration}</p>
                  </div>
                </div>
              </div>
              
              <div className="px-8 pb-6">
                <Link 
                  href={`/projects/${project.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-blue-600 font-medium flex items-center hover:text-blue-800"
                >
                  View details
                  <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Link 
            href="/projects" 
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 group"
          >
            View All Projects
            <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
}