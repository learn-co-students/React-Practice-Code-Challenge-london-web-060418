import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = ({sushis, eatSushi, eatenSushis, incrementCount, startIndex}) => {

  const sushiElements = sushis.slice(startIndex, startIndex+4).map(sushi =>
    < Sushi sushi={sushi} eatSushi={eatSushi} eatenSushis={eatenSushis} />)

  return (
    <Fragment>
      <div className="belt">
        {
          sushiElements
        }
        <MoreButton handleClick={incrementCount}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer
