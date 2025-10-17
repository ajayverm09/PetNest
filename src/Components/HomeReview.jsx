import React from 'react';

// Mock data structure based on the image content
const reviewsData = [
  {
    id: 1,
    name: "Ms. Nidhi",
    date: "September 01, 2023",
    rating: 5,
    text: "Absolutely thrilled with the exceptional service provided by ThePetNest! Every aspect has exceeded our expectations. Tony adores Rakesh and eagerly anticipates their walks, often waiting by the door in excitement. The walks are not just routine outings; they engage Tony both physically and socially, enriching his overall well-being.",
    images: [
      { url: "https://dm6g3jbka53hp.cloudfront.net/static-images/home-page_user-reviews-section_walking-review-image-1.png", caption: "" },
      { url: "https://dm6g3jbka53hp.cloudfront.net/static-images/home-page_user-reviews-section_walking-review-image-2.png", caption: "Tony: During Walks" },
    ],
    avatarText: "MN",
    avatarColor: "bg-blue-500",
  },
  {
    id: 2,
    name: "Mr. Vikas",
    date: "October 30, 2023",
    rating: 5,
    text: "Our first experience on ThePetNest was absolutely delightful! We're thrilled to have found this service. Our dog not only looked happy but was also incredibly energetic after the stay. The daily reviews provided were exceptionally detailed, accompanied by some lovely pictures and videos that melted our hearts. ❤️ Thank you for the excellent care and service!",
    images: [
      { url: "https://dm6g3jbka53hp.cloudfront.net/static-images/home-page_user-reviews-section_boarding-review-image-1.png", caption: "" },
      { url: "https://dm6g3jbka53hp.cloudfront.net/static-images/home-page_user-reviews-section_boarding-review-image-2.png", caption: "Zoro's Boarding Stay" },
    ],
    avatarText: "MV",
    avatarColor: "bg-purple-500",
  },
];

/**
 * StarRating Component: Displays a rating out of 5 stars.
 */
const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <svg
        key={i}
        className={`w-4 h-4 ${i <= rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    );
  }
  return <div className="flex space-x-0.5">{stars}</div>;
};

/**
 * ReviewCard Component: Displays individual customer review details and images.
 */
const ReviewCard = ({ review }) => (
  <div className="bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-lg border border-gray-100 flex flex-col transition duration-300 hover:shadow-xl h-full">
    {/* Header: User Info and Rating */}
    <div className="flex items-start mb-4">
      {/* Avatar and Info */}
      <div className="flex-shrink-0">
        <div className={`w-12 h-12 sm:w-14 sm:h-14 ${review.avatarColor} rounded-full flex items-center justify-center text-white font-semibold text-lg`}>
          {review.avatarText}
        </div>
      </div>
      <div className="ml-3 sm:ml-4">
        <p className="font-bold text-gray-800 text-base sm:text-lg">{review.name}</p>
        <p className="text-xs sm:text-sm text-gray-500">{review.date}</p>
        <StarRating rating={review.rating} />
      </div>
    </div>

    {/* Review Text */}
    <p className="text-gray-600 mb-4 sm:mb-6 text-sm leading-relaxed flex-grow">
      {review.text}
    </p>

    {/* Images Section */}
    <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
      {review.images.map((image, index) => (
        <div key={index} className="flex flex-col items-center flex-1">
          <div className="w-full h-32 sm:h-36 md:h-40 overflow-hidden rounded-lg shadow-md border-2 border-white">
            <img
              src={image.url}
              alt={`Pet photo ${index + 1}`}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.onerror = null; // prevents infinite loop
                e.target.src = `https://placehold.co/150x200/94a3b8/0f172a?text=Image+Load+Error`;
              }}
            />
          </div>
          {image.caption && (
            <p className="mt-2 text-xs text-gray-600 font-medium text-center">{image.caption}</p>
          )}
        </div>
      ))}
    </div>
  </div>
);


const PremiumBanner = () => (
  <div className="w-full max-w-4xl mx-auto rounded-xl shadow-2xl overflow-hidden mb-8 sm:mb-12">
    <div className="bg-gradient-to-r from-blue-900 to-[#232C63] p-4 sm:p-6 flex flex-col md:flex-row items-center justify-between text-white">
      {/* Dog Icon (Image URL) */}
      
      <div className="text-center md:text-left">
        <h2 className="text-lg sm:text-xl md:text-2xl font-extrabold mb-1">
          Introducing ThePetNest <span className="text-yellow-400">Premium</span>
        </h2>
        <p className="text-xs sm:text-sm md:text-base font-light">
          Get ThePetNest Premium Membership to get an additional up to <span className="font-bold text-yellow-300">10% Discount.</span>
        </p>
      </div>
      <img
        src="https://dm6g3jbka53hp.cloudfront.net/static-images/app-upadate-banner_TPN-app-logo.png"
        alt="ThePetNest App Logo - Dog Icon"
        className="md:w-20 md:h-20 h-16 w-16 mt-2 md:mt-0 object-contain mb-3 sm:mb-0 md:mr-6"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "https://placehold.co/64x64/3b82f6/ffffff?text=Logo";
        }}
      />
    </div>
  </div>
);

/**
 * Main App Component
 */
const PetReviewsSection = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        
        {/* The top banner section */}
        <PremiumBanner />

        {/* Reviews Header */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 text-center mb-8 sm:mb-12">
          Reviews from Our Happy Pet Parents
        </h1>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
          {reviewsData.map(review => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>

      </div>
    </div>
  );
};

export default PetReviewsSection;