"use client";
import React from "react";

const Header = () => {

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex items-center gap-3 cursor-pointer">
                <img
                  src="/img/logo.png"
                  alt="LoopStack Logo"
                  className="h-8 w-8 object-contain"
                />
                <h1 className="text-2xl font-bold text-gray-900">
                  Loop<span className="text-green-500">Stack</span>
                </h1>
              </div>
            </div>
          </div>

          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a
                href="#product"
                className="text-gray-600 hover:text-green-500 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
               Product
              </a>
              <a
                href="#pricing"
                className="text-gray-600 hover:text-green-500 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Price
              </a>

              <a
                href="#faq"
                className="text-gray-600 hover:text-green-500 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Faq
              </a>
              
           <a
                href="#contact"
                className="text-gray-600 hover:text-green-500 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Contact Us
              </a>
              <a
                href="/signup"
                className="bg-green-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-green-600 transition-colors"
              >
                Get Started
              </a>
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-gray-600 hover:text-green-500 p-2">
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
