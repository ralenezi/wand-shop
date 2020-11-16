import { useState } from 'react'
import wands from '../wands'
import Wand from './Wand'

const Search = () => {
  const [query, setQuery] = useState('')
  const wandList = wands
    .filter(
      (wand) =>
        wand.core.toLowerCase().includes(query) ||
        wand.wood.toLowerCase().includes(query)
    )
    .map((wand, index) => <Wand wand={wand} key={index} />)

  return (
    <>
      <input
        type='text'
        placeholder='Search for a wand...'
        onChange={(event) => setQuery(event.target.value)}
      />
      <div className='wandWrapper'>{wandList}</div>
    </>
  )
}

export default Search
