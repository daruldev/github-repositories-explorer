import React from 'react';

export default function Footer() {
  return (
    <footer className="rounded-t-lg shadow bg-[#333333] w-full">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a href="#home" className="flex items-center mb-4 sm:mb-0">
            <img
              src={require('../assets/logo-white.png')}
              className="h-8 mr-3"
              alt="Logo"
            />
          </a>
        </div>
        <hr className="my-4 sm:mx-auto border-gray-100 lg:my-8" />
        <span className="block text-sm  sm:text-center text-gray-200">
          © 2023 <span>GitHub Repositories Explorer.</span>
        </span>
      </div>
    </footer>
  );
}
