import React from 'react'
import './../../styles/sections/MyIdeas.css'
import MISlider from '../elements/MISlider'

const MyIdeas = () => {
  return (
    <section className="my-ideas">
      <div className="my-ideas__inner">
        <h2 className="my-ideas__title title neon-text">Ideas in my list</h2>
        <MISlider/>
      </div>
    </section>
  )
}

export default MyIdeas