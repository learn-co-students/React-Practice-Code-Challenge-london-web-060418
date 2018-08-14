import React, { Fragment } from 'react'

const Sushi = ({ eaten, eatSushi,name, id , price, img_url}) => {
    console.log(eaten)
  return (
    <div className="sushi">
      <div className="plate"
           onClick={() => {eatSushi(id, price)}}>
        {
          eaten.includes(id)?
            null
          :
            <img src={img_url} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        { name } - ${price}
      </h4>
    </div>
  )
}

export default Sushi
