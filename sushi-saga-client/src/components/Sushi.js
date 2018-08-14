import React, { Component, Fragment } from 'react'


class Sushi extends Component {

  constructor(props) {
    super(props);
  }

  handleClick = (event) => {
    if(this.props.budget >= this.props.data.price) {
      this.props.handlePurchase(this.props.data);
    }
  }

  checkEatten = () => {
    if(!this.props.eattenSushi.includes(this.props.data)) {
      return <img src={this.props.data.img_url} width="100%" />
    }
  }


  render() {

    return (
      <div className="sushi">
        <div className="plate"
             onClick={this.handleClick}>
          {
            this.checkEatten()
          }
        </div>
        <h4 className="sushi-details">
          {this.props.data.name} - ${this.props.data.price}
        </h4>
      </div>
    )
  }
}

export default Sushi
