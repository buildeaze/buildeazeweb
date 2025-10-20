'use client';

import { featuredProjects } from "../../data/featured-projects";
import { ArrowLeft, Download, Calendar, MapPin, Home, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { notFound } from "next/navigation";
import { useState } from "react";

export default function ProjectDetailPage() {
  const pathname = usePathname();
  const projectSlug = pathname.split('/').pop();
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  
  const project = featuredProjects.find(
    p => p.name.toLowerCase().replace(/\s+/g, '-') === projectSlug
  );

  if (!project) {
    notFound();
  }

  // Sample data for floor plans and construction photos
  const floorPlans = [
    {
      title: "Ground Floor",
      area: "1,865 sq.ft",
      image: "/images/floor-plans/ground-floor.png" // Replace with actual path
    },
    {
      title: "First Floor",
      area: "1,108 sq.ft",
      image: "/images/floor-plans/first-floor.png" // Replace with actual path
    },
    {
      title: "Plot Layout",
      area: "2,973 sq.ft total",
      image: "/images/floor-plans/plot-layout.jpg" // Replace with actual path
    }
  ];

  const constructionPhotos = [
    {
      title: "Foundation & Layout",
      image: "/images/construction/foundation-layout.jpeg", // Replace with actual path
      phase: "Phase 1"
    },
    {
      title: "Foundation Complete",
      image: "/images/construction/foundation-complete.jpeg", // Replace with actual path
      phase: "Phase 2"
    },
    {
      title: "Structure Rising",
      image: "/images/construction/structure.jpeg", // Replace with actual path
      phase: "Phase 3"
    },
    {
      title: "Walls & Roofing",
      image: "/images/construction/walls-roofing.jpeg", // Replace with actual path
      phase: "Phase 4"
    }
  ];

  const plotDetails = {
    plotArea: "10 Cents (4,356 sq.ft)",
    builtArea: "2,973 sq.ft",
    orientation: "North-East facing",
    accessRoad: "12 ft wide access road"
  };

  return (
    <main className="relative min-h-screen bg-[#F9F6F2]">
      {/* Background gradient for navbar area */}
      <div className="absolute top-0 left-0 right-0 h-[30vh] bg-gradient-to-b from-[#1A472A] to-transparent opacity-90 z-0"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
        {/* Back Button */}
        <Link
          href="/projects"
          className="inline-flex items-center text-white hover:text-[#DAA520] transition-colors duration-300 mb-8 font-medium"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Projects
        </Link>

        {/* Project Header */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden ring-1 ring-[#E5DDD2]">
          <div className="relative h-[60vh] w-full">
            <Image
              src={project.image}
              alt={project.name}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A472A]/90 via-[#1A472A]/40 to-transparent opacity-60"></div>
          </div>

          <div className="p-8">
            <h1 className="text-4xl font-bold text-[#2F2F2F] mb-4">
              {project.name}
            </h1>

            {/* Project Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
              <div>
                <h3 className="text-sm font-semibold text-[#1A472A] uppercase">Location</h3>
                <p className="mt-1 text-lg font-medium text-[#2F2F2F]">{project.location}</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-[#1A472A] uppercase">Type</h3>
                <p className="mt-1 text-lg font-medium text-[#2F2F2F]">{project.type}</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-[#1A472A] uppercase">Area</h3>
                <p className="mt-1 text-lg font-medium text-[#2F2F2F]">{project.area}</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-[#1A472A] uppercase">Timeline</h3>
                <p className="mt-1 text-lg font-medium text-[#2F2F2F]">{project.duration}</p>
              </div>
            </div>

            {/* Price Card */}
            <div className="mt-12 bg-[#F9F6F2] rounded-xl p-6 ring-1 ring-[#E5DDD2]">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-semibold text-[#1A472A]">Project Cost</h3>
                  <p className="text-sm text-[#1A472A]/80 mt-1">All-inclusive price</p>
                </div>
                <div className="text-3xl font-bold text-[#DAA520]">{project.price}</div>
              </div>
            </div>

            {/* Contact Section */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-[#2F2F2F] mb-4">Interested in this project?</h2>
              <p className="text-[#2F2F2F]/80 mb-6">
                Contact our team to learn more about this project or to schedule a consultation.
              </p>
              <div className="flex gap-4">
                <button className="px-6 py-3 bg-[#1A472A] text-white rounded-lg hover:bg-[#1A472A]/90 transition-colors duration-300">
                  Schedule Consultation
                </button>
                <button className="px-6 py-3 border-2 border-[#1A472A] text-[#1A472A] rounded-lg hover:bg-[#F9F6F2] hover:border-[#DAA520] hover:text-[#DAA520] transition-all duration-300">
                  Download Brochure
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Plot Details Section */}
        <div className="mt-12 bg-white rounded-2xl shadow-xl overflow-hidden ring-1 ring-[#E5DDD2]">
          <div className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="w-6 h-6 text-[#1A472A]" />
              <h2 className="text-3xl font-bold text-[#2F2F2F]">Plot Details</h2>
            </div>

            <div className="relative h-[400px] w-full rounded-xl overflow-hidden mb-8 ring-1 ring-[#E5DDD2]">
              <Image
                src="/images/plot-layout.jpg"
                alt="Plot Layout"
                fill
                className="object-contain bg-[#F9F6F2]"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#F9F6F2] rounded-xl p-5 ring-1 ring-[#E5DDD2]">
                <h4 className="font-semibold text-[#1A472A] mb-2">Plot Area</h4>
                <p className="text-[#2F2F2F] text-lg">{plotDetails.plotArea}</p>
              </div>
              <div className="bg-[#F9F6F2] rounded-xl p-5 ring-1 ring-[#E5DDD2]">
                <h4 className="font-semibold text-[#1A472A] mb-2">Total Built Area</h4>
                <p className="text-[#2F2F2F] text-lg">{plotDetails.builtArea}</p>
              </div>
              <div className="bg-[#F9F6F2] rounded-xl p-5 ring-1 ring-[#E5DDD2]">
                <h4 className="font-semibold text-[#1A472A] mb-2">Orientation</h4>
                <p className="text-[#2F2F2F] text-lg">{plotDetails.orientation}</p>
              </div>
              <div className="bg-[#F9F6F2] rounded-xl p-5 ring-1 ring-[#E5DDD2]">
                <h4 className="font-semibold text-[#1A472A] mb-2">Access Road</h4>
                <p className="text-[#2F2F2F] text-lg">{plotDetails.accessRoad}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Floor Plans Section */}
        <div className="mt-12 bg-white rounded-2xl shadow-xl overflow-hidden ring-1 ring-[#E5DDD2]">
          <div className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <Home className="w-6 h-6 text-[#1A472A]" />
              <h2 className="text-3xl font-bold text-[#2F2F2F]">Floor Plans</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {floorPlans.map((plan, index) => (
                <div
                  key={index}
                  className="group bg-[#F9F6F2] rounded-xl overflow-hidden ring-1 ring-[#E5DDD2] hover:ring-2 hover:ring-[#1A472A] transition-all duration-300 cursor-pointer"
                  onClick={() => setLightboxImage(plan.image)}
                >
                  <div className="relative h-[250px] w-full bg-white">
                    <Image
                      src={plan.image}
                      alt={plan.title}
                      fill
                      className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-[#2F2F2F] mb-1">{plan.title}</h3>
                    <p className="text-[#1A472A]/80">{plan.area}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Construction Progress Section */}
        <div className="mt-12 bg-white rounded-2xl shadow-xl overflow-hidden ring-1 ring-[#E5DDD2]">
          <div className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <Clock className="w-6 h-6 text-[#1A472A]" />
              <h2 className="text-3xl font-bold text-[#2F2F2F]">Construction Progress</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {constructionPhotos.map((photo, index) => (
                <div
                  key={index}
                  className="group relative bg-[#F9F6F2] rounded-xl overflow-hidden ring-1 ring-[#E5DDD2] hover:ring-2 hover:ring-[#1A472A] transition-all duration-300 cursor-pointer"
                  onClick={() => setLightboxImage(photo.image)}
                >
                  <div className="relative h-[350px] w-full">
                    <Image
                      src={photo.image}
                      alt={photo.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A472A]/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-6 text-white w-full">
                        <span className="inline-block px-3 py-1 bg-[#DAA520] text-[#2F2F2F] rounded-full text-sm font-semibold mb-2">
                          {photo.phase}
                        </span>
                        <h3 className="text-xl font-bold">{photo.title}</h3>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-[#DAA520] transition-colors duration-300"
            onClick={() => setLightboxImage(null)}
          >
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="relative max-w-7xl max-h-[90vh] w-full h-full">
            <Image
              src={lightboxImage}
              alt="Enlarged view"
              fill
              className="object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </main>
  );
}