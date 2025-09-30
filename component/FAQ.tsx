
'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp, MessageSquare, CreditCard } from 'lucide-react';
import { redirectToWhatsApp, WhatsAppMessages } from '../utils/whatsappHelper';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is WhatsApp Ordering?",
      answer: "Customers can browse your products, add items to cart, and click Checkout. Instead of a payment gateway, they're redirected to WhatsApp with product details, quantity, and total price. You directly manage payments (cash, UPI, or your preferred method). No third-party commission.",
      icon: MessageSquare
    },
    {
      question: "What is a Payment Gateway?",
      answer: "Customers add items to cart and complete the purchase through a third-party payment provider (Razorpay, Stripe, etc.). Customers can pay via UPI, cards, wallets, etc. A commission fee is charged by the provider.",
      icon: CreditCard
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-15 bg-gradient-to-br from-green-50 via-white to-green-100" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Common questions about our ordering systems
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-6">
          {faqs.map((faq, index) => {
            const IconComponent = faq.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
              >
                <button
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                  onClick={() => toggleFAQ(index)}
                >
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-green-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {faq.question}
                    </h3>
                  </div>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <ChevronUp className="w-6 h-6 text-green-600" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-gray-400" />
                    )}
                  </div>
                </button>
              {openIndex === index && (
                <div className="px-8 pb-6">
                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <div className="bg-green-50 rounded-2xl p-8 border border-green-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Need More Information?
            </h3>
            <p className="text-gray-700 mb-6">
              Have questions about which plan is right for your business? We're here to help you choose the perfect solution.
            </p>
            <button 
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-300 shadow-md hover:shadow-lg"
              onClick={() => redirectToWhatsApp(WhatsAppMessages.BUSINESS_INQUIRY)}
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
