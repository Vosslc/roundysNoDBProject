import React, { Component } from 'react';
import axios from 'axios'
import './BeerConsumedList.css'

class BeerConsumedList extends Component {
  constructor(){
    super()
    this.state = {
      consumedList: []
    }
  }

  // ****AXIOS SERVER CALLS****
  componentDidMount(){
    axios.get('/api/beer').then(response => {
      this.setState({
        consumedList: response.data
      })
    })
  }

  render() {
    return (
      <div className='consumedList'>
        <header>
          <h1>Beers Consumed List</h1>
        </header>
        <hr/>
        <hr/>
        {this.state.consumedList.map((el, index) =>(
          <div className='beerInfo' key={index}>
            <p>Brewery: {el.brewery}</p>
            <p>Name: {el.name}</p>
            <p>Style: {el.style}</p>
            <p>ABV: {el.abv}%</p>
            <br/>
          </div>
        ))}
      </div>
    );
  }
}

export default BeerConsumedList;