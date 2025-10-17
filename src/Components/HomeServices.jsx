import React from 'react';

// Data for the service icons using the provided URLs
const serviceIconUrls = [
  'https://dm6g3jbka53hp.cloudfront.net/static-images/homepage__services-section__sessior-icon.svg', // Grooming (Scissors)
  'https://dm6g3jbka53hp.cloudfront.net/static-images/home__pet-boarding__service-icon.png',         // Boarding (House)
  'https://dm6g3jbka53hp.cloudfront.net/static-images/home-page_book-services-section-dog-walking-updated-icon.svg', // Dog Walking (Dog)
  'https://dm6g3jbka53hp.cloudfront.net/static-images/homepage__services-section__vet-injection-icon%20.svg', // Vet (Syringe)
];

// Utility icon URLs
const SHIELD_ICON_URL = 'https://dm6g3jbka53hp.cloudfront.net/static-images/homepage__services-section__shield-icon.svg';
const CHECK_ICON_URL = 'https://dm6g3jbka53hp.cloudfront.net/static-images/homepage__services-section__large-tick-icon.svg';

// Data for the service cards
const services = [
  {
    mainIconUrl: serviceIconUrls[0],
    title: "Pet Grooming Service",
    description: "Book In-Home Grooming Session",
    linkText: "Find out more about Pet Grooming",
  },
  {
    mainIconUrl: serviceIconUrls[1],
    title: "Cat Boarding & Dog Boarding Service",
    description: "Book Pet Boarding & Pet Sitting Service",
    linkText: "Find out more about Pet Boarding",
  },
  {
    mainIconUrl: serviceIconUrls[2],
    title: "Dog Walking Service",
    description: "Book Personalised Dog Walkers Near You",
    linkText: "Find out more about Dog Walking",
  },
  {
    mainIconUrl: serviceIconUrls[3],
    title: "Vet on call & at-home",
    description: "Book Expert Veterinary Care Service",
    linkText: "Find out more about Vet on call",
  },
];

// Reusable Service Card Component
const ServiceCard = ({ mainIconUrl, title, description, linkText }) => (
  <div className="flex items-start space-x-4 mb-8">
    {/* Icon Container using the image URL */}
    <div className={`relative p-3 rounded-xl border border-gray-200 bg-white shadow-sm flex-shrink-0 w-16 h-16 flex items-center justify-center`}>
      <img 
        src={mainIconUrl} 
        alt={`${title} icon`} 
        className="w-full h-full object-contain" 
        // Fallback placeholder image in case the URL fails to load
        onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/64x64/ccc/333?text=Icon"; }}
      />
    </div>

    {/* Text Content */}
    <div>
      <h3 className="text-xl font-semibold text-gray-800 mb-0.5">{title}</h3>
      <p className="text-gray-600 mb-2">{description}</p>
      <a href="#" className="flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium transition duration-150">
        {linkText}
        {/* Chevron Icon (Reverting to a simple text/emoji or inline SVG since no link was provided for it) */}
        <span className="ml-1 text-base leading-none">›</span>
      </a>
    </div>
  </div>
);

// Call-to-Action / Review Box Component
const ReviewBox = () => (
  <div className="bg-white p-3 md:p-8 rounded-xl md:shadow-lg border border-gray-100 h-full">
    {/* Review Header */}
    <div className="flex items-center space-x-4 p-4  rounded-lg mb-6 border border-gray-200">
      <div className=" shadow-lg w-12 h-12 flex items-center justify-center">
        {/* Shield Icon using URL */}
        <img 
          src={SHIELD_ICON_URL} 
          alt="Shield Icon" 
          className="w-full h-full object-contain"
          onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/48x48/0000FF/FFFFFF?text=Shield"; }}
        />
      </div>
      <p className="text-xl font-bold text-gray-800">
        <span className="text-blue-600">98.7%</span> of reviews are 5 star
      </p>
    </div>

    {/* Checklist */}
    <div className="space-y-5">
      {[
        "All service providers at ThePetNest undergo a basic background check.",
        "All service providers offer a comprehensive profile including personal details.",
        "All service providers are vetted and approved by our team of pet care specialists."
      ].map((item, index) => (
        <div key={index} className="flex items-start">
          {/* Check Icon using URL */}
          <img 
            src={CHECK_ICON_URL} 
            alt="Check Mark" 
            className="w-5 h-5 mt-1 flex-shrink-0 object-contain" 
            onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/20x20/008000/FFFFFF?text=✓"; }}
          />
          <p className="ml-3 text-gray-600 leading-relaxed">{item}</p>
        </div>
      ))}
    </div>

    {/* CTA Button */}
    <button
      className="w-full mt-8 py-4 px-6 bg-orange-500 text-white font-bold text-lg rounded-xl shadow-xl hover:bg-orange-600 transition duration-300 transform hover:scale-[1.01] active:scale-100 focus:outline-none focus:ring-4 focus:ring-orange-300"
      onClick={() => console.log('Book Pet Care clicked')}
    >
      Book a Pet Care Service
    </button>
  </div>
);

const PetServicesSection = () => {
  return (
    <div className="min-h-screen font-sans bg-gray-50 flex flex-col items-center py-0 md:py-16 px-2 sm:px-6 lg:px-8">
      <div className="w-full max-w-6xl bg-white p-2 md:p-12 lg:p-16 rounded-3xl md:shadow-2xl border border-gray-100">

        {/* Main Title */}
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center mb-12">
          Services for Every Pet at ThePetNest
        </h1>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-16">
          {/* Left Column: Services List */}
          <div className="space-y-4 ">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>

          {/* Right Column: Review and CTA Box */}
          <div className="flex flex-col">
            <ReviewBox />
            {/* Guarantee Text (below the box) */}
            <p className="text-sm text-gray-500 mt-4 text-center lg:text-left">
              All services booked on ThePetNest are backed by the ThePetNest guarantee, 24/7 support, and our reservation protection.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default PetServicesSection;
