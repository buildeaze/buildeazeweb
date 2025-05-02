// import { Home, MapPin, Users } from "lucide-react";
// import Link from "next/link";

// export default function CTAButtons() {
//     return(
//         <section className="bg-gray-50 py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-3xl font-bold text-center text-gray-900">How can we help you build?</h2>
//           <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
//             <div className="bg-white p-6 rounded-lg shadow-md transition-all hover:shadow-xl">
//               <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
//                 <MapPin className="text-blue-600" size={24} />
//               </div>
//               <h3 className="text-xl font-semibold mb-2">Find a Plot</h3>
//               <p className="text-gray-600 mb-4">Discover the perfect location for your dream home with our verified listings.</p>
//               <Link href="/plots" className="text-blue-600 font-medium hover:underline inline-flex items-center">
//                 Browse Plots <span className="ml-1">→</span>
//               </Link>
//             </div>
//             <div className="bg-white p-6 rounded-lg shadow-md transition-all hover:shadow-xl">
//               <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
//                 <Home className="text-blue-600" size={24} />
//               </div>
//               <h3 className="text-xl font-semibold mb-2">Get a House Plan</h3>
//               <p className="text-gray-600 mb-4">Choose from ready-made designs or request custom plans tailored to your needs.</p>
//               <Link href="/designs" className="text-blue-600 font-medium hover:underline inline-flex items-center">
//                 Explore Designs <span className="ml-1">→</span>
//               </Link>
//             </div>
//             <div className="bg-white p-6 rounded-lg shadow-md transition-all hover:shadow-xl">
//               <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
//                 <Users className="text-blue-600" size={24} />
//               </div>
//               <h3 className="text-xl font-semibold mb-2">Hire a Contractor</h3>
//               <p className="text-gray-600 mb-4">Connect with trusted professionals for construction, plumbing, electrical, and more.</p>
//               <Link href="/contractors" className="text-blue-600 font-medium hover:underline inline-flex items-center">
//                 Find Contractors <span className="ml-1">→</span>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>
//     )
// }

import { Home, MapPin, Users } from "lucide-react";
import Link from "next/link";

export default function CTAButtons() {
  return (
    <section className="bg-[#F4F6F8] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-[#111827] mb-12">
          How can we help you build?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <MapPin className="text-white" size={28} />,
              title: "Find a Plot",
              description:
                "Discover the perfect location for your dream home with our verified listings.",
              link: "/plots",
              linkText: "Browse Plots",
            },
            {
              icon: <Home className="text-white" size={28} />,
              title: "Get a House Plan",
              description:
                "Choose from ready-made designs or request custom plans tailored to your needs.",
              link: "/designs",
              linkText: "Explore Designs",
            },
            {
              icon: <Users className="text-white" size={28} />,
              title: "Hire a Contractor",
              description:
                "Connect with trusted professionals for construction, plumbing, electrical, and more.",
              link: "/contractors",
              linkText: "Find Contractors",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02] group"
            >
              <div className="w-14 h-14 bg-[#1E50FF] rounded-full flex items-center justify-center mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-[#111827] mb-2">
                {item.title}
              </h3>
              <p className="text-[#4B5563] text-[15px] mb-4 leading-relaxed">
                {item.description}
              </p>
              <Link
                href={item.link}
                className="text-[#1E50FF] font-medium group-hover:underline inline-flex items-center"
              >
                {item.linkText} <span className="ml-1">→</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
