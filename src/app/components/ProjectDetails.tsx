// components/ProjectDetails.tsx
'use client';

import { X, ArrowLeft, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';

interface Project {
  id: number;
  title: string;
  location: string;
  size: string;
  price: string;
  timeline: string;
  images: string[];
  features: string[];
}

interface ProjectDetailsProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectDetails({ project, onClose }: ProjectDetailsProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (!project) return null;

  const handleNextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const handlePrevImage = () => {
    setActiveImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-2xl font-bold">{project.title}</h2>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Image Gallery */}
        <div className="relative h-96">
          <Image
            src={project.images[activeImageIndex]}
            alt={project.title}
            fill
            className="object-cover"
          />
          
          {/* Navigation Arrows */}
          <div className="absolute inset-0 flex justify-between items-center p-4">
            <button
              onClick={handlePrevImage}
              className="p-2 bg-white/80 rounded-full hover:bg-white"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
            <button
              onClick={handleNextImage}
              className="p-2 bg-white/80 rounded-full hover:bg-white"
            >
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Details Section */}
        <div className="p-6 grid gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Project Overview</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Location:</span>
                <span className="font-medium">{project.location}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Size:</span>
                <span className="font-medium">{project.size}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Timeline:</span>
                <span className="font-medium">{project.timeline}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Price:</span>
                <span className="font-medium text-blue-600">{project.price}</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Key Features</h3>
            <ul className="space-y-2">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}