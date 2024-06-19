import React from 'react'
import { Hero } from '../components/Hero'
import { AllCreators } from '../components/AllCreators'

export const LandingPage = () => {
  return (
    <div id="landing" className="bg-gray-950">
        <section id="hero" className="border-b-[1.4px] border-gray-500">
            <Hero />
        </section>
        <section id="allcreators">
            <AllCreators />
        </section>
    </div>
  )
}
