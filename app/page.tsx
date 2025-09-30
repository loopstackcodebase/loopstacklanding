"use client";
import Header from "@/component/Header";
import ScrollingBanner from "@/component/ScrollingBanner";
import Hero from "@/component/Hero";
import Features from "@/component/Features";
import FAQ from "@/component/FAQ";
import ContactUs from "@/component/ContactUs";
import Footer from "@/component/Footer";
import React from "react";
import Pricing from "@/component/Prices";
import FounderPOV from "@/component/FounderPov";


const Page = () => {
  return (

      <div className="min-h-screen bg-white">
        <Header />
        <ScrollingBanner />
        <Hero />
        <Features />
        <Pricing />
        <FAQ />
        <FounderPOV />
        <ContactUs />
        <Footer />
      </div>

  );
};

export default Page;
