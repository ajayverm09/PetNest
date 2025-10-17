import React from 'react'
import HeroSection from '../Components/HomeHero'
import PetServicesSection from '../Components/HomeServices'
import HeroServices from '../Components/HeroService'
import PetReviewsSection from '../Components/HomeReview'
import VideoCTASection from '../Components/HomeVideo'
import BlogGridSection from '../Components/HomeBlog'
import ServiceProvidersSection from '../Components/HomeTeam'
import BookingCTASection from '../Components/HomeCta'
import CitiesSection from '../Components/HomeCity'

const Home = () => {
  return (
    <div>
      <HeroSection/>
      <HeroServices/>
      <PetServicesSection/>
      <PetReviewsSection/>
      <VideoCTASection/>
      <BlogGridSection/>
      <ServiceProvidersSection/>
      <BookingCTASection/>
      <CitiesSection/>
    </div>
  )
}

export default Home
