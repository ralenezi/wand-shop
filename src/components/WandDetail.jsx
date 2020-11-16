import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import wands from '../wands'
import WandList from './WandList'
// import '../App.css'

const WandDetail = () => {
  const [share, setShare] = useState('Share!')

  const copy = () => {
    navigator.clipboard.writeText(window.location.pathname)
    setShare('Coppied!')
  }
  const wandSlug = useParams().wandSlug
  const wand = wands.find((e) => e.slug.toLowerCase() === wandSlug)
  return (
    <div>
      <img src={wand.imageUrl} style={{ maxHeight: '35em' }} alt={wand.slug} />
      <p>Core: {wand.core}</p>
      <p>Woor: {wand.wood}</p>
      <p>Length: {wand.length}</p>
      <button type='button' onClick={copy}>
        {share}
      </button>

      <h3>Recommended other wands:</h3>
      <WandList
        wands={wands.sort(() => 0.5 - Math.random()).slice(wands.length / 2)}
      />
    </div>
  )
}

export default WandDetail
