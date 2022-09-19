import React from 'react'

const FIListItem = () => {
  return (
    <div className="fresh-ideas__item neon-box">
      <div className="fresh-ideas__btns">
        <button className="fresh-ideas__button fresh-ideas__button-add neon-box"></button>
        <button className="fresh-ideas__button fresh-ideas__button-del neon-box"></button>
      </div>
      <h3 className="fresh-ideas__text neon-text">Learn how to fold a paper crane</h3>
      <h3 className="fresh-ideas__theme neon-text">Education</h3>
    </div>
  )
}

export default FIListItem