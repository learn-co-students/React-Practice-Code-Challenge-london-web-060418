import React from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

class SushiContainer extends React.Component {
  state = {
    sushis : [],
    buttonPresses :0
  }



  sushiRender = (a) => {
  console.log(this.props.sushis.slice(a,a+3))
  return this.props.sushis.slice(a,a+4).map( (x)=> <Sushi info= {x} clickedState = {false}   />)
  }

  increaseButtonCount = () => this.setState({ buttonPresses:
                                          (this.state.buttonPresses +1)  })


  render(){

  return (

    <React.Fragment>
      <div className="belt">


        {
          this.sushiRender(this.state.buttonPresses)
          /*
             Render Sushi components here!
          */
        }
        <MoreButton function={this.increaseButtonCount} />
      </div>
    </React.Fragment>)
  }
}

export default SushiContainer
