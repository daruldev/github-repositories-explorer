// import React from 'react'
import React from 'react';
import MultilanguageDropdown from './MultilanguageDropdown';

export default function Header() {
  return (
    <header className="w-full max-w-screen-xl mx-auto absolute inset-x-0 top-0 z-50">
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#home" className="flex items-center mb-4 sm:mb-0">
            <img
              width={100}
              src={require('../assets/logo.png')}
              className="-mr-1"
              alt="gre logo"
            />
          </a>
        </div>
        <div className="-mt-4 -mr-4 lg:flex lg:flex-1 lg:justify-end">
          <MultilanguageDropdown />
        </div>
      </nav>
    </header>
  );
}
