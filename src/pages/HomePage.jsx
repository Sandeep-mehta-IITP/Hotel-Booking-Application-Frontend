import React from 'react'
import HeroSection from '../components/HeroSection'
import FeaturedDestination from '../components/FeaturedDestination'
import ExclusiveOffers from '../components/ExclusiveOffers'
import Testimonial from '../components/Testimonial'
import NewsLetter from '../components/NewsLetter'

const HomePage = () => {
  return (
    <>
        <HeroSection />
        <FeaturedDestination />
        <ExclusiveOffers />
        <Testimonial />
        <NewsLetter />
    </>
  )
}

export default HomePage