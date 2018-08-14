import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

const API = "http://localhost:3000/sushis"

class App extends Component {

  state={
    sushis: [],
    eatenSushis: [],
    startIndex: 0,
    money: 200,
  }

  fetchSushis= () => {
    fetch(API)
      .then(res => res.json())
      .then(sushis => this.setState({ sushis }))
  }

  componentDidMount() {
    this.fetchSushis()
  }

  eatSushi = (sushi) => {
    if (this.state.money < sushi.price) return   //returns here and does not run the rest of the func
      this.buySushi(sushi)
      this.setState({
        eatenSushis: [...this.state.eatenSushis, sushi]
    })
  }

  buySushi = (sushi) => {
    const newMoneyAmount = (this.state.money > sushi.price) ?
      (this.state.money - sushi.price) : this.state.money
    this.setState({
      money: newMoneyAmount
    })
  }

  incrementCount = () => {
    (this.state.startIndex >= 96) ?
    this.setState({ startIndex: 0 }) :
    this.setState({
      startIndex: this.state.startIndex+4
    })
  }

  render() {
    //const { sushis, eatenSushis} = this.state
    return (
      <div className="app">
        <SushiContainer sushis={this.state.sushis} eatSushi={this.eatSushi}
          eatenSushis={this.state.eatenSushis} incrementCount={this.incrementCount}
          startIndex={this.state.startIndex}
           />
         <Table eatenSushis={this.state.eatenSushis} money={this.state.money}/>
      </div>
    );
  }
}

export default App;
