

// "use client";
// import React, { useState } from 'react';
// import { Phone, Instagram, Mail, Send, Clock, Quote } from 'lucide-react';

// const ContactUs = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);
  

//   const handleInputChange = (e:any) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSubmit = async (e:any) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     // Format message for WhatsApp
//     const whatsappMessage = `*New Contact Form Submission*%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Message:* ${formData.message}`;
    
//     // Get phone number from environment or use default
//     const phoneNumber = "919876543210";
    
//     // Open WhatsApp with formatted message
//     const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;
//     window.open(whatsappUrl, '_blank');

//     // Reset form
//     setFormData({ name: '', email: '', message: '' });
//     setIsSubmitting(false);
//   };

//   return (
//     <section id="contact" className="py-20 bg-gradient-to-br from-green-100 via-white to-green-200 relative">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
//         {/* Header */}
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//             Get in Touch
//           </h2>
//           <p className="text-gray-600 text-lg">
//             Send us a message and connect with our team
//           </p>
//         </div>

//         {/* Top Section - Contact Information Business Cards */}
//         <div className="mb-16">
//           <div className="relative">
//             <div className="relative overflow-hidden">
//               {/* Main Contact Information Card */}
//               <div className="relative bg-gradient-to-br from-green-600 via-green-700 to-green-800 rounded-3xl p-8 md:p-12 shadow-2xl">
//                 {/* Animated Background Pattern */}
//                 <div className="absolute inset-0 opacity-10">
//                   <div className="absolute inset-0" style={{
//                     backgroundImage: `
//                       radial-gradient(circle at 20% 80%, rgba(255,255,255,0.3) 1px, transparent 1px),
//                       radial-gradient(circle at 80% 20%, rgba(255,255,255,0.3) 1px, transparent 1px),
//                       radial-gradient(circle at 40% 40%, rgba(255,255,255,0.2) 1px, transparent 1px)
//                     `,
//                     backgroundSize: '50px 50px, 80px 80px, 120px 120px'
//                   }}></div>
//                 </div>
                
//                 {/* Content */}
//                 <div className="relative z-10">
//                   {/* Icon */}
//                   <div className="mb-6">
//                     <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-white/20 backdrop-blur-sm rounded-2xl">
//                       <Quote className="w-6 h-6 md:w-8 md:h-8 text-white" />
//                     </div>
//                   </div>
                  
//                   {/* Main Title */}
//                   <div className="text-white text-left space-y-2 mb-8">
//                     <div className="text-xl md:text-2xl lg:text-3xl font-light opacity-90">
//                       Let's Connect &
//                     </div>
//                     <div className="text-3xl md:text-4xl lg:text-5xl font-bold leading-none">
//                       Build Together
//                     </div>
//                     <div className="text-lg md:text-xl lg:text-2xl font-light opacity-90">
//                       Your Success Story
//                     </div>
//                   </div>
                  
//                   {/* Contact Information Grid */}
//                   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
//                     {/* Phone Card */}
//                     <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-white/20">
//                       <div className="flex items-center space-x-3 mb-3">
//                         <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
//                           <Phone className="w-4 h-4 text-white" />
//                         </div>
//                         <h4 className="text-white font-semibold text-sm md:text-base">Phone</h4>
//                       </div>
//                       <a 
//                         href="tel:+919876543210"
//                         className="text-white/90 hover:text-white transition-colors text-xs md:text-sm font-medium"
//                       >
//                         +91 98765 43210
//                       </a>
//                     </div>

//                     {/* Email Card */}
//                     <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-white/20">
//                       <div className="flex items-center space-x-3 mb-3">
//                         <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
//                           <Mail className="w-4 h-4 text-white" />
//                         </div>
//                         <h4 className="text-white font-semibold text-sm md:text-base">Email</h4>
//                       </div>
//                       <a 
//                         href="mailto:loopstackofficial@gmail.com"
//                         className="text-white/90 hover:text-white transition-colors text-xs md:text-sm font-medium break-all"
//                       >
//                         loopstackofficial@gmail.com
//                       </a>
//                     </div>

