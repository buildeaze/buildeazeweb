// import Link from "next/link";
// import { Home, Search } from 'lucide-react';

// export default function SearchBar() {
//     return (
//         <section className="bg-[#F4F6F8] py-6">
//         <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="bg-white shadow-lg rounded-lg p-4 -mt-16 relative z-10">
//             <div className="flex flex-col md:flex-row items-center">
//               <div className="w-full md:w-3/5 flex items-center bg-gray-100 rounded-lg px-4 py-2">
//                 <Search className="text-gray-500 mr-2" size={20} />
//                 <input 
//                   type="text" 
//                   placeholder="Search for plots, house plans, or contractors..." 
//                   className="w-full bg-transparent border-none focus:outline-none text-gray-700 py-2"
//                 />
//               </div>
//               <div className="w-full md:w-2/5 mt-3 md:mt-0 md:ml-3 flex">
//                 <select className="w-full md:w-2/3 bg-gray-100 border-none rounded-lg px-4 py-3 text-gray-700 focus:outline-none">
//                   <option value="">All Categories</option>
//                   <option value="plots">Plots</option>
//                   <option value="designs">House Designs</option>
//                   <option value="contractors">Contractors</option>
//                 </select>
//                 <button className="w-full md:w-1/3 md:ml-3 bg-blue-600 text-white rounded-lg px-4 py-3 font-medium hover:bg-blue-700">
//                   Search
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     );
//   }
  
import { Search, ChevronDown } from 'lucide-react';

export default function SearchBar() {
    return (
        <section className="bg-[#F4F6F8] py-6">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white shadow-lg rounded-lg p-4 -mt-16 relative z-10">
            <div className="flex flex-col md:flex-row items-center">
              {/* Input Group */}
              <div className="w-full md:w-3/5 flex items-center bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500">
                <Search className="text-gray-500 mr-2" size={20} />
                <input 
                  type="text" 
                  placeholder="Search for plots, house plans, or contractors..." 
                  className="w-full bg-transparent border-none focus:outline-none text-gray-700 placeholder-gray-500 py-2"
                />
              </div>

              {/* Category Selector + Button */}
              <div className="w-full md:w-2/5 mt-3 md:mt-0 md:ml-3 flex">
                <div className="relative w-full md:w-2/3">
                  <select className="w-full bg-gray-100 border border-gray-300 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 appearance-none">
                    <option value="">All Categories</option>
                    <option value="plots">Plots</option>
                    <option value="designs">House Designs</option>
                    <option value="contractors">Contractors</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
                </div>
                <button className="w-full md:w-1/3 md:ml-3 bg-blue-600 text-white rounded-lg px-4 py-3 font-medium hover:bg-blue-700 transition-all duration-300 flex items-center justify-center">
                  <Search className="w-5 h-5 mr-2" />
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}