import React from 'react';
import { Sparkles, Download, Smartphone, Shield, Heart } from 'lucide-react';

const AppDownloadSection = () => {
  // Updated images for the app store buttons and the main phones image
  const appStoreButton = "https://dm6g3jbka53hp.cloudfront.net/static-images/tpn-common__download-m-app__mocs-d-v3.png";
  const googlePlayButton = "https://dm6g3jbka53hp.cloudfront.net/static-images/tpn-common__download-m-app__mocs-d-v3.png";
  // Using a more relevant placeholder for the phones image
  const phonesImage = "https://dm6g3jbka53hp.cloudfront.net/static-images/home-page_book-services-second-section-dog-walking-icon.svg";
  const mainIcon = "https://dm6g3jbka53hp.cloudfront.net/static-images/homepage__services-options__grooming-icon.svg";

  // Features list
  const features = [
    {
      icon: <Smartphone className="w-6 h-6 text-orange-500" />,
      title: "Easy Booking",
      description: "Book pet grooming services in just a few taps"
    },
    {
      icon: <Shield className="w-6 h-6 text-orange-500" />,
      title: "Verified Professionals",
      description: "All groomers are background checked and certified"
    },
    {
      icon: <Heart className="w-6 h-6 text-orange-500" />,
      title: "Pet Health Tracking",
      description: "Keep track of your pet's grooming and health records"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 font-sans text-gray-800 py-16 px-4 flex items-center justify-center">
      <div className="max-w-6xl mx-auto">
        
        {/* --- Top Icon --- */}
        <div className="flex justify-center mb-8">
          <div className="p-4 bg-orange-100 rounded-full shadow-lg inline-block">
            <img 
              src={mainIcon} 
              alt="ThePetNest App Icon" 
              className="w-12 h-12 object-contain"
              onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/48x48/f5f5f5/f97316?text=Icon' }} // Fallback
            />
          </div>
        </div>

        {/* --- Main Title --- */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-6 leading-tight">
          Download <span className="text-orange-500">ThePetNest App</span> for Ultimate Pet Care
        </h1>
        
        {/* --- Subtitle --- */}
        <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Everything your pet needs, all in one place. Book grooming, track health records, and connect with pet professionals anytime, anywhere.
        </p>

        {/* --- Features Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-purple-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-orange-50 rounded-full">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">{feature.title}</h3>
              <p className="text-gray-600 text-center">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* --- Download Buttons --- */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-16">
          <a href="#app-store" className="inline-block transition-transform duration-300 hover:scale-105" aria-label="Download on the App Store">
            <img src={appStoreButton} alt="Download on the App Store" className="h-14 object-contain" />
          </a>
          <a href="#google-play" className="inline-block transition-transform duration-300 hover:scale-105" aria-label="Get it on Google Play">
            <img src={googlePlayButton} alt="Get it on Google Play" className="h-14 object-contain" />
          </a>
        </div>

        {/* --- Phones Image --- */}
        <div className="relative">
          {/* Decorative elements */}
          <div className="absolute -top-4 -left-4 w-24 h-24 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          
          {/* Main image container */}
          <div className="relative bg-gradient-to-br from-purple-100 to-blue-100 rounded-3xl p-8 shadow-2xl">
            <div className="flex justify-center">
              <div className="relative">
                {/* Phone mockup with app screenshot */}
                <div className="w-64 h-[500px] bg-gray-800 rounded-[40px] p-4 shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-2xl z-10"></div>
                  <div className="w-full h-full bg-white rounded-[32px] overflow-hidden">
                    <div className="h-12 bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center">
                      <span className="text-white font-bold">ThePetNest</span>
                    </div>
                    <div className="p-4">
                      <div className="h-6 bg-gray-200 rounded mb-3 w-3/4"></div>
                      <div className="h-4 bg-gray-200 rounded mb-2 w-full"></div>
                      <div className="h-4 bg-gray-200 rounded mb-2 w-5/6"></div>
                      <div className="h-4 bg-gray-200 rounded mb-4 w-4/6"></div>
                      <div className="grid grid-cols-2 gap-3">
                        {[1, 2, 3, 4].map((item) => (
                          <div key={item} className="bg-gray-100 rounded-lg p-3">
                            <div className="h-8 w-8 bg-orange-200 rounded-full mb-2"></div>
                            <div className="h-3 bg-gray-200 rounded w-full"></div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating action button */}
                <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center shadow-lg">
                  <Download className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- Call to Action --- */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">Join thousands of happy pet parents using ThePetNest app</p>
          <div className="flex justify-center space-x-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg key={star} className="w-6 h-6 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <p className="text-gray-700 font-medium">4.8 out of 5 (2,500+ reviews)</p>
        </div>
      </div>
    </div>
  );
};

export default AppDownloadSection;