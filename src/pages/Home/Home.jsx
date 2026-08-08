import React from 'react';
import Hero from '../../components/home/Hero';
import Navbar from '../../components/layout/Navbar';
import TrustedCompanies from '../../components/home/TrustedCompanies';
import AnalyticsPreview from "../../components/home/AnalyticsPreview";
import Capabilities from "../../components/home/Capabilities";
function Home() {
  return (
    <div>
        <Navbar />
        <Hero />
        <TrustedCompanies />
        <Capabilities />
        <AnalyticsPreview />
    </div>
  )
}

export default Home