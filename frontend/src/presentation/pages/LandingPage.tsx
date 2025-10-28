import React from 'react'
import HeroSection from '@presentation/components/HeroSection'
import FeaturesSection from '@presentation/components/FeaturesSection'

const LandingPage: React.FC = () => {
  return (
    <div className="landing-page">
      <HeroSection />
      <FeaturesSection />
    </div>
  )
}

export default LandingPage
