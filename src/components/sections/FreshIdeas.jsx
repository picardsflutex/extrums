import React from 'react'
import '../../styles/sections/FreshIdeas.css'
import FIListItem from './../elements/FIListItem'

const FreshIdeas = () => {
  

  return (
    <section className="fresh-ideas">
      <h2 className="fresh-ideas__title title neon-text">
        Choose fresh ideas to do:
      </h2>
      <div className="fresh-ideas__list">
        <FIListItem/>
        <FIListItem/>
        <FIListItem/>
        <FIListItem/>
        <div className="fresh-ideas__item fresh-ideas__item-add neon-box">
          <button className="fresh-ideas__button fresh-ideas__add-idea neon-box"></button>
          <div className="fresh-ideas__btn-text neon-text">New Idea</div>
        </div>
      </div>
    </section>
  )
}

export default FreshIdeas;