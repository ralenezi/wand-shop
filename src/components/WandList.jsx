import Wand from './Wand'
const WandList = ({ wands }) => {
  const wandList = wands.map((wand, index) => <Wand wand={wand} key={index} />)
  return <div className='wandWrapper'>{wandList}</div>
}

export default WandList
