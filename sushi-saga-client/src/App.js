import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    allSushis: [],
    sushis: [],
    balance: 100
  }

  componentDidMount(){
    fetch('http://localhost:3000/sushis')
      .then(res => res.json())
      .then(res => this.setState({
        allSushis: res,
        sushis: res.slice(1, 5)
      })
    )
  }

  eatSushi = sushiToDelete => {
    const balance = this.state.balance - sushiToDelete.price
    const sushis = this.state.sushis.filter(sushi => sushi !== sushiToDelete)
    this.setState({
      sushis: sushis,
      balance: balance
    })
  }

  moreSushi = () => {
    const actualSushis = [...this.state.sushis]
    const diff = 4 - actualSushis.length
    const newSushis = this.state.allSushis.slice(4, diff+4)
    if (actualSushis.length < 4) {
      this.setState({
        sushis: actualSushis.concat(newSushis)
      })
    }
  }

  render() {
    return (
      <div className="app">
        <SushiContainer
          sushis={this.state.sushis}
          eatSushi={this.eatSushi}
          moreSushi={this.moreSushi}
          state={this.state.sushis}
        />
        <Table balance={this.state.balance} />
      </div>
    );
  }
}

export default App;
