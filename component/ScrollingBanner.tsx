'use client'
import React from "react";
import { Star, Zap, Shield, Smartphone } from "lucide-react";

const ScrollingBanner = () => {
  const bannerItems = [
    { icon: Star, text: "₹99/Year Subscription Store - Instant Setup" },
    { icon: Zap, text: "List Up to 100 Products - No Hidden Fees" },
    { icon: Shield, text: "WhatsApp Ordering System - Easy Customer Communication" },
    { icon: Smartphone, text: "Mobile-First Design & Lightning Fast Loading" },
    { icon: Star, text: "Admin Panel for Product & Store Management" },
    { icon: Zap, text: "No Technical Skills Required - Start Selling Today" },
    { icon: Shield, text: "99.9% Uptime Guarantee & Secure Hosting" },
    { icon: Smartphone, text: "Budget-Friendly Online Store Solution for Small Businesses" }
  ];

  return (
    <div className="bg-gradient-to-r from-green-600 via-green-500 to-green-600 py-4 overflow-hidden relative">
      {/* Animated scrolling container */}
      <div className="flex animate-scroll whitespace-nowrap">
        {/* First set of items */}
        <div className="flex items-center space-x-12 px-6">
          {bannerItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div key={index} className="flex items-center space-x-3 text-white">
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <IconComponent className="w-4 h-4" />
                </div>
                <span className="text-sm font-medium">{item.text}</span>
              </div>
            );
          })}
        </div>
        
        {/* Duplicate set for seamless loop */}
        <div className="flex items-center space-x-12 px-6">
          {bannerItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div key={`duplicate-${index}`} className="flex items-center space-x-3 text-white">
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <IconComponent className="w-4 h-4" />
                </div>
                <span className="text-sm font-medium">{item.text}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Gradient overlays for smooth fade effect */}
      <div className="absolute top-0 left-0 w-16 h-full bg-gradient-to-r from-green-600 to-transparent z-10"></div>
      <div className="absolute top-0 right-0 w-16 h-full bg-gradient-to-l from-green-600 to-transparent z-10"></div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default ScrollingBanner;