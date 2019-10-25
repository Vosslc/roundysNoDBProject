import React, { Component } from 'react';
import Beer from './Beer.js'
import axios from 'axios'



class BeerWishList extends Component {
  constructor(){

    super()
    this.state = {
      wishList: []
    }

  }

  componentDidMount(){
    axios.get('/api/beer').then(result => {
      this.setState({
        wishList: result.data
      })
    })
  }

  render() {
    console.log(this.state)
    return (
      <div className='wishList'>
        {this.state.wishList.map(el =>(
          <div>
            <h1>Beer Wish List</h1>
            <p>Brewery: {el.brewery}</p>
            <p>Name: {el.name}</p>
            <p>Style: {el.style}</p>
            <p>ABV: {el.abv}%</p>
            <hr/>
            
            <hr/>
          </div>
        ))}
      </div>
    );
  }
}

export default BeerWishList;