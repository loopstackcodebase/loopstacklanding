'use client'
import React from "react";
import { Store, MessageCircle, Smartphone, Shield, Zap, Users, ArrowRight, CheckCircle, Star } from "lucide-react";

const Features = () => {
  const mainFeatures = [
    {
      icon: Store,
      title: "Complete Online Store",
      subtitle: "Everything You Need to Sell Online",
      description: "Transform your business with a professional online store that works perfectly on all devices. No coding skills required - just add your products and start selling.",
      highlights: [
        "Mobile-responsive design",
        "Professional store that builds customer trust",
        "Product management through admin panel",
        "Easily share store links with your users"
      ],
      badge: "Most Popular",
      gradient: "from-green-500 to-green-600"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp Ordering",
      subtitle: "Seamless Customer Communication",
      description: "Your customers can browse your store and place orders directly through WhatsApp - the app they already use every day. No complex checkout processes.",
      highlights: [
        "Orders sent directly to your WhatsApp",
        "Easy customer communication and support",
        "No payment gateway complications",
        "Familiar ordering experience for customers"
      ],
      badge: "Customer Favorite",
      gradient: "from-green-500 to-green-600"
    },
    {
      icon: Zap,
      title: "Instant Setup",
      subtitle: "Start Selling in Minutes",
      description: "Get your online store up and running immediately. Our streamlined setup process means you can start selling today, not weeks from now.",
      highlights: [
        "No technical skills or coding required",
        "Add products through simple admin panel",
        "Generate QR codes for easy store sharing",
        "Link list feature like Linktree included"
      ],
      badge: "Time Saver",
      gradient: "from-green-500 to-green-600"
    }
  ];

  const valueProps = [
    {
      icon: Users,
      title: "Built for Small Businesses",
      description: "Designed specifically for entrepreneurs and small business owners who want to go online without breaking the bank."
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Enterprise-grade security and hosting included. Your store is safe, fast, and always available to customers."
    },
    {
      icon: Smartphone,
      title: "Mobile-First Experience",
      description: "Over 70% of online shopping happens on mobile. Your store is optimized for mobile from day one."
    }
  ];

  return (
    <section className="py-15 bg-gradient-to-br from-green-50 via-white to-green-100" id="product">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Star className="w-4 h-4" />
            Trusted by Growing Businesses
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose <span className="text-green-500">LoopStack Store?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Get everything you need to start selling online for just ₹49/year. No hidden fees, no complicated setup, just a simple way to grow your business online.
          </p>
        </div>

        {/* Main Features */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {mainFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 group border border-gray-100 relative overflow-hidden"
              >
                {/* Badge */}
                <div className="absolute top-4 right-4">
                  <span className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
                    {feature.badge}
                  </span>
                </div>

                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-8 h-8" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-green-600 font-semibold mb-4 text-sm uppercase tracking-wide">
                  {feature.subtitle}
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {feature.description}
                </p>

                {/* Highlights */}
                <div className="space-y-3 mb-8">
                  {feature.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700 leading-relaxed">{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Background decoration */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 opacity-5">
                  <IconComponent className="w-full h-full text-gray-400" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Value Propositions */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              More Than Just a Store
            </h3>
            <p className="text-lg text-gray-600">
              We've thought of everything you need to succeed online
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {valueProps.map((prop, index) => {
              const IconComponent = prop.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">
                    {prop.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {prop.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Success Story Callout */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-green-600 to-emerald-700 rounded-3xl p-8 md:p-12 text-white text-center relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Start Your Success Story Today
              </h3>
              <p className="text-green-100 text-lg mb-8 max-w-2xl mx-auto">
                Join hundreds of businesses already selling online with LoopStack Store. 
                No technical skills required - just add your products and start growing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-green-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group">
                  Start at ₹49/year
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-green-600 transition-all duration-300">
                  View All Plans
                </button>
              </div>
            </div>
            
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-64 h-64 opacity-10">
              <Store className="w-full h-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;