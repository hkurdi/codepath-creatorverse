import React from 'react'
import { AddCreatorForm } from '../components/AddCreatorForm'
import { Hero } from '../components/Hero'

export const AddCreator = () => {
  return (
    <div id="addcreator-page" className="bg-gray-950">
        <section id="addcreator-hero" className="border-b-[1.4px] border-gray-500">
            <Hero />
        </section>
        <section id="addcreator-section">
            <AddCreatorForm />
        </section>
    </div>  )
}
