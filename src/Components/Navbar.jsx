import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  // Determine the active link based on the current pathname
  const activeLink = location.pathname === "/" 
    ? "home" 
    : location.pathname.split('/')[1] || 'home';

  const handleLinkClick = () => {
    setIsMenuOpen(false); // Close mobile menu after selection
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { id: "home", label: "Home", href: "/" },
    { id: "about", label: "About", href: "/about" },
    { id: "blogs", label: "Blogs", href: "/blogs" },
    { id: "contact", label: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed bg-white w-full z-50 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" onClick={handleLinkClick}>
              <img 
                src="https://dm6g3jbka53hp.cloudfront.net/static-images/tpn-logo-v1-m.png" 
                alt="The Pet Nest" 
                className="h-12 transition-transform duration-300 hover:scale-105" 
              />
            </Link>
          </div>

          {/* Desktop Menu Items */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.href}
                onClick={handleLinkClick}
                className={`relative py-2 font-medium transition-colors duration-300 ${
                  activeLink === item.id
                    ? "text-blue-600"
                    : "text-blue-400 hover:text-blue-500"
                }`}
              >
                {item.label}
                {activeLink === item.id && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 rounded-full"></span>
                )}
              </Link>
            ))}
          </div>

          {/* Sign In/Register Button */}
          <div className="hidden md:block">
            <Link to="/auth">
              <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-md font-medium transition-all duration-300 transform hover:scale-105 shadow-md">
                Sign In / Register
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu} 
              className="text-blue-950 focus:outline-none p-2 rounded-md hover:bg-white/20"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg">
            <div className="flex flex-col space-y-2 p-2">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  to={item.href}
                  onClick={handleLinkClick}
                  className={`block py-3 px-4 rounded-md transition-colors duration-300 ${
                    activeLink === item.id
                      ? "text-blue-600 bg-blue-50 font-medium"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-2 px-4">
                <Link to="/auth">
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-md font-medium transition-colors duration-300">
                    Sign In / Register
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;