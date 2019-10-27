import React, { Component } from 'react';
import Beer from './Beer.js'
import axios from 'axios'
import './BeerWishList.css'



class BeerWishList extends Component {
  constructor(){

    super()
    this.state = {
      wishList: [],
      brewery: '',
      name: '',
      style: '',
      abv: ''

    }

    this.handleChangeBeerValue = this.handleChangeBeerValue.bind( this );
  }

  componentDidMount(){
    axios.get('/api/beer').then(jsonBeerList => {
      this.setState({
        wishList: jsonBeerList.data
      })
    })
  }

  addBeer(){
    console.log("Button has been clicked ")
    const { brewery } = this.state;
    axios.post('/api/beer', {brewery}).then(jsonBeerList => {
      // this.setState({
      console.log(jsonBeerList)
      // })
    })
  }

  handleChangeBeerValue(event){
    this.setState({ brewery: event.target.value });

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
        {this.state.wishList.map((el, index) =>(
          <div className='beerInfo' key={index}>
            <p>Brewery: {el.brewery}</p>
            <p>Name: {el.name}</p>
            <p>Style: {el.style}</p>
            <p>ABV: {el.abv}%</p>
            <hr/>
            <br/>
          </div>
        ))}
        <div id="">
          
          <input placeholder="Brewery" 
          onChange={ this.handleChangeBeerValue }
          value={ this.state.brewery }
          />
          <input placeholder="Name" 
          onChange={ this.handleChangeBeerValue }
          value={ this.state.brewery }
          />
          <input placeholder="Style" 
          onChange={ this.handleChangeBeerValue }
          value={ this.state.brewery }
          />
          <input placeholder="ABV" 
          onChange={ this.handleChangeBeerValue }
          value={ this.state.brewery }
          />
          <button onClick={ (e) => {this.addBeer()}}>Add</button>
          {/* <button onClick={this.clicked}>Enter</button> */}

        </div>
        <br/> 
      </div>
    );
  }
}

export default BeerWishList;