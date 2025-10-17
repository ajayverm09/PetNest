import React, { useState } from 'react';

const CITIES = [
  { name: 'Ahmedabad', url: 'https://dm6g3jbka53hp.cloudfront.net/static-images/home-page__available-cities__ahemdabad-city-icon.svg' },
  { name: 'Amritsar', url: 'https://dm6g3jbka53hp.cloudfront.net/static-images/grooming-funnel__available-cities-section__amritsar-city-icon.png' },
  { name: 'Bengaluru', url: 'https://dm6g3jbka53hp.cloudfront.net/static-images/home-page__available-cities__bangalore-city-icon.svg' },
  { name: 'Bhopal', url: 'https://dm6g3jbka53hp.cloudfront.net/static-images/home-page__available-cities__bhopal-city-icon.svg' },
  { name: 'Chandigarh', url: 'https://dm6g3jbka53hp.cloudfront.net/static-images/home-page__available-cities__chandigarh-city-icon.svg' },
  { name: 'Chennai', url: 'https://dm6g3jbka53hp.cloudfront.net/static-images/home-page__available-cities__chennai-city-icon.svg' },
  { name: 'Coimbatore', url: 'https://dm6g3jbka53hp.cloudfront.net/static-images/home-page__available-cities__coimbatore-city-icon.svg' },
  { name: 'Dehradun', url: 'https://dm6g3jbka53hp.cloudfront.net/static-images/grooming-funnel_available-cities-section_dehradun-city-icon.svg' },
  { name: 'Delhi', url: 'https://dm6g3jbka53hp.cloudfront.net/static-images/home-page__available-cities__delhi-icon.svg' },
  { name: 'Goa', url: 'https://dm6g3jbka53hp.cloudfront.net/static-images/grooming-funnel_available-cities-section_goa-city-icon.png' },
  { name: 'Hyderabad', url: 'https://dm6g3jbka53hp.cloudfront.net/static-images/home-page__available-cities__hyderabad-city-icon.svg' },
  { name: 'Jaipur', url: 'https://dm6g3jbka53hp.cloudfront.net/static-images/home-page__available-cities__jaipur-city-icon.svg' },
  { name: 'Kochi', url: 'https://dm6g3jbka53hp.cloudfront.net/static-images/home-page__available-cities__kochi-city-icon.svg' },
  { name: 'Kolkata', url: 'https://dm6g3jbka53hp.cloudfront.net/static-images/home-page__available-cities__kolkata-city-icon.svg' },
  { name: 'Lucknow', url: 'https://dm6g3jbka53hp.cloudfront.net/static-images/home-page__available-cities__lucknow-city-icon.svg' },
  { name: 'Mumbai', url: 'https://dm6g3jbka53hp.cloudfront.net/static-images/home-page__available-cities__mumbai-city-icon.svg' },
  { name: 'Nagpur', url: 'https://dm6g3jbka53hp.cloudfront.net/static-images/grooming-funnel_available-cities-section_nagpur-city-icon.png' },
  { name: 'Patiala', url: 'https://dm6g3jbka53hp.cloudfront.net/static-images/grooming-funnel_available-cities-section_patiala-city-icon.png' },
  { name: 'Pimpri-Chinchwad', url: 'https://dm6g3jbka53hp.cloudfront.net/static-images/home-page__available-cities__pimpri-city-icon.svg' },
  { name: 'Pune', url: 'https://dm6g3jbka53hp.cloudfront.net/static-images/home-page__available-cities__pune-city-icon.svg' },
  { name: 'Rajkot', url: 'https://dm6g3jbka53hp.cloudfront.net/static-images/grooming-funnel_available-cities-section_rajkot-city-icon-1.png' },
  { name: 'Vadodara', url: 'https://dm6g3jbka53hp.cloudfront.net/static-images/home-page__available-cities__vadodara-city-icon.svg' },
  { name: 'Vizag', url: 'https://dm6g3jbka53hp.cloudfront.net/static-images/home-page__available-cities__vizag-city-icon.svg' },
  { name: 'Zirakpur', url: 'https://dm6g3jbka53hp.cloudfront.net/static-images/grooming-funnel_available-cities-section_patiala-city-icon.png' },
];

const PLACEHOLDER_IMG = "https://placehold.co/60x60/888888/ffffff?text=City";

const CityIconCard = ({ city }) => {
  const [imgSrc, setImgSrc] = useState(city.url);
  const [imgFailed, setImgFailed] = useState(false);

  const handleError = () => {
    if (imgSrc !== PLACEHOLDER_IMG) {
      setImgSrc(PLACEHOLDER_IMG);
      setImgFailed(true);
      console.error(`Failed to load image for ${city.name} from: ${city.url}. Using placeholder.`);
    }
  };

  return (
    <div
      className="flex flex-col items-center justify-start text-center p-3 sm:p-4 rounded-xl 
                 hover:bg-gray-50 transition duration-300 cursor-pointer group"
    >
      <div className="w-16 h-16 sm:w-20 sm:h-20 mb-2 flex items-center justify-center">
        {imgFailed ? (
          <div className="text-xl font-bold text-gray-500">{city.name.substring(0, 2)}</div>
        ) : (
          <img
            src={imgSrc}
            alt={`${city.name} icon`}
            onError={handleError}
            className="w-full h-full object-contain"
            loading="lazy"
          />
        )}
      </div>
      <p className="text-sm sm:text-base font-semibold text-gray-700 mt-1 leading-tight group-hover:text-black transition-colors">
        {city.name}
      </p>
    </div>
  );
};

const CitiesSection = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-start justify-center p-4 sm:p-8 font-inter">
      <div className="w-full max-w-7xl bg-white p-6 sm:p-10 rounded-2xl shadow-xl">
        
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-800 text-center mb-10 mt-4">
          Top-Quality Pet Services Now in Your City
        </h1>

        <div 
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-y-6 sm:gap-y-8 gap-x-2 sm:gap-x-4 
                     justify-items-center"
        >
          {CITIES.map((city, index) => (
            <CityIconCard key={index} city={city} />
          ))}
        </div>

      </div>
    </div>
  );
};

export default CitiesSection;