//                     {/* Instagram Card */}
//                     <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-white/20">
//                       <div className="flex items-center space-x-3 mb-3">
//                         <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
//                           <Instagram className="w-4 h-4 text-white" />
//                         </div>
//                         <h4 className="text-white font-semibold text-sm md:text-base">Instagram</h4>
//                       </div>
//                       <a 
//                         href="https://www.instagram.com/loopstack.official/"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="text-white/90 hover:text-white transition-colors text-xs md:text-sm font-medium"
//                       >
//                         @loopstack.official
//                       </a>
//                     </div>

//                     {/* Business Hours Card */}
//                     <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-white/20">
//                       <div className="flex items-center space-x-3 mb-3">
//                         <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
//                           <Clock className="w-4 h-4 text-white" />
//                         </div>
//                         <h4 className="text-white font-semibold text-sm md:text-base">Hours</h4>
//                       </div>
//                       <p className="text-white/90 text-xs md:text-sm font-medium">
//                         Mon-Sat<br />9AM-6PM IST
//                       </p>
//                     </div>
//                   </div>
                  
//                   {/* Decorative Element */}
//                   <div className="mt-8">
//                     <div className="w-20 h-1 bg-white/30 rounded-full"></div>
//                   </div>
//                 </div>
                
//                 {/* Floating Elements */}
//                 <div className="absolute -top-6 -right-6 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
//                 <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
//               </div>
              
//               {/* Additional Decorative Elements */}
//               <div className="absolute -z-10 -top-4 -left-4 w-full h-full bg-gradient-to-br from-green-400/20 to-green-600/20 rounded-3xl blur-sm"></div>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Section - Contact Form */}
//         <div className="max-w-4xl mx-auto text-black">
//           <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6 md:p-8 lg:p-10">
//             <div className="text-center mb-8">
//               <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
//                 Send us a Message
//               </h2>
//               <p className="text-gray-600 text-base md:text-lg">
//                 Fill out the form below and we'll get back to you as soon as possible.
//               </p>
//             </div>

//             <div className="space-y-6">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 {/* Name Field */}
//                 <div>
//                   <label className="block text-sm font-semibold text-gray-700 mb-2">
//                     Full Name *
//                   </label>
//                   <input
//                     type="text"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleInputChange}
//                     required
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
//                     placeholder="Enter your full name"
//                   />
//                 </div>

//                 {/* Email Field */}
//                 <div>
//                   <label className="block text-sm font-semibold text-gray-700 mb-2">
//                     Email Address *
//                   </label>
//                   <input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleInputChange}
//                     required
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
//                     placeholder="Enter your email address"
//                   />
//                 </div>
//               </div>

//               {/* Message Field */}
//               <div>
//                 <label className="block text-sm font-semibold text-gray-700 mb-2">
//                   Message *
//                 </label>
//                 <textarea
//                   name="message"
//                   value={formData.message}
//                   onChange={handleInputChange}
//                   required
//                   rows={6}
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors resize-none"
//                   placeholder="Tell us about your project or ask any questions..."
//                 />
//               </div>

//               {/* Submit Button */}
//               <button
//                 onClick={handleSubmit}
//                 disabled={isSubmitting}
//                 className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-4 px-6 rounded-lg font-semibold hover:from-green-600 hover:to-green-700 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
//               >
//                 {isSubmitting ? (
//                   <>
//                     <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
//                     <span>Sending...</span>
//                   </>
//                 ) : (
//                   <>
//                     <Send className="w-5 h-5" />
//                     <span>Send Message</span>
//                   </>
//                 )}
//               </button>
//             </div>

//             <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
//               <p className="text-sm text-green-700 text-center">
//                 <strong>Note:</strong> Clicking "Send Message" will open WhatsApp with your message pre-filled. 
//                 This ensures faster response times and direct communication.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactUs;


