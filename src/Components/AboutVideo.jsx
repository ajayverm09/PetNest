// VideoSection.jsx
import React from 'react';
import { ChevronsRight } from 'lucide-react';

const VideoSection = () => {
  const videoEmbedUrl = "https://www.youtube.com/embed/SMpOcYcmIl8";
  const sittingIconUrl = "https://dm6g3jbka53hp.cloudfront.net/static-images/thepetnest__about-us__sitting-icon.png";

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 text-gray-800 font-sans p-6 sm:p-10">
      <style>
        {`
          @keyframes bounceRight {
            0%, 100% { transform: translateX(0); }
            50% { transform: translateX(6px); }
          }
          .animate-bounce-right {
            animation: bounceRight 1.5s infinite ease-in-out;
          }
        `}
      </style>

      <div className="max-w-6xl mx-auto py-3 sm:py-20">
        {/* Header Section */}
        <header className="text-center mb-5 md:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
            ThePetNest Explained in 30 Seconds
          </h1>
          <p className="mt-4 text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            Discover how ThePetNest brings personalized care and comfort to your pets right at home.
          </p>
        </header>

        {/* Video and Details Section */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-10">
          
          {/* Video Block */}
          <div className="w-full lg:w-2/3 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-transform transform hover:scale-[1.02] duration-300 bg-white">
            <div className="relative pt-[56.25%]">
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-2xl"
                src={videoEmbedUrl}
                title="Pamper Your Pets with ThePetNest"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                frameBorder="0"
              ></iframe>
            </div>
          </div>

          {/* Text Block */}
          <div className="w-full lg:w-1/3 mt-10 lg:mt-0 flex flex-col items-center text-center space-y-6 p-4 sm:p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <img
              src={sittingIconUrl}
              alt="Pet Sitting Icon"
              className="w-16 h-16 mb-4 opacity-90"
            />
            <div className="flex items-center justify-center mb-3">
              <ChevronsRight className="w-10 h-10 text-red-500 animate-bounce-right" />
            </div>
            <h2 className="text-2xl font-extrabold text-gray-900 leading-snug">
              Watch our story come alive
            </h2>
            <p className="text-gray-600 text-base">
              Learn how we're redefining pet care through innovation, trust, and love for animals.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default VideoSection;
