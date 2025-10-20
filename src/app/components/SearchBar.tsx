import { Search, ChevronDown } from 'lucide-react';

export default function SearchBar() {
    return (
        <section className="bg-[#F9F6F2] py-6">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/80 backdrop-blur-md shadow-xl rounded-2xl p-6 -mt-16 relative z-10 ring-1 ring-[#E5DDD2]">
            <div className="flex flex-col md:flex-row items-center gap-4">
              {/* Input Group */}
              <div className="w-full md:w-3/5 flex items-center bg-[#F9F6F2] border border-[#E5DDD2] rounded-xl px-4 py-2 focus-within:border-[#1A472A] focus-within:ring-2 focus-within:ring-[#1A472A]/20 transition-all duration-300">
                <Search className="text-[#4F4F4F] mr-2" size={20} />
                <input 
                  type="text" 
                  placeholder="Search for plots, house plans, or contractors..." 
                  className="w-full bg-transparent border-none focus:outline-none text-[#2F2F2F] placeholder-[#6F6F6F] py-2"
                />
              </div>

              {/* Category Selector + Button */}
              <div className="w-full md:w-2/5 flex gap-3">
                <div className="relative w-full md:w-2/3">
                  <select className="w-full bg-[#F9F6F2] border border-[#E5DDD2] rounded-xl px-4 py-3 text-[#2F2F2F] focus:outline-none focus:border-[#1A472A] focus:ring-2 focus:ring-[#1A472A]/20 appearance-none transition-all duration-300">
                    <option value="">All Categories</option>
                    <option value="plots">Plots</option>
                    <option value="designs">House Designs</option>
                    <option value="contractors">Contractors</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-[#4F4F4F]" size={20} />
                </div>
                <button className="w-full md:w-1/3 bg-[#1A472A] text-white rounded-xl px-4 py-3 font-medium hover:bg-[#143621] transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-[#1A472A]/10 hover:shadow-[#1A472A]/20">
                  <Search className="w-5 h-5" />
                  <span>Search</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}