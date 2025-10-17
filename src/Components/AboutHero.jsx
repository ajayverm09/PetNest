import React from 'react';
import { PawPrint, Scissors, Heart } from 'lucide-react';

// Placeholder Image URL (A girl petting a puppy)
const HeroImageUrl = "https://dm6g3jbka53hp.cloudfront.net/static-images/pet-banner-tpn-09052020-mv1.jpg";

const HeroSection = () => {
  return (
    <div className="font-sans min-h-[500px]  flex items-center bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      <div 
        className="w-full h-full relative p-6 mt-15 sm:p-12 md:p-16 lg:p-20 flex items-center overflow-hidden"
        style={{
          backgroundImage: `url(${HeroImageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center right',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50"></div>

        {/* --- Content Block --- */}
        <div className="relative max-w-2xl z-10 text-left">
          
          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight">
            Welcome to <span className="text-orange-500">ThePetNest</span>
          </h1>
          
          {/* Subtitle / Description */}
          <p className="text-lg sm:text-xl font-medium text-gray-200 mb-6">
            Founded in 2019, ThePetNest is your trusted & reliable all-in-one platform for a seamless pet parenting journey. 
            Professional grooming, health care, and all your pet's needs in one place.
          </p>
          
          {/* Feature Highlights */}
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center mr-2">
                <Scissors className="w-5 h-5 text-orange-400" />
              </div>
              <span className="text-gray-300">Professional Grooming</span>
            </div>
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center mr-2">
                <Heart className="w-5 h-5 text-orange-400" />
              </div>
              <span className="text-gray-300">Loving Care</span>
            </div>
          </div>
          
          {/* Call-to-action buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-lg shadow-xl transition duration-300 transform hover:scale-105 flex items-center justify-center">
                <PawPrint className="w-5 h-5 mr-2" />
                Get Started Today
            </button>
            <button className="bg-transparent hover:bg-white/10 text-white font-semibold py-3 px-8 rounded-lg shadow-xl transition duration-300 transform hover:scale-105 flex items-center justify-center border border-white/30">
                <Scissors className="w-5 h-5 mr-2" />
                Book Grooming
            </button>
          </div>
          
          {/* Trust Badge */}
          <div className="mt-8 flex items-center">
            <div className="flex -space-x-2 mr-4">
              <div className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white"></div>
              <div className="w-8 h-8 rounded-full bg-gray-400 border-2 border-white"></div>
              <div className="w-8 h-8 rounded-full bg-gray-500 border-2 border-white"></div>
            </div>
            <p className="text-gray-300 text-sm">
              <span className="font-bold">8,200+</span> happy pet parents
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;