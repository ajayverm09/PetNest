import React from 'react';
// Removed lucide-react import

// Image URLs provided by the user
const DOG_WITH_PHONE_URL = 'https://dm6g3jbka53hp.cloudfront.net/static-images/dog-on-phone-30032020.png';
const CAT_VET_URL = 'https://dm6g3jbka53hp.cloudfront.net/static-images/cat-vet-30032020.png';
const PARTNER_ICON_URL = 'https://dm6g3jbka53hp.cloudfront.net/static-images/homepage__partners-section__hooked-icon.svg'; // New icon URL

const BookingCTASection = () => {
  const handleBookingClick = () => {
    console.log("Navigating to booking page...");
    // In a real application, this would navigate to a booking page
    alert("Booking service clicked! Redirecting to booking page...");
  };

  // Custom alert function to comply with the no-alert rule
  const alert = (message) => {
    const modalId = 'custom-alert-modal';
    let modal = document.getElementById(modalId);
    if (!modal) {
      modal = document.createElement('div');
      modal.id = modalId;
      modal.className = 'fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-50 transition-opacity duration-300 opacity-0';
      modal.innerHTML = `
        <div class="bg-white p-6 rounded-lg shadow-2xl max-w-sm mx-4 transform scale-95 transition-transform duration-300">
          <p class="text-gray-800 font-semibold mb-4">${message}</p>
          <button id="close-alert" class="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 rounded-lg">Close</button>
        </div>
      `;
      document.body.appendChild(modal);

      document.getElementById('close-alert').onclick = () => {
        modal.classList.add('opacity-0');
        modal.querySelector('div').classList.remove('scale-100');
        modal.querySelector('div').classList.add('scale-95');
        setTimeout(() => modal.remove(), 300);
      };
      
      // Animate in
      setTimeout(() => {
          modal.classList.remove('opacity-0');
          modal.querySelector('div').classList.remove('scale-95');
          modal.querySelector('div').classList.add('scale-100');
      }, 10);
    }
  };


  return (
    <div className="bg-white font-sans text-center py-16 md:py-20 overflow-hidden">
      <div className="container mx-auto max-w-2xl px-4">
        
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <img
            src={PARTNER_ICON_URL}
            alt="ThePetNest Partners Icon"
            className="w-12 h-12 object-contain"
            onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/48x48/e5e7eb/6b7280?text=Icon'; }}
          />
        </div>

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-8 leading-tight">
          Ready to book your next pet service with ThePetNest?
        </h2>

        {/* CTA Button */}
        <button
          onClick={handleBookingClick}
          className="px-12 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold text-xl rounded-xl shadow-lg transition duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-orange-300"
          aria-label="Book a Pet Care Service"
        >
          Book a Pet Care Service
        </button>

      </div>

      {/* Pet Images (positioned closer) */}
      <div className="relative w-full max-w-6xl mx-auto mt-12 md:mt-16 flex justify-center items-end h-48 md:h-64">
        {/* Container for the two images to control their combined position */}
        <div className="flex items-end justify-center w-full">
          {/* Cat Image */}
          <img
            src={CAT_VET_URL}
            alt="Curious cat looking at a dog"
            className="h-32 md:h-40 object-contain relative right-2 md:right-2" // Adjusted positioning
            style={{ maxWidth: 'none' }} 
            onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/150x150/e5e7eb/6b7280?text=Cat'; }}
          />
          {/* Dog Image */}
          <img
            src={DOG_WITH_PHONE_URL}
            alt="Dog holding a phone, ready to connect"
            className="h-48 md:h-52 lg:h-72 object-contain relative -left-4 md:-left-2" // Adjusted positioning
            style={{ maxWidth: 'none' }}
            onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/200x200/e5e7eb/6b7280?text=Dog'; }}
          />
        </div>
      </div>
    </div>
  );
};

export default BookingCTASection;
