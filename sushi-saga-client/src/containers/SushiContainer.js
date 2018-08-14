import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

class SushiContainer extends React.Component {

  // state={
  //   num1: 0,
  //   num2: 4
  // }
  //
  // get4sushis = (num1, num2) => {
  //   this.props.sushis.slice(num1, num2)
  // }

  render() {
    return (
      <Fragment>
        <div className="belt">
          {
            this.props.sushis.slice(0,4).map(sushi => < Sushi sushi={sushi} />)
          }
          <MoreButton />
        </div>
      </Fragment>
    )
  }
}

export default SushiContainer
