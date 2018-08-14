import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = ({ setEaten, getSushi, eaten, eatSushi, sushi }) => {
  const sushiList = sushi.map((s) =>
  <Sushi
    eaten={eaten}
    eatSushi={eatSushi}
    name={s.name}
    id={s.id}
    price={s.price}
    img_url={s.img_url}/>
  )

  return (
    <Fragment>
      <div className="belt">
        {
          sushiList
          /*
             Render Sushi components here!
          */
        }
        <MoreButton setEaten={setEaten} getSushi={getSushi}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer
