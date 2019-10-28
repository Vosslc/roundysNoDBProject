import React, { Component } from 'react';
import Beer from './Beer.js'
import axios from 'axios'
import './BeerWishList.css'



class BeerWishList extends Component {
  constructor(props){

    super(props)
    this.state = {
      wishList: [],
      brewery: '',
      name: '',
      style: '',
      abv: '',

    }

    this.handleChangeBrewery = this.handleChangeBrewery.bind( this );
    this.handleChangeName = this.handleChangeName.bind( this );
    this.handleChangeStyle = this.handleChangeStyle.bind( this );
    this.handleChangeAbv = this.handleChangeAbv.bind( this );
    this.drinkBeer = this.drinkBeer.bind( this );
    this.deleteBeer = this.deleteBeer.bind( this );
  }
  
  
  // ****AXIOS SERVER CALLS****
  componentDidMount(){
    axios.get('/api/beer').then(response => {
      const wishList = response.data.filter(element => element.list === "beerWishList")
      this.setState({
        wishList: wishList
      })
    })
  }

  addBeer(){
    const { brewery, name, style, abv } = this.state;
    axios.post('/api/beer', {brewery, name, style, abv}).then(response => {
      const wishList = response.data.filter(element => element.list === "beerWishList")
      this.setState({
        wishList: wishList
      })
    })
  }

  drinkBeer(id, body){
    axios.put(`/api/beer/${id}`, body).then(response => { //${id} this is a FUCKING param
      console.log(response)
      const wishList = response.data.filter(element => element.list === "beerWishList")
      this.setState({
        wishList: wishList
      })
    })
    window.location.reload(true); //had to force refresh. Becuase beerConsumedList.js is not rendering when you drink the beer
    }

    deleteBeer(id) {
      axios
        .delete(`/api/beer/${id}`)
        .then(response => {
          console.log(response)
          const wishList = response.data.filter(element => element.list === "beerWishList")
          this.setState({
            wishList: wishList
          })
        })
    }

  // ****HANDLE CHANGE METHODS****

  // *****BREWERY
  handleChangeBrewery(event){
    this.setState({ brewery: event.target.value });
  }

  // *****NAME
  handleChangeName(event){
    this.setState({ name: event.target.value });
  }
  
  // *****STYLE
  handleChangeStyle(event){
    this.setState({ style: event.target.value });
  }
  // *****ABV
  handleChangeAbv(event){
    this.setState({ abv: event.target.value });
  }


// ********

  render() {
    return (
      <div className='wishList'>
        <header>
          <h1>Beer Wish List</h1>
        </header>

        <div id="inputField">
          <input placeholder="Brewery" 
          onChange={ this.handleChangeBrewery }
          value={ this.state.brewery }
          />
          <br/>
          <input placeholder="Name" 
          onChange={ this.handleChangeName }
          value={ this.state.name }
          />
          <br/>
          <input placeholder="Style" 
          onChange={ this.handleChangeStyle }
          value={ this.state.style }
          />
          <br/>
          <input placeholder="ABV" 
          onChange={ this.handleChangeAbv }
          value={ this.state.abv }
          />
          <br/>
          <button className="btn" onClick={ (e) => {this.addBeer()}}>Add</button>
          <br/>
          <br/>
          {this.state.wishList.map((el, index) =>(
            <Beer
              shouldShowDrinkBtn={true}    // <------ Beer is being imported from Beer.js this is how you start props
              drinkBeer={this.drinkBeer} //this is props. drinkBeer, is passing the function this.drinkBeer down to the child. Which is located in Beer.js file. 
              deleteBeer={this.deleteBeer}
              el={el} 
              index={index} 
            />
        ))}
        </div>
      </div>
    );
  }
}

export default BeerWishList;