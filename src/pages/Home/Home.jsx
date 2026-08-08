import React from 'react';
import Hero from '../../components/home/Hero';
import Navbar from '../../components/layout/Navbar';
import TrustedCompanies from '../../components/home/TrustedCompanies';
import AnalyticsPreview from "../../components/home/AnalyticsPreview";
import Capabilities from "../../components/home/Capabilities";
import Testimonials from "../../components/home/Testimonials";
import CTA from "../../components/home/CTA";
import Footer from "../../components/home/Footer";
function Home() {
  return (
    <div>
        <Navbar />
        <Hero />
        <TrustedCompanies />
        <Capabilities />
        <AnalyticsPreview />
        <Testimonials />
        <CTA />
        <Footer />
    </div>
  )
}

export default Home