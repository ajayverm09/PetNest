import React, { useState } from 'react';
import { Heart, Plane, Box } from 'lucide-react';
import { Link } from 'react-router-dom';
import blogsData from '../Components/BlogsData';

const services = [
  { name: "Pet Grooming", imageUrl: "https://dm6g3jbka53hp.cloudfront.net/static-images/homepage__services-options__grooming-icon.svg", alt: "Grooming icon", initial: true },
  { name: "Pet Boarding", imageUrl: "https://dm6g3jbka53hp.cloudfront.net/static-images/menu__item-pet__boarding.png", alt: "Boarding icon", initial: false },
  { name: "Dog Training", imageUrl: "https://dm6g3jbka53hp.cloudfront.net/static-images/homepage__services-options__training-icon.svg", alt: "Training icon", initial: false },
  { name: "Vet on Call", imageUrl: "https://dm6g3jbka53hp.cloudfront.net/static-images/homepage__services-options__vet-icon.svg", alt: "Vet icon", initial: false },
  { name: "Dog Walking", imageUrl: "https://dm6g3jbka53hp.cloudfront.net/static-images/home-page_book-services-second-section-dog-walking-icon.svg", alt: "Dog walking icon", initial: false },
  { name: "Pet Insurance", icon: Heart, color: 'text-green-600', initial: false },
  { name: "Pet Relocation", icon: Plane, color: 'text-yellow-600', initial: false },
  { name: "Rehome a Pet", icon: Box, color: 'text-amber-700', initial: false },
  { name: "Adopt a Pet", imageUrl: "https://dm6g3jbka53hp.cloudfront.net/static-images/homepage__services-options__adopt-icon.svg", alt: "Adopt icon", initial: false },
];

const statData = [
  {
    label: "CITIES",
    value: "35+",
    image: "https://img.icons8.com/ios/50/000000/building.png",
    alt: "Cities"
  },
  {
    label: "PROFESSIONALS",
    value: "8,200+",
    image: "https://img.icons8.com/ios/50/000000/professional-skills.png",
    alt: "Professionals"
  },
  {
    label: "5-STAR REVIEWS",
    value: "96%",
    image: "https://img.icons8.com/ios/50/000000/positive-dynamic-feedback.png",
    alt: "5-Star Reviews"
  },
  {
    label: "SERVICES COMPLETED",
    value: "110,000+",
    image: "https://img.icons8.com/ios/50/000000/pet.png",
    alt: "Services Completed"
  },
];

const ServiceCard = ({ service }) => {
  const base =
    "flex items-center gap-3 p-4 rounded-xl shadow-lg border transition transform hover:scale-105 hover:shadow-2xl active:scale-100";
    
  if (service.initial) {
    return (
      <div className={`${base} bg-orange-500 text-white border-orange-600 shadow-2xl`}>
        <div className="w-11 h-11 flex items-center justify-center rounded-full bg-white bg-opacity-40 shadow">
          <img src={service.imageUrl} alt={service.alt} className="w-7 h-7 filter invert-[.7]" />
        </div>
        <span className="text-lg font-bold">{service.name}</span>
      </div>
    );
  }
  return (
    <div className={`${base} bg-white`}>
      <div className="w-11 h-11 flex items-center justify-center rounded-full bg-gray-50">
        {service.imageUrl ? (
          <img src={service.imageUrl} alt={service.alt} className="w-7 h-7 object-contain" />
        ) : (
          <service.icon className={`w-7 h-7 ${service.color}`} strokeWidth={2} />
        )}
      </div>
      <span className="text-gray-700 text-base">{service.name}</span>
    </div>
  );
};


const StatCard = ({ value, label, image, alt }) => (
  <div className="bg-white p-6 rounded-2xl shadow-xl flex flex-col items-center transform transition hover:scale-105 hover:shadow-2xl">
    <img src={image} alt={alt} className="w-14 h-14 mb-3" />
    <span className="text-4xl font-extrabold text-orange-500 mb-1">{value}</span>
    <span className="text-lg font-medium text-gray-600">{label}</span>
  </div>
);

const BlogCard = ({ blog }) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden transition transform hover:scale-105 hover:shadow-2xl active:scale-100">
    <div className="relative h-48">
      <img src={blog.image} alt={blog.title} className="w-full h-full object-cover" />
      <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
        {blog.category}
      </div>
    </div>
    <div className="p-4">
      <h3 className="text-lg font-bold text-gray-800 mb-2">{blog.title}</h3>
      <p className="text-gray-600 text-sm mb-4 line-clamp-2">{blog.excerpt}</p>
      <Link to={`/blog/${blog.id}`} className="text-orange-500 font-medium hover:text-orange-700 transition-colors">
        Read More →
      </Link>
    </div>
  </div>
);

const StatsSection = () => {
  const [message, setMessage] = useState(null);

  const handleBooking = () => {
    setMessage("You are attempting to book Pet Grooming. (This will initiate a form or navigation in the live app.)");
    setTimeout(() => setMessage(null), 5000);
  };

  return (
    <div className="py-0 sm:py-14 bg-gradient-to-b from-gray-50 to-rose-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Stats Section */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 leading-tight mb-10">
            ThePetNest in Action: Numbers That Speak
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
            {statData.map((stat, idx) => (
              <StatCard key={idx} {...stat} />
            ))}
          </div>
        </div>
        
        {/* Services Section */}
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-8 tracking-tight">
            Explore Our Complete Range of Pet Care Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {services.map((service, i) => (
              <ServiceCard key={i} service={service} />
            ))}
          </div>
          {/* CTA */}
          <div className="w-full max-w-xs mx-auto">
            <button
              onClick={handleBooking}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white text-xl font-bold py-3 rounded-xl shadow-xl transition active:scale-95 focus:outline-none focus:ring-4 focus:ring-orange-300"
            >
              Book Pet Grooming
            </button>
          </div>
        </div>
        
        {/* Blog Section */}
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-8 tracking-tight">
            Pet Grooming Tips & Advice
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {blogsData.slice(0, 3).map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
          <div className="w-full max-w-xs mx-auto">
            <Link 
              to="/blogs" 
              className="inline-block w-full mb-5 bg-orange-500 hover:bg-orange-600 text-white text-xl font-bold py-3 rounded-xl shadow-xl transition active:scale-95 focus:outline-none focus:ring-4 focus:ring-orange-300 text-center"
            >
              View All Articles
            </Link>
          </div>
        </div>
        
        {/* Message Box */}
        {message && (
          <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 p-4 bg-indigo-600 text-white rounded-lg shadow-2xl transition-opacity duration-300 z-50 max-w-md text-center">
            {message}
          </div>
        )}
      </div>
    </div>
  );
};

export default StatsSection;