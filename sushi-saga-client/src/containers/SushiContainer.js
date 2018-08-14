import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'

const SushiContainer = ({ sushis }) => {
  console.log(sushis[0])
  //map over each sushi slice(0, 4) and render
  return (
    <div className="belt">
        sushis.map(sushi => {
        return (<div className ="sushi">
            <h5>{sushi.name} - ${sushi.price}</h5>
          </div>
        )})
        <MoreButton />
      </div>
  )
}

export default SushiContainer
