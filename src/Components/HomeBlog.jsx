import React from 'react';

// --- Mock Data for Blog Posts ---
const blogPosts = [
  {
    id: 1,
    title: '200 Cute & Unique Girl Dog Names (Indian & Global Categories)',
    imageUrl: 'https://d1m34p9xkycorf.cloudfront.net/Famale_dogs_200.jpg',
    
  },
  {
    id: 2,
    title: 'The Best 200+ Male Dog Names for Your Furry Companion',
    imageUrl: 'https://d1m34p9xkycorf.cloudfront.net/Male_Dog_Names_200_v1.jpg',
    
  },
  {
    id: 3,
    title: 'Types of Dog Training and How to Choose the Right Training?',
    imageUrl: 'https://d1m34p9xkycorf.cloudfront.net/Dog_Training_Picture.jpg',
    
  },
  {
    id: 4,
    title: 'Should You Feed Milk to Your Cat?',
    imageUrl: 'https://d1m34p9xkycorf.cloudfront.net/Blog_Pictures.png',
    
  },
  {
    id: 5,
    title: 'How to Safely Trim Your Cat’s Nails Without Injuring Them',
    imageUrl: 'https://d1m34p9xkycorf.cloudfront.net/How_to_Safely_Trim_Your_Cat_s_Nails.jpg',
    
  },
  {
    id: 6,
    title: 'Basic Training Techniques for New Puppy Owners',
    imageUrl: 'https://d1m34p9xkycorf.cloudfront.net/Basic_Training_Techniques_for_New_Puppy_Owners.png',
  },
];


const BlogCard = ({ post }) => (
  <a 
    href={`/blog/${post.id}`} // Placeholder link
    className="block group bg-white rounded-xl overflow-hidden transition-all duration-300 transform hover:shadow-xl hover:-translate-y-1"
  >
    {/* Thumbnail Image Container */}
    <div className="relative w-full aspect-[3/2] overflow-hidden">
      <img
        src={post.imageUrl}
        alt={post.title}
        className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = `https://placehold.co/300x200/d1d5db/4b5563?text=Article+Image`;
        }}
      />
    </div>

    {/* Title */}
    <div className="p-4">
      <h3 className="text-base font-semibold text-gray-800 group-hover:text-orange-500 transition-colors leading-relaxed">
        {post.title}
      </h3>
    </div>
  </a>
);


const BlogGridSection = () => {
  const handleReadBlog = () => {
    console.log("Navigating to main blog page...");
    // Replace with actual navigation logic in a real application
    alert("Navigating to the main blog page!");
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
    <div className="bg-white font-sans py-3 md:py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        
        {/* Header */}
        <h1 className="text-2xl md:text-4xl font-extrabold text-gray-900 text-center mb-10 md:mb-12">
          Latest stories from ThePetNest
        </h1>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {blogPosts.map(post => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-10 md:mt-12">
          <button
            onClick={handleReadBlog}
            className="px-12 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg rounded-xl shadow-lg transition duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-orange-300"
            aria-label="Read ThePetNest Blog"
          >
            Read Blog
          </button>
        </div>

      </div>
    </div>
  );
};

export default BlogGridSection;
