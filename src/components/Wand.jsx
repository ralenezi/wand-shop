import React from 'react'
import { Link } from 'react-router-dom'

const Wand = ({ wand }) => {
  return (
    <div className='wandContainer'>
      <Link to={`/wands/${wand.slug.toLowerCase()}`}>
        <img src={wand.imageUrl} alt={wand.core} />
      </Link>
      <p>{wand.core}</p>
    </div>
  )
}

export default Wand
