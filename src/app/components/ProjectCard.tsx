import { FeaturedProject } from '@/types/featured-project';
import { MapPin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface ProjectCardProps {
  project: FeaturedProject;
  priority?: boolean;
}

export function ProjectCard({ project, priority }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${encodeURIComponent(project.name.toLowerCase().replace(/\s+/g, '-'))}`}
      className="block group"
    >
      <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ring-1 ring-[#E5DDD2] hover:ring-[#1A472A]/20">
        <div className="relative h-64 overflow-hidden">
          <Image
            src={project.image}
            alt={project.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            priority={priority}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A472A]/90 via-[#1A472A]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <div className="p-8">
          <h3 className="text-2xl font-bold mb-3 text-[#2F2F2F] group-hover:text-[#1A472A] transition-colors">
            {project.name}
          </h3>
          <div className="flex items-center mb-4">
            <MapPin size={18} className="text-[#1A472A]" />
            <span className="ml-2 text-[#4F4F4F] font-medium">{project.location}</span>
          </div>
          <div className="flex items-center justify-between mb-6">
            <span className="bg-[#F9F6F2] text-[#1A472A] px-4 py-1 rounded-full text-sm font-semibold">
              {project.type}
            </span>
            <span className="text-[#DAA520] font-bold text-2xl">{project.price}</span>
          </div>
          <div className="flex justify-between pt-4 border-t border-[#E5DDD2]">
            <div className="text-left">
              <p className="text-xs text-[#6F6F6F] uppercase font-semibold">Area</p>
              <p className="text-[#2F2F2F] font-medium">{project.area}</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-[#6F6F6F] uppercase font-semibold">Timeline</p>
              <p className="text-[#2F2F2F] font-medium">{project.duration}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}