import React from 'react';
import Hero from '../../components/home/Hero';
import Navbar from '../../components/layout/Navbar';
import TrustedCompanies from '../../components/home/TrustedCompanies';
function Home() {
  return (
    <div>
        <Navbar />
        <Hero />
        <TrustedCompanies />
    </div>
  )
}

export default Home