import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  constructor() {
    super();
    this.state = {
      sushiData : [],
      sushiShow : [],
      sushiEaten : [],
      sushiBudget : 200,
    }
  }

  handlePurchase = (sushi) => {
    this.setState({
      ...this.state,
      sushiEaten : this.state.sushiEaten.concat([sushi]),
      sushiBudget : (this.state.sushiBudget - sushi.price),
    })
  }

  componentDidMount() {
    fetch(API)
      .then(resp => resp.json())
      .then(resp => {
        let randomIndex = Math.floor(Math.random() * resp.length - 4);
        this.setState({
          sushiShow : resp.slice(randomIndex, randomIndex+4)
        });
        this.setState({
          ...this.state,
          sushiData: resp
        })
      }
    );
  }

  showNewSushis = () => {
    let randomIndex = Math.floor(Math.random() * this.state.sushiData.length - 4);
    this.setState({
      sushiShow : this.state.sushiData.slice(randomIndex, randomIndex+4)
    });
  }

  render() {
    return (
      <div className="app">
        <SushiContainer eattenSushi={this.state.sushiEaten} sushiBudget={this.state.sushiBudget}  sushis={this.state.sushiShow} handlePurchase={this.handlePurchase} handleMoreSushis={this.showNewSushis}/>
        <Table sushiBudget={this.state.sushiBudget} eattenSushi={this.state.sushiEaten}/>
      </div>
    );
  }


}

export default App;
