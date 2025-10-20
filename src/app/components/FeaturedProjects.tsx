import Link from "next/link";
import { ArrowRight } from 'lucide-react';
import { featuredProjects } from "../data/featured-projects";
import { ProjectCard } from "./ProjectCard";

export default function FeaturedProjects() {
  return (
    <section className="py-24 bg-[#F9F6F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#1A472A] mb-2">Featured Projects</h2>
          <div className="w-20 h-1 bg-[#DAA520] mx-auto mb-6"></div>
          <p className="mt-4 text-xl text-[#4F4F4F] max-w-2xl mx-auto">
            Explore our showcase of beautiful homes built through BuildEaze
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {featuredProjects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              priority={index === 0}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Link 
            href="/projects" 
            className="inline-flex items-center px-8 py-4 bg-[#DAA520] text-white text-lg font-semibold rounded-xl shadow-lg hover:bg-[#C69320] transition-all duration-300 group shadow-[#DAA520]/20 hover:shadow-[#DAA520]/30"
          >
            View All Projects
            <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
}