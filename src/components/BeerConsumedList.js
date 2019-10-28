import React, { Component } from 'react';
import axios from 'axios'
import './BeerConsumedList.css'
import Beer from './Beer'

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
      const consumedList = response.data.filter(element => element.list === "beerConsumedList")
      this.setState({
        consumedList: consumedList
      })
    })
  }

  render() {
    return (
      <div className='consumedList'>
        <header>
          <h1>Beers Consumed List</h1>
        </header>
        <br/>
        {this.state.consumedList.map((el, index) =>(
          <Beer
            shouldShowDrinkBtn={false}
            el={el} 
            index={index} 
          />
        ))}
      </div>
    );
  }
}

export default BeerConsumedList;