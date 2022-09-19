import React from 'react'
import '../../styles/sections/Achievements.css'
import AchievementsItem from '../elements/AchievementsItem'

const Achievements = () => {
  return (
    <div className="achievements">
      <div className="achievements__inner">
        <h2 className="achievements__title title neon-text">Achievements</h2>
        <div className="achievements__list">
          <AchievementsItem/>
          <AchievementsItem/>
          <AchievementsItem/>
          <AchievementsItem/>
          <AchievementsItem/>
        </div>
      </div>
    </div>
  )
}

export default Achievements