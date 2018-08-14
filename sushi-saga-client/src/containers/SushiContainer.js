import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {

  const {sushis, handlePurchase, handleMoreSushis, eattenSushi, sushiBudget} = props

  const renderSushis = () => {
      return sushis.map(sushi => {
        return <Sushi data={sushi} handlePurchase={handlePurchase} eattenSushi={eattenSushi} budget={sushiBudget} />
      });
  }

  return (
    <Fragment>
      <div className="belt">
        {
          renderSushis()
        }
        <MoreButton handleMoreSushis={handleMoreSushis}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer
