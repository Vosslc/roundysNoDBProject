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

    this.handleChangeBrewery = this.handleChangeBrewery.bind( this );
    this.handleChangeName = this.handleChangeName.bind( this );
    this.handleChangeStyle = this.handleChangeStyle.bind( this );
    this.handleChangeAbv = this.handleChangeAbv.bind( this );
  }
  
  
  // ****AXIOS SERVER CALLS****
  componentDidMount(){
    axios.get('/api/beer').then(response => {
      this.setState({
        wishList: response.data
      })
    })
  }

  addBeer(){
    const { brewery, name, style, abv } = this.state;
    axios.post('/api/beer', {brewery, name, style, abv}).then(response => {
      this.setState({
        wishList: response.data
      })
    })
  }


  // ****HANDLE CHANGE METHODS****
  handleChangeBrewery(event){
    this.setState({ brewery: event.target.value });
  }
  handleChangeName(event){
    this.setState({ name: event.target.value });
  }
  handleChangeStyle(event){
    this.setState({ style: event.target.value });
  }
  handleChangeAbv(event){
    this.setState({ abv: event.target.value });
  }

// ********
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
            <br/>
            <br/>
          </div>
        ))}
        <div id="">
          
          <input placeholder="Brewery" 
          onChange={ this.handleChangeBrewery }
          value={ this.state.brewery }
          />
          <input placeholder="Name" 
          onChange={ this.handleChangeName }
          value={ this.state.name }
          />
          <input placeholder="Style" 
          onChange={ this.handleChangeStyle }
          value={ this.state.style }
          />
          <input placeholder="ABV" 
          onChange={ this.handleChangeAbv }
          value={ this.state.abv }
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