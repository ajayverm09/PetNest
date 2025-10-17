import React from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Facebook, 
  Instagram, 
  Twitter, 
  MessageCircle,
  Scissors,
  Heart,
  Shield
} from 'lucide-react';

const ContactPage = () => {
  // Contact information
  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6 text-orange-500" />,
      title: "Visit Us",
      details: [
        "123 Pet Care Avenue",
        "New York, NY 10001",
        "United States"
      ]
    },
    {
      icon: <Phone className="w-6 h-6 text-orange-500" />,
      title: "Call Us",
      details: [
        "+1 (555) 123-4567",
        "Mon-Sat: 8AM-8PM",
        "Sun: 9AM-6PM"
      ]
    },
    {
      icon: <Mail className="w-6 h-6 text-orange-500" />,
      title: "Email Us",
      details: [
        "info@thepetnest.com",
        "support@thepetnest.com",
        "grooming@thepetnest.com"
      ]
    }
  ];

  // Business hours
  const businessHours = [
    { day: "Monday - Friday", time: "8:00 AM - 8:00 PM" },
    { day: "Saturday", time: "8:00 AM - 6:00 PM" },
    { day: "Sunday", time: "9:00 AM - 6:00 PM" },
    { day: "Emergency Services", time: "24/7 Available" }
  ];

  // Social media links
  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, url: "#", label: "Facebook" },
    { icon: <Instagram className="w-5 h-5" />, url: "#", label: "Instagram" },
    { icon: <Twitter className="w-5 h-5" />, url: "#", label: "Twitter" },
    { icon: <MessageCircle className="w-5 h-5" />, url: "#", label: "WhatsApp" }
  ];

  // Services offered
  const services = [
    { icon: <Scissors className="w-8 h-8 text-orange-500" />, name: "Pet Grooming" },
    { icon: <Heart className="w-8 h-8 text-orange-500" />, name: "Pet Boarding" },
    { icon: <Shield className="w-8 h-8 text-orange-500" />, name: "Pet Health" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Hero Section with Background Image */}
      <div 
        className="relative py-20"
        style={{
          backgroundImage: `url('https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/e98eB1mOmbgIDRs5qFQO/media/6554e5d4580190d587fec237.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/60 to-blue-600/60"></div>
        
        {/* Content */}
        <div className="relative container mx-auto px-4 mt-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Contact Us</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto text-white">
            We'd love to hear from you! Get in touch with our team for any questions about our pet care services.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h2>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Full Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Email Address</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Service Interested In</label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent">
                      <option>Pet Grooming</option>
                      <option>Pet Boarding</option>
                      <option>Dog Training</option>
                      <option>Vet Services</option>
                      <option>Pet Walking</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">Subject</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="How can we help you?"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">Message</label>
                  <textarea 
                    rows="5" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Tell us more about your pet's needs..."
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl">
                  <div className="flex items-start">
                    <div className="p-3 bg-orange-50 rounded-lg mr-4">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800 mb-2">{info.title}</h3>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-600">{detail}</p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Business Hours */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                <Clock className="w-5 h-5 text-orange-500 mr-2" />
                Business Hours
              </h3>
              <div className="space-y-3">
                {businessHours.map((hour, index) => (
                  <div key={index} className="flex justify-between">
                    <span className="text-gray-700 font-medium">{hour.day}</span>
                    <span className="text-gray-600">{hour.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Services */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Our Services</h3>
              <div className="grid grid-cols-3 gap-4">
                {services.map((service, index) => (
                  <div key={index} className="text-center">
                    <div className="flex justify-center mb-2">
                      {service.icon}
                    </div>
                    <p className="text-sm text-gray-700">{service.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-12">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-gray-800">Find Us Here</h2>
            </div>
            <div className="relative h-96">
              <iframe
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.0497123456789!2d72.83456789012345!3d19.012345678901234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDAwJzQ0LjUiTiA3MsKwNTAnMDQuNCJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="ThePetNest Location"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Connect With Us</h2>
          <p className="text-gray-600 mb-6">Follow us on social media for pet care tips and updates</p>
          <div className="flex justify-center space-x-4">
            {socialLinks.map((social, index) => (
              <a 
                key={index}
                href={social.url}
                className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-orange-500 hover:shadow-xl transition-all duration-300"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;