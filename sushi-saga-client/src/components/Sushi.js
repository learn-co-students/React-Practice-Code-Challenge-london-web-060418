import React, { Fragment } from 'react'

const Sushi = ({ sushi, eatSushi, eatenSushis }) => {
  return (
    <div className="sushi">
      <div className="plate" onClick={ () => eatSushi(sushi) }>

        { eatenSushis.includes(sushi) ?
            null
          :
            <img src={sushi.img_url} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {sushi.name} - ${sushi.price} ({sushi.id})
      </h4>
    </div>
  )
}

export default Sushi
