'use client';

import { useState } from 'react';
import { 
  Search, 
  MapPin, 
  Filter, 
  ArrowRight, 
  SlidersHorizontal, 
  X 
} from 'lucide-react';
import { PlotCard } from '../components/PlotCard';
import { Plot, PlotFilters, SortOption, PlotFilterType, SortConfig } from '@/types/plot';
import Image from 'next/image';
import { mockPlots, cities, plotTypes, sortOptions, amenities } from '../data/plots';

export default function FindPlots() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState<PlotFilters>({
    types: [],
    priceRange: { min: null, max: null },
    locations: [],
    amenities: []
  });
  const [sortBy, setSortBy] = useState<SortOption>('relevance');

  const handleFilterChange = (filterType: keyof PlotFilters, value: any) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  const resetFilters = () => {
    setFilters({
      types: [],
      priceRange: { min: null, max: null },
      locations: [],
      amenities: []
    });
  };

  // Helper function to parse price string to number
  const parsePriceToNumber = (price: string): number => {
    const numericValue = price.replace(/[^0-9.]/g, '');
    if (price.includes('Cr')) {
      return parseFloat(numericValue) * 100;
    } else if (price.includes('L')) {
      return parseFloat(numericValue);
    }
    return parseFloat(numericValue);
  };

  // Filter plots based on search and filters
  const filteredPlots = mockPlots
    .filter((plot: Plot) => {
      const matchesSearch = plot.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           plot.location.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesType = filters.types.length === 0 || filters.types.includes(plot.plotType);
      const matchesLocation = filters.locations.length === 0 || filters.locations.some(loc => plot.location.includes(loc));
      
      const plotPrice = parsePriceToNumber(plot.price);
      const matchesPrice = (!filters.priceRange.min || plotPrice >= filters.priceRange.min) &&
                          (!filters.priceRange.max || plotPrice <= filters.priceRange.max);

      return matchesSearch && matchesType && matchesLocation && matchesPrice;
    })
    .sort((a: Plot, b: Plot) => {
      switch (sortBy) {
        case 'price-asc':
          return parsePriceToNumber(a.price) - parsePriceToNumber(b.price);
        case 'price-desc':
          return parsePriceToNumber(b.price) - parsePriceToNumber(a.price);
        case 'newest':
          return b.id - a.id; // Assuming newer plots have higher IDs
        default: // 'relevance'
          return 0; // Keep original order for relevance
      }
    });

  return (
    <div className="min-h-screen bg-[#F9F6F2]">
      {/* Hero Section with Background Image */}
      <section className="relative text-[#F9F6F2] min-h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/plotsbg1.jpg"
            alt="Modern building"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1A472A]/90 via-[#1A472A]/80 to-[#1A472A]/70" />
        </div>
        <div className="relative z-20 w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-[#F9F6F2] to-[#F9F6F2]/80">
              Find Your Perfect Plot
            </h1>
            <p className="text-lg md:text-xl mb-12 text-[#F9F6F2]/90">
              Discover premium land listings in prime locations across India
            </p>
            
            {/* Search Bar */}
            <div className="max-w-3xl mx-auto backdrop-blur-md bg-[#F9F6F2]/20 rounded-2xl p-2 shadow-xl ring-1 ring-[#F9F6F2]/20">
              <div className="flex flex-col md:flex-row gap-2">
                <div className="flex-1 relative group">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-[#1A472A]/50 group-focus-within:text-[#1A472A] transition-colors" />
                  <input 
                    type="text" 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 rounded-xl bg-[#F9F6F2]/90 backdrop-blur-sm text-[#2F2F2F] focus:outline-none focus:ring-2 focus:ring-[#1A472A] focus:bg-[#F9F6F2] transition-all duration-300 placeholder:text-[#2F2F2F]/50"
                    placeholder="Search by city, locality or landmark"
                  />
                </div>
                <div className="flex gap-2">
                  <button 
                    onClick={() => setShowFilters(true)}
                    className="md:hidden flex items-center justify-center p-4 bg-[#F9F6F2]/90 hover:bg-[#F9F6F2] rounded-xl transition-all duration-300"
                  >
                    <SlidersHorizontal className="w-5 h-5 text-[#1A472A]" />
                  </button>
                  <button className="flex items-center justify-center gap-2 px-6 py-4 bg-[#DAA520] hover:bg-[#DAA520]/90 rounded-xl transition-all duration-300 text-[#F9F6F2] shadow-lg shadow-[#DAA520]/25 hover:shadow-[#DAA520]/30">
                    <Search className="w-5 h-5" />
                    <span className="font-medium hidden sm:inline">Search</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-20">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Modern Filter Sidebar */}
          <aside 
            className={`
              fixed inset-y-0 left-0 md:relative w-full md:w-80 
              bg-[#F9F6F2]/95 backdrop-blur-xl md:bg-transparent md:backdrop-blur-none
              transform transition-transform duration-300 z-50
              ${showFilters ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
            `}
          >
            <div className="bg-white/90 md:bg-white/50 h-full md:h-auto overflow-y-auto p-8 rounded-r-2xl md:rounded-2xl shadow-lg md:sticky md:top-24 backdrop-blur-sm">
              <div className="flex justify-between items-center mb-10">
                <h3 className="text-xl font-bold text-[#1A472A]">
                  Filters
                </h3>
                <div className="flex items-center gap-4">
                  <button 
                    onClick={resetFilters}
                    className="text-[#1A472A] hover:text-[#1A472A]/80 flex items-center gap-1 transition-colors"
                  >
                    <Filter className="w-5 h-5" />
                    <span className="text-sm font-medium">Reset</span>
                  </button>
                  <button 
                    onClick={() => setShowFilters(false)}
                    className="md:hidden text-[#2F2F2F]/70 hover:text-[#2F2F2F]"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
              </div>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm font-semibold text-[#1A472A] mb-3">
                      PLOT TYPE
                    </h4>
                    <div className="space-y-3">
                      {plotTypes.map((type: PlotFilterType) => (
                        <label 
                          key={type} 
                          className="flex items-center gap-3 text-[#2F2F2F]"
                        >
                          <input 
                            type="checkbox" 
                            checked={filters.types.includes(type)}
                            onChange={(e) => {
                              const newTypes = e.target.checked 
                                ? [...filters.types, type]
                                : filters.types.filter(t => t !== type);
                              handleFilterChange('types', newTypes);
                            }}
                            className="w-5 h-5 rounded border-[#1A472A]/20 text-[#1A472A] focus:ring-[#1A472A]" 
                          />
                          <span>{type}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-[#1A472A]/10 pt-6">
                    <h4 className="text-sm font-semibold text-[#1A472A] mb-3">
                      PRICE RANGE (₹)
                    </h4>
                    <div className="grid grid-cols-2 gap-3">
                      <input
                        type="number" 
                        placeholder="Min" 
                        value={filters.priceRange.min || ''}
                        onChange={(e) => handleFilterChange('priceRange', {
                          ...filters.priceRange,
                          min: e.target.value ? Number(e.target.value) : null
                        })}
                        className="w-full px-4 py-2 border border-[#1A472A]/20 rounded-lg focus:ring-2 focus:ring-[#1A472A] focus:border-[#1A472A] bg-white text-[#2F2F2F] placeholder:text-[#2F2F2F]/50" 
                      />
                      <input
                        type="number" 
                        placeholder="Max" 
                        value={filters.priceRange.max || ''}
                        onChange={(e) => handleFilterChange('priceRange', {
                          ...filters.priceRange,
                          max: e.target.value ? Number(e.target.value) : null
                        })}
                        className="w-full px-4 py-2 border border-[#1A472A]/20 rounded-lg focus:ring-2 focus:ring-[#1A472A] focus:border-[#1A472A] bg-white text-[#2F2F2F] placeholder:text-[#2F2F2F]/50" 
                      />
                    </div>
                  </div>

                <div className="border-t border-[#1A472A]/10 pt-6">
                  <h4 className="text-sm font-semibold text-[#1A472A] mb-3">LOCATION</h4>
                  <div className="space-y-3">
                    {cities.map((city: string) => (
                      <label key={city} className="flex items-center gap-3 text-[#2F2F2F]">
                        <input 
                          type="checkbox"
                          checked={filters.locations.includes(city)}
                          onChange={(e) => {
                            const newLocations = e.target.checked
                              ? [...filters.locations, city]
                              : filters.locations.filter(c => c !== city);
                            handleFilterChange('locations', newLocations);
                          }}
                          className="w-5 h-5 rounded border-[#1A472A]/20 text-[#1A472A] focus:ring-[#1A472A]" 
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
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4 bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-sm ring-1 ring-[#1A472A]/10">
              <div>
                <h2 className="text-2xl font-bold text-[#1A472A]">
                  {filteredPlots.length} Premium Plots
                </h2>
                <p className="text-[#2F2F2F]/70 text-sm mt-1">
                  {filters.locations.length > 0 
                    ? `in ${filters.locations.join(', ')}` 
                    : 'across India'}
                </p>
              </div>
              <div className="flex items-center gap-3 bg-[#F9F6F2]/50 p-2 rounded-xl shadow-sm ring-1 ring-[#1A472A]/10">
                <span className="text-[#2F2F2F] text-sm">Sort by:</span>
                <select 
                  value={sortBy}
                  onChange={(e) => {
                    const newSortOption = e.target.value as SortOption;
                    setSortBy(newSortOption);
                  }}
                  className="px-4 py-2 border border-[#1A472A]/20 rounded-lg focus:ring-2 focus:ring-[#1A472A] text-[#2F2F2F] bg-white text-sm hover:border-[#1A472A]/30 transition-colors"
                >
                  {sortOptions.map(({ option, label }: SortConfig) => (
                    <option key={option} value={option}>
                      {label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6">
              {filteredPlots.map((plot: Plot) => (
                <PlotCard 
                  key={plot.id} 
                  plot={plot} 
                />
              ))}
            </div>

            {filteredPlots.length === 0 && (
              <div className="text-center py-16">
                <div className="text-[#1A472A]/50 mb-4">
                  <Search 
                    className="w-12 h-12 mx-auto" 
                  />
                </div>
                <h3 className="text-xl font-semibold text-[#1A472A] mb-2">
                  No plots found
                </h3>
                <p className="text-[#2F2F2F]/70">
                  Try adjusting your filters or search criteria
                </p>
                <button 
                  onClick={resetFilters}
                  className="mt-6 px-6 py-2 bg-[#1A472A]/10 text-[#1A472A] rounded-lg hover:bg-[#1A472A]/20 transition-colors inline-flex items-center gap-2"
                >
                  <Filter className="w-4 h-4" />
                  <span>Reset Filters</span>
                </button>
              </div>
            )}

            {filteredPlots.length > 0 && (
              <div className="mt-16 md:mt-20 flex justify-center">
                <button className="group flex items-center gap-3 px-8 py-4 bg-[#DAA520] hover:bg-[#DAA520]/90 text-[#F9F6F2] rounded-xl transition-all duration-300 shadow-lg shadow-[#DAA520]/25 hover:shadow-[#DAA520]/30">
                  <span className="font-medium">Load More Plots</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}