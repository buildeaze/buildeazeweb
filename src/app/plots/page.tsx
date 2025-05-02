import { Search, MapPin, Filter, ArrowRight } from 'lucide-react';
import { PlotCard } from '../components/PlotCard';

export default function FindPlots() {
  const plots = [
    {
      id: 1,
      title: "Residential Plot in Hyderabad",
      location: "Gachibowli, Hyderabad",
      size: "2400 sq.ft",
      price: "₹75L",
      features: ["Corner plot", "NA approved", "Gated community"],
      image: "/images/plot1.jpg"
    },
    {
      id: 2,
      title: "Farm Land in Bangalore",
      location: "Whitefield, Bangalore",
      size: "1 Acre",
      price: "₹1.2Cr",
      features: ["Agricultural land", "Clear title", "Road access"],
      image: "/images/plot2.jpg"
    },
    {
      id: 3,
      title: "Commercial Plot in Pune",
      location: "Hinjewadi, Pune",
      size: "5000 sq.ft",
      price: "₹2.5Cr",
      features: ["Main road facing", "High ROI", "Ready to build"],
      image: "/images/plot3.jpg"
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Background Image */}
      <section className="relative text-white">
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-black/50 z-0"></div> {/* Overlay for better text readability */}
        <img 
          src="/images/plotsbg1.jpg" 
          alt="Modern building" 
          className="w-full h-full object-cover"
        />
      </div>
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-40 flex items-center justify-center">
          <div className="text-center max-w-4xl px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">
              Find Your Perfect Plot
            </h1>
            <p className="text-xl mb-8 text-gray-200">
              Discover premium land listings in prime locations across India
            </p>
            
            {/* Modern Search Bar */}
            <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-sm rounded-xl p-2 shadow-xl">
              <div className="flex flex-col md:flex-row gap-2">
                <div className="flex-1 relative">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input 
                    type="text" 
                    className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-300"
                    placeholder="Search by city, locality or landmark"
                  />
                </div>
                <button className="flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg transition-all duration-300">
                  <Search className="w-5 h-5" />
                  <span className="font-medium">Search</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Modern Filter Sidebar */}
          <aside className="md:w-80">
            <div className="bg-white p-6 rounded-xl shadow-lg sticky top-20">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-gray-800">Filters</h3>
                <button className="text-blue-600 flex items-center gap-1">
                  <Filter className="w-5 h-5" />
                  Reset
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-semibold text-gray-700 mb-3">PLOT TYPE</h4>
                  <div className="space-y-3">
                    {['Residential', 'Commercial', 'Agricultural'].map(type => (
                      <label key={type} className="flex items-center gap-3 text-gray-600">
                        <input 
                          type="checkbox" 
                          className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500" 
                        />
                        <span>{type}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h4 className="text-sm font-semibold text-gray-700 mb-3">PRICE RANGE (₹)</h4>
                  <div className="grid grid-cols-2 gap-3">
                    <input
                      type="number" 
                      placeholder="Min" 
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                    />
                    <input
                      type="number" 
                      placeholder="Max" 
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                    />
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h4 className="text-sm font-semibold text-gray-700 mb-3">LOCATION</h4>
                  <div className="space-y-3">
                    {['Hyderabad', 'Bangalore', 'Pune', 'Chennai'].map(city => (
                      <label key={city} className="flex items-center gap-3 text-gray-600">
                        <input 
                          type="checkbox" 
                          className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500" 
                        />
                        <span>{city}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Plot Listing Area */}
          <div className="flex-1">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
              <h2 className="text-2xl font-bold text-gray-900">
                24 Premium Plots in Hyderabad
              </h2>
              <div className="flex items-center gap-3">
                <span className="text-gray-600">Sort by:</span>
                <select className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500">
                  <option>Relevance</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Newest First</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
              {plots.map(plot => (
                <PlotCard key={plot.id} plot={plot} />
              ))}
            </div>

            <div className="mt-12 flex justify-center">
              <button className="flex items-center gap-2 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-300">
                Load More Plots
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}