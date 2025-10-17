import React from 'react';

// Icon URLs for the input fields (already provided by user)
const PIN_ICON_URL = 'https://dm6g3jbka53hp.cloudfront.net/static-images/homepage__services-options__pin-icon.svg';
const CALENDAR_ICON_URL = 'https://dm6g3jbka53hp.cloudfront.net/static-images/homepage__services-options__calender-icon.svg';


const GROOMING_ICON_URL = 'https://dm6g3jbka53hp.cloudfront.net/static-images/homepage__services-options__grooming-icon.svg';
const BOARDING_ICON_URL = 'https://dm6g3jbka53hp.cloudfront.net/static-images/menu__item-pet__boarding.png';
const DOG_WALKING_ICON_URL = 'https://dm6g3jbka53hp.cloudfront.net/static-images/home-page_book-services-second-section-dog-walking-icon.svg';
const TRAINING_ICON_URL = 'https://dm6g3jbka53hp.cloudfront.net/static-images/homepage__services-options__training-icon.svg';
const VET_ICON_URL = 'https://dm6g3jbka53hp.cloudfront.net/static-images/homepage__services-options__vet-icon.svg';
const ADOPT_ICON_URL = 'https://dm6g3jbka53hp.cloudfront.net/static-images/homepage__services-options__adopt-icon.svg';

const services = [
  {
    // Updated prop from iconClass to iconUrl
    iconUrl: GROOMING_ICON_URL,
    title: "Pet Grooming",
    description: "Book In-Home Cat and Dog Grooming Service",
    highlight: true, // This card will be orange/highlighted
  },
  {
    iconUrl: BOARDING_ICON_URL,
    title: "Pet Boarding",
    description: "Book Cat and Dog Boarding Service",
    highlight: false,
  },
  {
    iconUrl: DOG_WALKING_ICON_URL,
    title: "Dog Walking",
    description: "Book Personalised Dog Walkers Near You",
    highlight: false,
  },
  {
    iconUrl: TRAINING_ICON_URL,
    title: "Dog Training",
    description: "Book Dog Training Service At Home",
    highlight: false,
  },
  {
    iconUrl: VET_ICON_URL,
    title: "Vet on Call",
    description: "Expert Veterinary Service At Your Home and Online",
    highlight: false,
  },
  {
    iconUrl: ADOPT_ICON_URL, // Using the provided adopt icon URL
    title: "Adopt a Pet",
    description: "Adopt, Don't Shop: Save a Life Today",
    highlight: false,
  },
];

// Reusable Card Component for the 2x3 grid
// Prop signature updated from iconClass to iconUrl
const ServiceCard = ({ iconUrl, title, description, highlight }) => {
  const cardClasses = highlight
    ? "bg-orange-500 text-white shadow-xl" // Highlighted Card (Orange)
    : "bg-white text-gray-800 border border-gray-200 hover:shadow-lg transition-shadow duration-200"; // Default Card (White)

  const iconBgClasses = highlight
    

  const descClasses = highlight ? "text-white opacity-90" : "text-gray-500";
  
  return (
    <div className={`p-5 rounded-xl cursor-pointer flex md:flex-row md:gap-5 flex-col justify-start items-start h-full ${cardClasses}`}>
      
      <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 flex-shrink-0 ${iconBgClasses}`}>
        <img
          src={iconUrl}
          alt={`${title} Icon`}
          className="w-16 h-16 object-contain"
          onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/24x24/FFFFFF/F97316?text=X"; }}
        />
      </div>

      {/* Text Content */}
      <div className="flex flex-col">
        <h3 className={`text-lg font-bold mb-1 ${highlight ? 'text-white' : 'text-gray-800'}`}>{title}</h3>
        <p className={`text-sm ${descClasses}`}>{description}</p>
      </div>
    </div>
  );
};

// Booking Bar Components
const CityInput = () => (
    <div className="relative flex-grow h-14 bg-white rounded-xl shadow-md border border-gray-300">
        <input
            type="text"
            placeholder="Select City Here..."
            className="w-full h-full pl-5 pr-12 text-gray-700 placeholder-gray-500 bg-transparent rounded-xl focus:outline-none text-lg"
        />
        {/* Location Pin Icon (using provided image URL) */}
        <img 
            src={PIN_ICON_URL} 
            alt="City Pin"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 object-contain"
            onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/20x20/F97316/FFFFFF?text=P"; }}
        />
    </div>
);

const DateInput = () => (
    <div className="relative flex-grow h-14 bg-white rounded-xl shadow-md border border-gray-300">
        <input
            type="text"
            placeholder="Select Service Date Here..."
            className="w-full h-full pl-5 pr-12 text-gray-700 placeholder-gray-500 bg-transparent rounded-xl focus:outline-none text-lg"
        />
        {/* Calendar Icon (using provided image URL, replacing the '01' box) */}
        <img 
            src={CALENDAR_ICON_URL} 
            alt="Calendar Icon"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 object-contain"
            onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/20x20/3B82F6/FFFFFF?text=C"; }}
        />
    </div>
);

const HeroServices = () => {
  return (
    <div className=" font-sans bg-gray-50 flex flex-col items-center py-0 md:py-16 px-2 sm:px-6 lg:px-8">
      
      <div className="w-full max-w-6xl bg-white p-8 rounded-xl md:shadow-2xl -mt-96 z-40"> 

        {/* Header Section */}
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-2">
            Your Trusted Pet Care Partner
          </h1>
          <p className="text-gray-600 text-lg">
            Book Pet Care Service At Home with ThePetNest
          </p>
        </div>

        {/* Service Cards Grid (Now fully responsive) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-10">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
        
        {/* Booking Bar (Footer Section) */}
        <div className="w-full bg-white p-4 sm:p-6 rounded-xl border border-gray-100 mt-10">
            <div className="flex flex-col lg:flex-row gap-4 items-center">
                
                {/* City Input */}
                <div className="flex-1 w-full lg:w-auto">
                    <label htmlFor="city" className="text-sm font-semibold text-gray-700 mb-1 block">Your City</label>
                    <CityInput />
                </div>

                {/* Date Input */}
                <div className="flex-1 w-full lg:w-auto">
                    <label htmlFor="date" className="text-sm font-semibold text-gray-700 mb-1 block">Service date</label>
                    <DateInput />
                </div>
                
                {/* CTA Button */}
                <div className="flex-shrink-0 w-full lg:w-auto lg:self-end">
                  <button
                      className="w-full h-14 md:py-3 px-8 bg-orange-500 text-white font-bold text-lg rounded-xl shadow-md hover:bg-orange-600 transition duration-300 flex-shrink-0"
                      onClick={() => console.log('Book Pet Grooming clicked')}
                  >
                      Book Pet Grooming
                  </button>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default HeroServices;