"use client";
import React, { useState } from 'react';
import { Phone, Instagram, Mail, Send, Clock, Quote } from 'lucide-react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  

  const handleInputChange = (e:any) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Format message for WhatsApp
    const whatsappMessage = `*New Contact Form Submission*%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Message:* ${formData.message}`;
    
    // Get phone number from environment or use default
    const phoneNumber = "919876543210";
    
    // Open WhatsApp with formatted message
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;
    window.open(whatsappUrl, '_blank');

    // Reset form
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-green-100 via-white to-green-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-600 text-lg">
            Send us a message and connect with our team
          </p>
        </div>

        {/* Main Content - Side by Side on Desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Section - Let's Connect */}
          <div className="h-full">
            <div className="relative h-full">
              <div className="relative overflow-hidden h-full">
                {/* Main Contact Information Card */}
                <div className="relative bg-gradient-to-br from-green-600 via-green-700 to-green-800 rounded-3xl p-8 md:p-12 shadow-2xl h-full flex flex-col">
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
                  <div className="relative z-10 flex flex-col h-full">
                    {/* Icon */}
                    <div className="mb-6">
                      <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-white/20 backdrop-blur-sm rounded-2xl">
                        <Quote className="w-6 h-6 md:w-8 md:h-8 text-white" />
                      </div>
                    </div>
                    
                    {/* Main Title */}
                    <div className="text-white text-left space-y-2 mb-8">
                      <div className="text-xl md:text-2xl lg:text-3xl font-light opacity-90">
                        Let's Connect &
                      </div>
                      <div className="text-3xl md:text-4xl lg:text-5xl font-bold leading-none">
                        Build Together
                      </div>
                      <div className="text-lg md:text-xl lg:text-2xl font-light opacity-90">
                        Your Success Story
                      </div>
                    </div>
                    
                    {/* Contact Information Grid - Flex grow to fill space */}
                    <div className="flex-grow">
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4 md:gap-6 h-full">
                        {/* Phone Card */}
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-white/20 flex flex-col justify-center">
                          <div className="flex items-center space-x-3 mb-3">
                            <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                              <Phone className="w-4 h-4 text-white" />
                            </div>
                            <h4 className="text-white font-semibold text-sm md:text-base">Phone</h4>
                          </div>
                          <a 
                            href="tel:+919876543210"
                            className="text-white/90 hover:text-white transition-colors text-xs md:text-sm font-medium"
                          >
                            +91 98765 43210
                          </a>
                        </div>

                        {/* Email Card */}
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-white/20 flex flex-col justify-center">
                          <div className="flex items-center space-x-3 mb-3">
                            <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                              <Mail className="w-4 h-4 text-white" />
                            </div>
                            <h4 className="text-white font-semibold text-sm md:text-base">Email</h4>
                          </div>
                          <a 
                            href="mailto:loopstackofficial@gmail.com"
                            className="text-white/90 hover:text-white transition-colors text-xs md:text-sm font-medium break-all"
                          >
                            loopstackofficial@gmail.com
                          </a>
                        </div>

                        {/* Instagram Card */}
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-white/20 flex flex-col justify-center">
                          <div className="flex items-center space-x-3 mb-3">
                            <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                              <Instagram className="w-4 h-4 text-white" />
                            </div>
                            <h4 className="text-white font-semibold text-sm md:text-base">Instagram</h4>
                          </div>
                          <a 
                            href="https://www.instagram.com/loopstack.official/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white/90 hover:text-white transition-colors text-xs md:text-sm font-medium"
                          >
                            @loopstack.official
                          </a>
                        </div>

                        {/* Business Hours Card */}
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-white/20 flex flex-col justify-center">
                          <div className="flex items-center space-x-3 mb-3">
                            <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                              <Clock className="w-4 h-4 text-white" />
                            </div>
                            <h4 className="text-white font-semibold text-sm md:text-base">Hours</h4>
                          </div>
                          <p className="text-white/90 text-xs md:text-sm font-medium">
                            Mon-Sat<br />9AM-6PM IST
                          </p>
                        </div>
                      </div>
                    </div>
                    
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
          </div>

          {/* Right Section - Contact Form */}
          <div className="h-full">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6 md:p-8 lg:p-10 h-full flex flex-col text-black">
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Send us a Message
                </h2>
                <p className="text-gray-600 text-base md:text-lg">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </div>

              <div className="space-y-6 flex-grow flex flex-col">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-6">
                  {/* Name Field */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                      placeholder="Enter your full name"
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>

                {/* Message Field - Flex grow to fill available space */}
                <div className="flex-grow flex flex-col">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors resize-none flex-grow min-h-[120px]"
                    placeholder="Tell us about your project or ask any questions..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-4 px-6 rounded-lg font-semibold hover:from-green-600 hover:to-green-700 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>

                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                  <p className="text-sm text-green-700 text-center">
                    <strong>Note:</strong> Clicking "Send Message" will open WhatsApp with your message pre-filled. 
                    This ensures faster response times and direct communication.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;