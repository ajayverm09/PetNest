import React from "react";

// The image URL is based on the file you uploaded.
const PET_IMAGE_URL =
  "https://dm6g3jbka53hp.cloudfront.net/static-images/pet-banner-tpn-27042024-v2.jpg";

// The main component, following the style of a React functional component export
const HeroSection = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center overflow-hidden">
      {/* Hero Section Container - Now fills the entire viewport */}
      <div
        className="relative w-full mt-20 h-screen 
                   flex items-center justify-center"
      >
        {/* Background Image - Covers the entire container, maintaining aspect ratio */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${PET_IMAGE_URL})` }}
        >
          {/* No overlay or text here, just the image */}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;