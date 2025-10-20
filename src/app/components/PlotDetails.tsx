'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Plot } from '@/types/project';
import { MapPin, IndianRupee, Building, FileCheck, Hammer, Calculator } from 'lucide-react';

interface PlotDetailsProps {
  plot: Plot;
}

export default function PlotDetails({ plot }: PlotDetailsProps) {
  const [selectedImage, setSelectedImage] = useState(plot.images[0]);
  const [selectedTab, setSelectedTab] = useState<'images' | '3d'>('images');

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Main Image */}
      <div className="relative h-[500px] w-full">
        {selectedTab === 'images' ? (
          <Image
            src={selectedImage}
            alt={plot.title}
            fill
            className="object-cover"
          />
        ) : (
          <Image
            src={plot.threeDPlan.previewImages[0]}
            alt={`${plot.title} 3D Plan`}
            fill
            className="object-cover"
          />
        )}
      </div>

      {/* Image/3D Plan Toggle */}
      <div className="bg-gray-100 p-2">
        <div className="flex gap-2">
          <button
            onClick={() => setSelectedTab('images')}
            className={`flex-1 py-2 px-4 rounded-lg ${
              selectedTab === 'images'
                ? 'bg-[#1A472A] text-white'
                : 'bg-white text-[#1A472A] hover:bg-gray-50'
            }`}
          >
            Plot Images
          </button>
          <button
            onClick={() => setSelectedTab('3d')}
            className={`flex-1 py-2 px-4 rounded-lg ${
              selectedTab === '3d'
                ? 'bg-[#1A472A] text-white'
                : 'bg-white text-[#1A472A] hover:bg-gray-50'
            }`}
          >
            3D Plan View
          </button>
        </div>
      </div>

      {/* Thumbnail Gallery */}
      <div className="p-4 flex gap-2 overflow-x-auto">
        {(selectedTab === 'images' ? plot.images : plot.threeDPlan.previewImages).map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(image)}
            className={`relative h-20 w-20 flex-shrink-0 rounded-md overflow-hidden ${
              selectedImage === image ? 'ring-2 ring-blue-500' : ''
            }`}
          >
            <Image src={image} alt={`${plot.title} ${index + 1}`} fill className="object-cover" />
          </button>
        ))}
      </div>

      {/* Plot Details */}
      <div className="p-6">
        <h1 className="text-3xl font-bold text-gray-900">{plot.title}</h1>
        <p className="mt-2 text-xl text-blue-600">₹{plot.price.toLocaleString()}</p>
        
        <div className="mt-4">
          <h2 className="text-xl font-semibold text-gray-900">Location</h2>
          <p className="mt-1 text-gray-600">{plot.location}</p>
        </div>

        <div className="mt-4">
          <h2 className="text-xl font-semibold text-gray-900">Description</h2>
          <p className="mt-1 text-gray-600">{plot.description}</p>
        </div>

        {/* Budget Estimate */}
        <div className="mt-6 bg-gray-50 rounded-xl p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Budget Estimate</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-[#1A472A]/10 rounded-lg">
                <Building className="w-5 h-5 text-[#1A472A]" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Construction</p>
                <p className="font-semibold text-[#1A472A]">
                  ₹{plot.budgetEstimate.construction.toLocaleString()}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-[#1A472A]/10 rounded-lg">
                <Hammer className="w-5 h-5 text-[#1A472A]" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Development</p>
                <p className="font-semibold text-[#1A472A]">
                  ₹{plot.budgetEstimate.development.toLocaleString()}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-[#1A472A]/10 rounded-lg">
                <FileCheck className="w-5 h-5 text-[#1A472A]" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Approvals</p>
                <p className="font-semibold text-[#1A472A]">
                  ₹{plot.budgetEstimate.approvals.toLocaleString()}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-[#1A472A]/10 rounded-lg">
                <Calculator className="w-5 h-5 text-[#1A472A]" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Total Estimate</p>
                <p className="font-semibold text-[#1A472A]">
                  ₹{plot.budgetEstimate.total.toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Specifications */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-gray-900">Specifications</h2>
          <div className="mt-3 grid grid-cols-2 gap-4">
            <div>
              <h3 className="font-medium text-gray-900">Plot Size</h3>
              <p className="text-gray-600">{plot.specifications.plotSize}</p>
            </div>
            <div>
              <h3 className="font-medium text-gray-900">Facing</h3>
              <p className="text-gray-600">{plot.specifications.facing}</p>
            </div>
            <div>
              <h3 className="font-medium text-gray-900">Road Width</h3>
              <p className="text-gray-600">{plot.specifications.roadWidth}</p>
            </div>
            <div>
              <h3 className="font-medium text-gray-900">Corner Plot</h3>
              <p className="text-gray-600">{plot.specifications.cornerPlot ? 'Yes' : 'No'}</p>
            </div>
          </div>
        </div>

        {/* Amenities */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-gray-900">Amenities</h2>
          <ul className="mt-3 grid grid-cols-2 gap-2">
            {plot.amenities.map((amenity, index) => (
              <li key={index} className="flex items-center text-gray-600">
                <svg className="h-5 w-5 text-green-500 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M5 13l4 4L19 7"></path>
                </svg>
                {amenity}
              </li>
            ))}
          </ul>
        </div>

        {/* Call to Action */}
        <div className="mt-8 flex gap-4">
          <button className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Contact Agent
          </button>
          <button className="flex-1 border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
            Schedule Visit
          </button>
        </div>
      </div>
    </div>
  );
}