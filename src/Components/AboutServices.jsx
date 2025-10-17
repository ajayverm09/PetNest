// AboutServicesSection.jsx
import React from "react";

const servicesData = [
  {
    title: "A One-Stop Solution for Pet Parents",
    description:
      "ThePetNest is more than just a service provider—it's a community that understands the deep bond between pets and their owners. The platform offers a seamless experience where pet parents can book grooming, boarding, sitting, training, and vet consultations from verified experts. Unlike traditional pet care services, ThePetNest ensures transparency, safety, and convenience, making it an ideal choice for modern pet owners.",
    iconUrl:
      "https://dm6g3jbka53hp.cloudfront.net/static-images/thepetnest__about-us__number-1-icon.png",
    fallbackText: "No. 1 Icon",
  },
  {
    title: "Pamper Your Pet with Professional Grooming",
    description:
      "A well-groomed pet is a happy pet! ThePetNest offers at-home pet grooming services to eliminate the hassle of taking your pet to a salon. Whether it's a refreshing bath, hair trimming, nail clipping, ear cleaning, or de-shedding treatment, professional groomers ensure that pets look and feel their best—all while enjoying a stress-free session in their own home.",
    iconUrl:
      "https://dm6g3jbka53hp.cloudfront.net/static-images/thepetnest__about-us__grooming-icon.png",
    fallbackText: "Grooming Icon",
  },
  {
    title: "Worry-Free Pet Boarding While You Travel",
    description:
      "Leaving your pet behind while traveling can be stressful, but with ThePetNest's trusted pet boarding services, pet parents can rest easy. From cozy homestays to premium pet resorts, ThePetNest ensures your pet gets the love and care they need in a comfortable environment. Every boarding facility and sitter is thoroughly verified, ensuring a safe and friendly stay for your furry companion.",
    iconUrl:
      "https://dm6g3jbka53hp.cloudfront.net/static-images/thepetnest__about-us__boarding-icon.png",
    fallbackText: "Boarding Icon",
  },
  {
    title: "Instant Vet Consultations for Expert Advice",
    description:
      "ThePetNest makes veterinary care more accessible through online vet consultations. Pet parents can connect with experienced veterinarians from the comfort of their homes, getting immediate answers to their pet's health concerns. Whether it's a minor issue or a follow-up consultation, this service saves time and ensures pets receive timely medical attention.",
    iconUrl:
      "https://dm6g3jbka53hp.cloudfront.net/static-images/thepetnest__about-us__vet-icon.png",
    fallbackText: "Vet Icon",
  },
  {
    title: "Keep Your Dog Active with Professional Dog Walking Services",
    description:
      "Exercise is essential for a dog's physical and mental well-being. ThePetNest offers professional dog walking services, ensuring your furry friend gets their daily dose of exercise, even when you're busy. Whether you have a high-energy puppy or a senior dog who needs gentle walks, trained dog walkers provide safe, fun, and stimulating walks tailored to your pet's needs.",
    iconUrl:
      "https://dm6g3jbka53hp.cloudfront.net/static-images/thepetnest__about-us__walking-icon.png",
    fallbackText: "Walking Icon",
  },
  {
    title: "Train Your Dog with Certified Dog Trainers",
    description:
      "A well-trained pet is a joy to be around! ThePetNest offers professional pet training services, helping pets learn everything from basic obedience to advanced commands. Certified trainers use positive reinforcement techniques to ensure pets develop good behavior in a fun and engaging way. Whether you have a playful puppy or a stubborn adult dog, expert trainers personalize sessions to fit your pet's needs.",
    iconUrl:
      "https://dm6g3jbka53hp.cloudfront.net/static-images/thepetnest__about-us__training-icon.png",
    fallbackText: "Training Icon",
  },
  {
    title: "Reliable Pet Sitting for Busy Schedules",
    description:
      "For pet parents juggling work and personal commitments, ThePetNest provides trusted pet sitters who offer companionship, feeding, and exercise for pets in their owners' absence. Whether it's for a few hours or overnight, pet sitters ensure pets feel comfortable and loved, reducing their anxiety when left alone.",
    iconUrl:
      "https://dm6g3jbka53hp.cloudfront.net/static-images/thepetnest__about-us__sitting-icon.png",
    fallbackText: "Sitting Icon",
  },
];

// Modern Card Component
const ServiceCard = ({ title, description, iconUrl, fallbackText }) => (
  <div className="flex flex-col items-center bg-white shadow-xl rounded-2xl p-8 transition-transform hover:-translate-y-1 hover:shadow-2xl min-h-[340px]">
    <div className="mb-5">
      <div className="bg-rose-50 border-2 border-rose-200 rounded-xl p-3 shadow-sm">
        <img
          src={iconUrl}
          alt={fallbackText}
          className="w-12 h-12 object-contain"
          onError={(e) => {
            e.target.onerror = null;
            e.target.parentNode.innerHTML =
              '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-rose-600"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><path d="M22 4L12 14.01l-3-3"></path></svg>';
          }}
        />
      </div>
    </div>
    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 tracking-tight mb-2">
      {title}
    </h3>
    <p className="text-gray-600 text-base leading-relaxed">{description}</p>
  </div>
);

const AboutServicesSection = () => (
  <section className="min-h-screen bg-gradient-to-b from-white to-rose-50 font-sans text-gray-800 px-4 py-10 sm:px-8">
    <div className="max-w-6xl mx-auto">
      <header className="mb-10 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-3 tracking-tight">
          Our Pet Care Services
        </h2>
        <p className="text-gray-600 text-lg mx-auto max-w-2xl">
          Comprehensive, quality solutions for every pet parent—delivered with
          love, trust, and ease.
        </p>
      </header>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {servicesData.map((service, idx) => (
          <ServiceCard
            key={idx}
            title={service.title}
            description={service.description}
            iconUrl={service.iconUrl}
            fallbackText={service.fallbackText}
          />
        ))}
      </div>
    </div>
  </section>
);

export default AboutServicesSection;
