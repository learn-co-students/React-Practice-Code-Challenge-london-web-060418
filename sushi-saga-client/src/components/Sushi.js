import React, { Fragment } from 'react'




class Sushi extends React.Component {

  state = {
    clicked: false
  }

  render(){
  return (
    <div className="sushi">
      <div className="plate"
           onClick={() => {
            this.setState( {
              clicked:true
            })
           }}>
        {
          this.state.clicked
          ?
            null
          :
            <img src={this.props.info.img_url} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {this.props.info.name} - ${this.props.info.price}
      </h4>
    </div>
  )
}
}


Sushi.defaultProps ={
  info : {
  "id": 1,
  "name": "Tako Supreme",
  "img_url": "https://sushistickers.com/img/sushi-slice_99.png",
  "price": 20,
  "created_at": "2018-07-27T18:53:16.241Z"
 }
}


export default Sushi
