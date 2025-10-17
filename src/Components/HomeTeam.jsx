import React from 'react';
import { Briefcase, Users, Star } from 'lucide-react'; // Using lucide-react for icons

// --- Mock Data for Service Providers ---
const providersData = [
  {
    id: 1,
    name: 'Dr. Abhishek',
    role: 'Veterinarian, B.V.Sc & A.H',
    rating: 5,
    reviewCount: '3000+',
    review: 'An Awesome experience for my cat\'s prolonged health issue! Thank you Dr. Abhishek for giving deep insight on the problem',
    repeatParents: '4000+',
    experience: '14+ years',
    imageUrl: 'https://dm6g3jbka53hp.cloudfront.net/static-images/dr-abhishek-04042020.jpg',
  },
  {
    id: 2,
    name: 'MD. Wasim',
    role: 'Pet Groomer',
    rating: 5,
    reviewCount: '2000+',
    review: 'I absolutely loved the way Waseem was with my lad, there wasn\'t even a hint of discomfort. They were really good at their jobs, friendly and professional. Clean job, and 10 on 10 will again call you guys when I\'ll need. Thank you!',
    repeatParents: '6000+',
    experience: '6+ years',
    imageUrl: 'https://dm6g3jbka53hp.cloudfront.net/static-images/wassem-groomer-thepetnet-05012019.jpg',
  },
  {
    id: 3,
    name: 'Manjunath B.H',
    role: 'Dog Trainer',
    rating: 5,
    reviewCount: '1500+',
    review: 'Hi... This was my first time and I am happy with the training service provided by Manjunath... I have been previously dealing with other trainers from trainmydog and wasn\'t happy ... Thank you ThePetNest.❤️❤️',
    repeatParents: '2000+',
    experience: '8+ years',
    imageUrl: 'https://dm6g3jbka53hp.cloudfront.net/static-images/naveen-groomer-thepetnet-05012019.jpg',
  },
];

/**
 * StarRating Component: Displays a rating out of 5 stars.
 */
const StarRating = ({ rating, count }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <Star
        key={i}
        className={`w-4 h-4 ${i <= rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`}
        fill="currentColor"
        strokeWidth={0}
      />
    );
  }
  return (
    <div className="flex items-center space-x-2 mt-1">
      <div className="flex space-x-0.5">{stars}</div>
      <span className="text-xs text-gray-500 font-medium">({count} Reviews)</span>
    </div>
  );
};

/**
 * IconText Component: Utility for displaying an icon with a text label.
 */
const IconText = ({ Icon, text }) => (
  <div className="flex items-center text-gray-600 space-x-3">
    <Icon className="w-5 h-5 text-gray-400 flex-shrink-0" />
    <span className="text-sm font-medium">{text}</span>
  </div>
);

/**
 * ProviderCard Component: Displays individual service provider details.
 */
const ProviderCard = ({ provider }) => (
  <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden transition duration-300 hover:shadow-2xl">
    
    {/* Image Section */}
    <div className="w-full aspect-square overflow-hidden">
      <img
        src={provider.imageUrl}
        alt={`Profile of ${provider.name}`}
        className="w-full h-full object-cover"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = `https://placehold.co/300x300/e5e7eb/6b7280?text=Profile`;
        }}
      />
    </div>

    <div className="p-6">
      {/* Name and Role */}
      <h3 className="text-xl font-bold text-gray-900 mb-1">{provider.name}</h3>
      <p className="text-base font-semibold text-gray-600 mb-2">{provider.role}</p>
      
      {/* Rating */}
      <StarRating rating={provider.rating} count={provider.reviewCount} />
      
      {/* Review Snippet */}
      <p className="text-sm text-gray-700 italic border-l-2 border-orange-500 pl-3 py-2 my-4 leading-relaxed">
        "{provider.review}"
      </p>

      {/* Stats */}
      <div className="space-y-3 mt-4">
        {/* Repeat Pet Parents Icon (Users) */}
        <IconText Icon={Users} text={`${provider.repeatParents} repeat pet parents`} />
        
        {/* Experience Icon (Briefcase) */}
        <IconText Icon={Briefcase} text={`${provider.experience} of professional experience`} />
      </div>

    </div>
  </div>
);

/**
 * Main Component: Service Providers Section
 */
const ServiceProvidersSection = () => {
  return (
    <div className="bg-gray-50 font-sans py-12 md:py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        
        {/* Header */}
        <h1 className="text-2xl md:text-4xl font-extrabold text-gray-900 text-center mb-10 md:mb-12">
          Meet Pet Care Service Providers at ThePetNest
        </h1>

        {/* Providers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {providersData.map(provider => (
            <ProviderCard key={provider.id} provider={provider} />
          ))}
        </div>

      </div>
    </div>
  );
};

export default ServiceProvidersSection;
