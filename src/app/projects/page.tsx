'use client';

import { featuredProjects } from "../data/featured-projects";
import { ProjectCard } from "../components/ProjectCard";
import { useState } from "react";
import { Search } from "lucide-react";

export default function ProjectsPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = featuredProjects.filter(project => 
    project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.type.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="relative min-h-screen bg-[#F9F6F2]">
      {/* Background gradient for navbar area */}
      <div className="absolute top-0 left-0 right-0 h-[30vh] bg-gradient-to-b from-[#1A472A] to-transparent opacity-90 z-0"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white">Our Projects</h1>
          <p className="mt-4 text-xl text-white/80">
            Discover our portfolio of beautifully designed and carefully crafted homes
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative group">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#1A472A]/50 group-focus-within:text-[#1A472A] transition-colors" />
            <input
              type="text"
              placeholder="Search projects by name, location, or type..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-lg border-2 border-[#1A472A]/20 bg-white focus:border-[#1A472A] focus:ring-2 focus:ring-[#1A472A]/20 transition-colors duration-200 text-[#2F2F2F] placeholder:text-[#2F2F2F]/50"
            />
          </div>
        </div>

        {/* Filter Stats */}
        <div className="mb-8 text-[#2F2F2F]/70 font-medium">
          Showing {filteredProjects.length} projects
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.name}
              project={project}
              priority={index < 3} // Prioritize first 3 images
            />
          ))}
        </div>

        {/* No Results Message */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <Search className="w-12 h-12 mx-auto text-[#1A472A]/30 mb-4" />
            <p className="text-[#2F2F2F]/70 text-lg">
              No projects found matching your search criteria.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}