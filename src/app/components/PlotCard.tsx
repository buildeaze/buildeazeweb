// components/PlotCard.tsx
import { MapPin, Heart } from 'lucide-react';
import Image from 'next/image';

interface Plot {
  id: number;
  title: string;
  location: string;
  size: string;
  price: string;
  features: string[];
  image: string;
}

export function PlotCard({ plot }: { plot: Plot }) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group ring-1 ring-[#E5DDD2]">
      <div className="relative h-60">
        <Image
          src={plot.image}
          alt={plot.title}
          fill
          className="object-cover"
        />
        <button className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-sm hover:bg-white transition-colors group-hover:translate-y-0.5">
          <Heart className="w-5 h-5 text-[#2F2F2F] hover:text-[#B85042] transition-colors" />
        </button>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#1A472A]/90 to-transparent p-4">
          <h3 className="text-xl font-bold text-white">{plot.title}</h3>
          <div className="flex items-center text-[#F9F6F2] mt-1">
            <MapPin className="w-4 h-4 mr-1" />
            <span>{plot.location}</span>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <span className="text-[#4F4F4F] bg-[#F9F6F2] px-3 py-1 rounded-full text-sm">{plot.size}</span>
          <span className="text-2xl font-bold text-[#1A472A]">{plot.price}</span>
        </div>

        <div className="border-t border-[#E5DDD2] pt-4">
          <ul className="grid grid-cols-2 gap-3">
            {plot.features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2 text-[#4F4F4F]">
                <div className="w-2 h-2 bg-[#DAA520] rounded-full" />
                <span className="text-sm">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <button className="mt-6 w-full py-3 bg-[#1A472A] hover:bg-[#143621] text-white rounded-xl transition-all duration-300 shadow-lg shadow-[#1A472A]/10 hover:shadow-[#1A472A]/20 group-hover:translate-y-0.5">
          View Full Details
        </button>
      </div>
    </div>
  );
}