import React, { useState } from 'react';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <header className="">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img
            src="./src/assets/logo.svg"
            alt="Your Logo"
            className="h-24"
          />
        </div>

        <nav className={`hidden md:flex items-center space-x-8 ${showMobileMenu ? 'hidden md:block' : ''}`}>
          <a href="/" className="text-white font-semibold hover:text-yellow-500 active:text-white">Home</a>
          <a href="/events" className="text-white font-semibold hover:text-yellow-500 active:text-white">Events</a>
          <a href="/about" className="text-white font-semibold hover:text-yellow-500 active:text-white">About Us</a>
          <a href="/contact" className="text-white font-semibold hover:text-yellow-500 active:text-white">Contact Us</a>
        </nav>


        <div className="md:hidden">
          <button
            className="text-white hover:text-white"
            onClick={toggleMobileMenu}
          >
            {showMobileMenu ? (
              <svg
                className="h-6 w-6 fill-current"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M14.293 5.293l-9 9a1 1 0 101.414 1.414l9-9a1 1 0 10-1.414-1.414zM5.293 5.293l9 9a1 1 0 101.414-1.414l-9-9a1 1 0 10-1.414 1.414z"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6 fill-current"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M20 11H0v-1h20v1zM20 5H0V4h20v1zM0 15h20v1H0v-1z"
                />
              </svg>
            )}
          </button>
        </div>

        <div className="hidden md:flex">
          <button className="text-black font-semibold hover:text-grey-300 px-4 py-2 rounded-lg bg-white h-10 w-32">
            Login
          </button>
        </div>
      </div>

      {showMobileMenu && (
        <nav className="md:hidden bg-white rounded-md shadow-md mt-4 p-2 py-1 px-2  transform transition-transform ease-in-out duration-300 text-center ">
          <a href="/" className="text-black font-semibold block my-2 hover:text-white hover:bg-black hover:border-black transition-colors duration-300 ease-in-out rounded-lg py-2">
            Home
          </a>
          <a href="/events" className="text-black font-semibold block my-2 hover:text-white hover:bg-black hover:border-black transition-colors duration-300 ease-in-out rounded-lg py-2">
            Events
          </a>
          <a href="/about" className="text-black font-semibold block my-2 hover:text-white hover:bg-black hover:border-black transition-colors duration-300 ease-in-out rounded-lg py-2">
            About Us
          </a>
          <a href="/contact" className="text-black font-semibold block my-2 hover:text-white hover:bg-black hover:border-black transition-colors duration-300 ease-in-out rounded-lg py-2">
            Contact Us
          </a>

          <div className="flex justify-center mt-4">
            <a href="/login" className="text-white font-semibold block w-32 px-4 py-2 rounded-lg bg-black border border-white hover:bg-white hover:text-black transition-colors duration-300 ease-in-out">
              Login
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};


export default Header;
