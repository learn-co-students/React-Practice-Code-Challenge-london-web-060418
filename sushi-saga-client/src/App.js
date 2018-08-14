import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state={
    sushis: [],
  }

  fetchSushis = () => {
    fetch('http://localhost:3000/sushis')
      .then(res => res.json())
      .then(sushis => this.setState({
        sushis: sushis
      }))
 }

 componentDidMount() {
   this.fetchSushis()
 }

  render() {
    return (
      <div className="app">
        <SushiContainer  sushis={this.state.sushis} />
        <Table />
      </div>
    );
  }
}

export default App;
