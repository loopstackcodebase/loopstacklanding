


'use client'
import React from 'react';
import { Quote, ArrowRight } from 'lucide-react';
import { redirectToWhatsApp, WhatsAppMessages } from '../utils/whatsappHelper';
const FounderPOV = () => {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-white py-16"
    
     style={{
        backgroundImage: `
          linear-gradient(to right, rgba(34, 197, 94, 0.08) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(34, 197, 94, 0.08) 1px, transparent 1px),
          linear-gradient(to right, rgba(34, 197, 94, 0.04) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(34, 197, 94, 0.04) 1px, transparent 1px)
        `,
        backgroundSize: '30px 30px, 30px 30px, 90px 90px, 90px 90px'
      }}
    
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
          
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              From the Founder
            </h2>
          </div>
          {/* Professional subtitle */}
          <p className="text-gray-600 text-lg mt-3">
            There's something important I'd like to share with you
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Modern Title Display */}
          <div className="relative">
            <div className="relative overflow-hidden">
              {/* Main Title Card */}
              <div className="relative bg-gradient-to-br from-green-600 via-green-700 to-green-800 rounded-3xl p-12 shadow-2xl">
                {/* Animated Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `
                      radial-gradient(circle at 20% 80%, rgba(255,255,255,0.3) 1px, transparent 1px),
                      radial-gradient(circle at 80% 20%, rgba(255,255,255,0.3) 1px, transparent 1px),
                      radial-gradient(circle at 40% 40%, rgba(255,255,255,0.2) 1px, transparent 1px)
                    `,
                    backgroundSize: '50px 50px, 80px 80px, 120px 120px'
                  }}></div>
                </div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl">
                      <Quote className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  {/* Main Title */}
                  <h3 className="text-white text-left space-y-2">
                    <div className="text-2xl md:text-3xl font-light opacity-90">
                      Why We Offer
                    </div>
                    <div className="text-4xl md:text-5xl lg:text-6xl font-bold leading-none">
                      Affordable
                    </div>
                    <div className="text-2xl md:text-3xl font-light opacity-90">
                      Online Stores
                    </div>
                  </h3>
                  
                  {/* Subtitle */}
                  <p className="text-white/80 text-lg mt-6 font-medium">
                    Making e-commerce accessible to everyone
                  </p>
                  
                  {/* Decorative Element */}
                  <div className="mt-8">
                    <div className="w-20 h-1 bg-white/30 rounded-full"></div>
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
                <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
              </div>
              
              {/* Additional Decorative Elements */}
              <div className="absolute -z-10 -top-4 -left-4 w-full h-full bg-gradient-to-br from-green-400/20 to-green-600/20 rounded-3xl blur-sm"></div>
            </div>
          </div>

          {/* Right Side - Content Card with Scroll */}
          <div className="space-y-6">
            {/* Content Card - Fixed Height with Scroll */}
            <div className="bg-white rounded-xl shadow-lg border border-green-100 h-[500px]">
              <div className="p-6 h-full flex flex-col">
                {/* Scrollable Content Container */}
                <div className="flex-1 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-green-300 scrollbar-track-gray-100">
                  <div className="space-y-6">
                    {/* Section 1 */}
                    <div className="space-y-4">
                      <p className="text-gray-600 leading-relaxed">
                        I believe every business deserves to have an online presence, regardless of their budget. That's why I created the LoopStack Store - a simple, affordable way for small businesses to start selling online.
                      </p>
                      <p className="text-gray-600 leading-relaxed">
                        Our pricing is intentional - just{' '}
                        <span className="bg-green-100 px-2 py-1 rounded font-medium text-green-800">
                          ₹49/year or ₹99/year
                        </span>
                        . It's a{' '}
                        <span className="bg-green-100 px-2 py-1 rounded font-medium text-green-800">
                          small investment
                        </span>
                        {' '}that allows entrepreneurs and small business owners to take their first step into e-commerce without financial strain.
                      </p>
                    </div>

                    {/* Section 2 */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-gray-900">The Value You're Getting</h4>
                      <p className="text-gray-600 leading-relaxed">
                        With LoopStack Store, you're getting a complete online store solution that would typically cost thousands to develop. We've streamlined the process and created a platform that's{' '}
                        <span className="bg-green-100 px-2 py-1 rounded font-medium text-green-800">
                          easy to use
                        </span>
                        {' '}and requires no technical skills.
                      </p>
                      <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                        <p className="text-gray-700 font-medium">
                          For just ₹49/year, you get a fully-functional online store with up to 50 product listings, WhatsApp ordering, and an admin panel to manage everything.
                        </p>
                      </div>
                    </div>

                    {/* Section 3 */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-gray-900">Start Small, Grow Big</h4>
                      <p className="text-gray-600 leading-relaxed">
                        Our philosophy is simple - help businesses start their online journey with minimal investment, and provide options to grow as their business expands.
                      </p>
                      <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-lg">
                        <p className="text-gray-700 leading-relaxed">
                          Think of it as a{' '}
                          <span className="font-semibold text-green-700">stepping stone to success</span>
                          . Start with our basic package at ₹49/year, upgrade to our standard package at ₹99/year as you grow, and when you're ready for a full e-commerce experience, we have custom solutions available.
                        </p>
                      </div>
                      <p className="text-gray-600 leading-relaxed font-medium">
                        No technical skills required. No hidden fees. Just a simple, affordable way to start selling online.
                      </p>
                    </div>

                    {/* Final Note with Green Background */}
                    <div className="bg-green-50 border-l-4 border-green-500 p-5 rounded-lg">
                      <p className="text-gray-700 leading-relaxed">
                        I created LoopStack Store because I believe that{' '}
                        <span className="font-semibold text-green-800">everyone deserves access to e-commerce</span>
                        {' '}without breaking the bank. Our platform gives you everything you need to start selling online - product listings, WhatsApp ordering, secure hosting, and an easy-to-use admin panel - all for just ₹49/year. As your business grows, you can easily upgrade to list more products and access more features. My goal is to help as many small businesses as possible succeed online, and I believe our affordable pricing is the first step in making that happen.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="pt-4 border-t border-gray-100 mt-4">
                  <div className="flex items-center justify-between">
                    {/* Founder Info */}
                    <div>
                      <p className="font-semibold text-gray-900">Ansar Muhammed</p>
                      <p className="text-sm text-green-600">Founder, LoopStack</p>
                    </div>
                    
                    {/* Connect Button */}
                    <button 
                      onClick={() => redirectToWhatsApp(WhatsAppMessages.BUSINESS_INQUIRY)}
                      className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center gap-2 group"
                    >
                      Let's Connect
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderPOV;