import React from 'react'
import StatsSection from '../Components/AboutStats'
import VideoSection from '../Components/AboutVideo'
import AboutServicesSection from '../Components/AboutServices'
import HeroSection from '../Components/AboutHero'
import AppDownloadSection from '../Components/AboutApp'

const About = () => {
  return (
    <div>
      <HeroSection/>
      <AboutServicesSection/>
      <VideoSection/>
      <StatsSection/>
      <AppDownloadSection/>
    </div>
  )
}

export default About
