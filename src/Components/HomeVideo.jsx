import React, { useState } from 'react';

const VIDEO_THUMBNAIL_URL = 'https://placehold.co/600x338/f3f4f6/1f2937?text=ThePetNest+Video+Placeholder';
const VIDEO_TITLE = 'Pamper Your Pets with ThePetNest - Pet Grooming, Dog...';
const YOUTUBE_EMBED_URL = 'https://www.youtube.com/embed/SMpOcYcmIl8?autoplay=1&rel=0'; 


const VideoCTASection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleBookService = () => {
    console.log("Navigating to Book a Service page...");
    alert("Book a Service clicked! Navigation logic goes here.");
  };

  const handlePlayClick = (e) => {
    e.preventDefault(); // Prevent the <a> tag from navigating away
    setIsPlaying(true);
  };

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
          <button id="close-alert" class="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded-lg">Close</button>
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
    <div className="bg-white font-sans py-6 md:py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* Left Column: Video Player */}
          <div className="w-full relative shadow-2xl rounded-xl overflow-hidden group">
            {/* Aspect Ratio Box (16:9) */}
            <div className="aspect-w-16 aspect-h-9 relative" style={{ paddingTop: '56.25%' }}>
              
              {isPlaying ? (
                // IFRAME for embedded video
                <iframe
                  title={VIDEO_TITLE}
                  src={YOUTUBE_EMBED_URL}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full border-0"
                ></iframe>
              ) : (
                <a 
                  href="#"
                  onClick={handlePlayClick}
                  className="block w-full h-full absolute top-0 left-0"
                  aria-label={`Watch video: ${VIDEO_TITLE}`}
                >

                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg 
                      className="w-16 h-16 md:w-20 md:h-20 text-red-500 opacity-90 transition duration-300 group-hover:scale-110" 
                      viewBox="0 0 68 48" 
                      fill="currentColor"
                    >
                      <path d="M66.52 7.74c-.78-2.93-2.49-5.41-5.64-6.19C55.79.13 34 0 34 0S12.21.13 7.12 1.55c-3.15.78-4.86 3.26-5.64 6.19C.51 10.74 0 24 0 24s.51 13.26 1.48 16.2c.78 2.93 2.49 5.41 5.64 6.19C12.21 47.87 34 48 34 48s21.79-.13 26.88-1.55c3.15-.78 4.86-3.26 5.64-6.19C67.49 37.26 68 24 68 24s-.51-13.26-1.48-16.2z" />
                      <path fill="#ffffff" d="M 45 24 L 27 15 L 27 33 z" />
                    </svg>
                  </div>
                </a>
              )}
              {/* Title Overlay at bottom left (mimicking YouTube UI) - Removed pointer-events-none class */}
              <div className={`absolute bottom-0 left-0 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded-tr-lg ${isPlaying ? 'hidden' : ''}`}>
                  {VIDEO_TITLE}
              </div>
            </div>
          </div>

          {/* Right Column: Text and CTA */}
          <div className="flex flex-col justify-center text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-6 leading-tight">
              ThePetNest Explained in <span className="block text-4xl md:text-5xl">30 seconds</span>
            </h2>
            <button
              onClick={handleBookService}
              className="px-10 py-4 w-full md:w-auto bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg rounded-xl shadow-lg transition duration-300 transform hover:scale-[1.02]"
              aria-label="Book a Service now"
            >
              Book a Service
            </button>
            <p className="text-xs text-gray-500 mt-2">
                *Demo: Click opens a console log.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};


export default VideoCTASection;
