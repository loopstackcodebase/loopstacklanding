
'use client'
import React from "react";
import { ArrowRight, CheckCircle, Globe, Store, Briefcase, Star, Users, Award, Wifi, Battery, Signal } from "lucide-react";

const Hero = () => {
  const productFeatures = [
    {
      icon: Store,
      title: "Up to 100 Product Listings",
      description: "Showcase your entire product catalog online",
    },
    {
      icon: Globe,
      title: "WhatsApp Ordering System",
      description: "Easy communication with your customers",
    },
    {
      icon: Briefcase,
      title: "Admin Panel",
      description: "Manage products and store settings easily",
    },
      {
      icon: Briefcase,
      title: "Mobile-responsive design",
      description: "Seamless shopping experience on any device",
    },
  ];

  return (
    <section 
      className="bg-gradient-to-br from-gray-50 to-white min-h-screen relative"
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
        <div className="py-8 md:py-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Star className="w-4 h-4 mr-2" />
                  Trusted by Emerging Businesses
                </div>
                
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  <span className="text-green-600">LoopStack Store</span>
                  <br />
                  Your Online Business
                  <br />
                  <span className="text-gray-700 text-3xl md:text-4xl">
                   Starting at just ₹49/year
                  </span>
                </h1>

                <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl">
                  Start selling online with our affordable subscription store. List up to 100 products, manage orders via WhatsApp, and grow your business with our easy-to-use platform.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center gap-2 group"
                >
                  Get Your Store Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-50 transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2 group">
                  View Pricing
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right Side - Mobile Mockup (centered in right section) */}
            <div className="flex justify-center lg:justify-end lg:pr-8">
              <div className="relative">
                {/* Mobile Frame - Optimized size */}
                <div className="w-72 h-[580px] bg-black rounded-[2.8rem] p-3 shadow-2xl">
                  {/* Screen */}
                  <div className="w-full h-full bg-white rounded-[2.3rem] overflow-hidden relative">
                    
                    {/* Status Bar */}
                    <div className="flex justify-between items-center px-5 py-2 bg-gray-50">
                      <div className="text-xs font-medium text-black">9:41</div>
                      <div className="flex items-center space-x-1">
                        <Signal className="w-3.5 h-3.5 text-black" />
                        <Wifi className="w-3.5 h-3.5 text-black" />
                        <Battery className="w-4 h-2.5 text-black" />
                      </div>
                    </div>

                    {/* App Header */}
                    <div className="bg-gradient-to-r from-green-500 to-green-600 px-5 py-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <h2 className="text-white font-bold text-base">LoopStack Store</h2>
                          <p className="text-green-100 text-xs">Features</p>
                        </div>
                        <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                          <Store className="w-4 h-4 text-white" />
                        </div>
                      </div>
                    </div>

                    {/* Features List */}
                    <div className="flex-1 px-4 py-3 space-y-5 overflow-y-auto">
                      {productFeatures.map((feature, index) => {
                        const IconComponent = feature.icon;
                        return (
                          <div key={index} className="bg-gray-50 rounded-lg p-3 hover:bg-gray-100 transition-colors">
                            <div className="flex items-start gap-2">
                              <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                <IconComponent className="w-4 h-4 text-green-600" />
                              </div>
                              <div className="flex-1">
                                <h4 className="font-semibold text-gray-900 text-xs mb-0.5 leading-tight">{feature.title}</h4>
                                <p className="text-gray-600 text-[10px] leading-tight">{feature.description}</p>
                              </div>
                            </div>
                          </div>
                        );
                      })}

                      {/* Call to Action Card */}
                      <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-3 border border-green-100 mt-4">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                            <CheckCircle className="w-4 h-4 text-white" />
                          </div>
                          <div>
                            <div className="font-semibold text-gray-900 text-xs leading-tight">Ready to Start Selling?</div>
                            <div className="text-[10px] text-gray-600 leading-tight mt-0.5">Get your online store for just ₹49/year</div>
                          </div>
                        </div>
                      </div>

                     
                    </div>

                    {/* Bottom Navigation Indicator */}
                    <div className="absolute bottom-1.5 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gray-300 rounded-full"></div>
                  </div>
                </div>

                {/* Floating elements for visual appeal */}
                <div className="absolute -top-6 -right-6 w-8 h-8 bg-green-400 rounded-full opacity-80 animate-pulse"></div>
                <div className="absolute -bottom-6 -left-6 w-10 h-10 bg-blue-400 rounded-full opacity-60 animate-bounce"></div>
                <div className="absolute top-1/2 -left-8 w-6 h-6 bg-purple-400 rounded-full opacity-70"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;