import React from 'react'

class SushiWallet extends React.Component {

  state = {
    input:""
  }

  handleChange = (e) => {
    this.setState({
      input:e.target.value
    })
  }

  render() {
    return (
        <form onSubmit={(e) => {
          e.preventDefault()
          this.props.setBudget(this.state.input)}}>
          <input type="text" value={this.state.input} onChange={this.handleChange}/>
          <button type="submit">Increase sushi budget</button>
        </form>
      )
  }
}
export default SushiWallet
