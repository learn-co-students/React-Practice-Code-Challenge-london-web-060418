import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
import SushiWallet from './components/SushiWallet';


// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    budget: 100,
    eaten: [],
    sushi:[]
  }

  setBudget = (input) => {
    console.log("budget", this.state.budget )
    console.log("input", input)

    this.setState({
      budget: this.state.budget + parseInt(input)
    })
  }

  randomSushi = (sushiArr) => {
    let rand = []
    let count = 0
    while(count < 4) {
      rand.push(sushiArr[Math.floor(Math.random()*sushiArr.length)])
      count++
    }
    return rand
  }

  getSushi = () => {
    fetch(API)
    .then(res => res.json())
    .then(sushi => {
      this.setState({
        sushi: this.randomSushi(sushi)
      })
    })
  }
  componentDidMount() {
    this.getSushi()
  }

  eatSushi = (sushiId, sushiPrice) => {
    console.log(this.state.eaten)
    let currentlyEaten = [...this.state.eaten]
    let budget;
    console.log(currentlyEaten)
    if (this.state.budget - sushiPrice < 0 || typeof this.state.budget ==="string"){
      budget="not enough"
    }

    if (currentlyEaten.includes(sushiId) == false && this.state.budget - sushiPrice > 0){
      currentlyEaten.push(sushiId)
      budget = this.state.budget - sushiPrice;
      this.setState({
        eaten: currentlyEaten
      })
    }

    if (this.state.budget - sushiPrice < 0 || typeof this.state.budget ==="string"){
      budget="not enough"
    }

    this.setState({
      budget: budget
    })
  }

  render() {
    return (
      <div className="app">
        <SushiContainer
          setEaten={this.setEaten}
          getSushi={this.getSushi}
          eatSushi={this.eatSushi}
          sushi={this.state.sushi}
          eaten={this.state.eaten}/>
        <SushiWallet setBudget={this.setBudget}/>
        <Table
          budget={this.state.budget}
          eaten={this.state.eaten}/>
      </div>
    );
  }
}

export default App;
