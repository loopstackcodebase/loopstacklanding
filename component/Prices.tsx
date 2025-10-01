

'use client';

import { useState } from 'react';
import { Check, Package, Server, Globe, TrendingUp, Settings } from 'lucide-react';
import { redirectToWhatsApp, WhatsAppMessages } from '../utils/whatsappHelper';
const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState('pro');

  const plans = [
    {
      id: 'free',
      name: 'Free',
      subtitle: 'Up to 6 Products',
      price: '₹0',
      period: 'forever',
      description: 'Perfect for getting started with your online presence',
      features: [
        'Up to 6 product listings',
        'WhatsApp ordering system',
        'Admin panel for management',
        'Mobile-responsive design',
        'Easy product management',
        'Easy store management',
        'No technical skill required',
        'QR code generation in the admin panel',
        'Link list feature (like Linktree)'
      ],
      tier: 0,
      popular: false
    },
    {
      id: 'basic',
      name: 'Basic',
      subtitle: 'Up to 50 Products',
      price: '₹49',
      period: 'per year',
      description: 'Perfect for small businesses online journey',
      features: [
        'Up to 50 product listings',
        'WhatsApp ordering system',
        'Admin panel for management',
        'Mobile-responsive design',
        'Easy product management',
        'Easy store management',
        'No technical skill required',
        'QR code generation in the admin panel',
        'Link list feature (like Linktree)'
      ],
      tier: 1,
      popular: false
    },
    {
      id: 'standard',
      name: 'Standard',
      subtitle: 'Up to 100 Products',
      price: '₹99',
      period: 'per year',
      description: 'Perfect for small businesses list more products',
      features: [
        'Up to 100 product listings',
        'WhatsApp ordering system',
        'Admin panel for management',
        'Mobile-responsive design',
        'Easy product management',
        'Easy store management',
        'No technical skill required',
        'QR code generation in the admin panel',
        'Link list feature (like Linktree)'
      ],
      tier: 2,
      popular: true
    },
    {
      id: 'custom',
      name: 'Custom',
      subtitle: 'Full E-commerce Experience',
      price: 'Contact',
      period: 'Sales',
      description: 'Professional e-commerce solution with payment gateway integration',
      features: [
        'Unlimited product listings',
        'Online payment gateway integration',
        'Support for UPI, cards, wallets.',
        'Customers can pay directly online',
        'Standard e-commerce functionality',
        'Custom design and branding',
        'Efficient admin panel',
        'Custom design as per ur business'
      ],
      tier: 3,
      popular: false
    }
  ];

  const bonusFeatures = [
    {
      icon: Server,
      title: 'Secure Hosting',
      description: 'Reliable hosting with 99.9% uptime included in all plans'
    },
    {
      icon: Globe,
      title: 'No Technical Skills',
      description: 'Easy-to-use admin panel - no coding or technical knowledge required'
    },
    {
      icon: TrendingUp,
      title: 'Grow Your Business',
      description: 'Start small and upgrade as your business grows'
    },
    {
      icon: Settings,
      title: 'WhatsApp Support',
      description: 'Get help when you need it through our WhatsApp support'
    }
  ];

  const getColorClasses = () => {
    return {
      bg: 'bg-white',
      border: 'border-gray-200',
      text: 'text-green-600',
      button: 'bg-green-600 hover:bg-green-700',
      badge: 'bg-green-600 text-white'
    };
  };

  return (
    <section className="py-15 bg-gradient-to-br from-gray-50 to-white" id="pricing"
    
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
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Package className="w-8 h-8 text-green-600 mr-3" />
            <h2 className="text-4xl font-bold text-gray-900">
              Simple Pricing
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect store package for your business. Get started with just ₹49/year.
          </p>
        </div>

        {/* Pricing Plans */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-16">
          {plans.map((plan) => {
            const colors = getColorClasses();
            const isSelected = selectedPlan === plan.id;
            
            return (
              <div
                key={plan.id}
                className={`relative ${colors.bg} ${colors.border} border rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col h-full`}
                onClick={() => setSelectedPlan(plan.id)}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className={`${colors.badge} px-3 py-1 rounded-full text-xs font-medium shadow-sm`}>
                      Most Popular
                    </span>
                  </div>
                )}

                {/* Plan Header */}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {plan.name}
                  </h3>
                  {plan.subtitle && (
                    <p className="text-xs text-gray-500 mb-2">{plan.subtitle}</p>
                  )}
                  <div className="mb-3">
                    <span className={`text-3xl font-bold ${colors.text}`}>
                      {plan.price}
                    </span>
                    <span className="text-gray-500 text-sm ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {plan.description}
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-2 mb-6 flex-grow">
                  {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <Check className={`w-4 h-4 ${colors.text} mr-2 mt-0.5 flex-shrink-0`} />
                      <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Add-on section removed to fix type errors */}

                {/* Store Included Note for Pro and Advanced Plans */}
                {(plan.id === 'pro' || plan.id === 'advanced') && (
                  <div className="border-gray-100 bg-gray-50  rounded-lg p-3 mb-4">
                    <p className="text-xs text-gray-600 font-medium">
                      No add-on needed! Built-in online store included - fully customized for your business with no yearly subscription fees.
                    </p>
                  </div>
                )}

                {/* CTA Button */}
                <div className="mt-auto pt-2">
                  <button 
                    className={`w-full ${colors.button} text-white px-4 py-2.5 rounded-lg font-medium transition-colors duration-300 shadow-sm hover:shadow-md text-sm`}
                    onClick={() => {
                      if (plan.id === 'free') {
                        redirectToWhatsApp(WhatsAppMessages.SUBSCRIPTION_STORE);
                      } else if (plan.id === 'basic') {
                        redirectToWhatsApp(WhatsAppMessages.SUBSCRIPTION_STORE);
                      } else if (plan.id === 'standard') {
                        redirectToWhatsApp(WhatsAppMessages.SUBSCRIPTION_STORE);
                      } else if (plan.id === 'custom') {
                        redirectToWhatsApp(WhatsAppMessages.CUSTOM_QUOTE);
                      }
                    }}
                  >
                    Choose {plan.name}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bonus Section */}
        <div className="bg-white rounded-2xl p-8 mb-10 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Bonus in All Plans
            </h3>
            <p className="text-gray-600">
              Every plan includes these valuable extras at no additional cost
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {bonusFeatures.map((bonus, index) => {
              const IconComponent = bonus.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <IconComponent className="w-6 h-6 text-green-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">{bonus.title}</h4>
                  <p className="text-sm text-gray-600">{bonus.description}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-8 text-center">
            <div className="bg-gray-50 rounded-lg p-4 max-w-2xl mx-auto">
              <p className="text-sm text-gray-700">
                <strong>Secure hosting included</strong> with all plans • 
                <strong> Start selling online</strong> for just ₹49/year with no technical skills required
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Pricing;