import React, { Component } from 'react';
import Beer from './Beer.js'
import axios from 'axios'
import './BeerWishList.css'



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
  clicked(){
    console.log("Button has been clicked")
  }
  handleChangeBeerValue(event){
    // this.state({
    
    // })
    console.log("hit1")
  }

  render() {
    console.log(this.state)
    return (
      <div className='wishList'>
        <header>
          <h1>Beer Wish List</h1>
        </header>
        <hr/>
        <hr/>
        {this.state.wishList.map(el =>(
          <div className='beerInfo'>
            <p>Brewery: {el.brewery}</p>
            <p>Name: {el.name}</p>
            <p>Style: {el.style}</p>
            <p>ABV: {el.abv}%</p>
            <hr/>
            <br/>
          </div>
        ))}
        <div id="">
          
          <input placeholder="New Craft Beer" 
          onChange={ this.handleChangeBeerValue }
          // onKeyPress={ this.createMessage }
          // value={ this.state.text }
          />
          <button onClick={this.clicked}>Enter</button>
        </div>
        <br/> 
      </div>
    );
  }
}

export default BeerWishList;