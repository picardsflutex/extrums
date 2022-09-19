import React from 'react'
import TableEl from '../elements/TableEl'


const Completed = () => {
  return (
    <div className="completed">
      <h2 className="completed__title title neon-text">Completed challenges</h2>
      <table className='neon-box'>
        <tr>
          <th className='neon-text'></th>
          <th className='neon-text'>Title</th>
          <th className='neon-text'>Type</th>
          <th className='neon-text'>When</th>
        </tr>
        <TableEl/>
        <TableEl/>
        <TableEl/>
      </table>
    </div>
  )
}

export default Completed