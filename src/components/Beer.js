import React, { Component } from 'react';
// import axios from 'axios'

class Beer extends Component {
  // constructor(){
  //   super()

  // }


  render() {
    console.log(this.props.el)
    // console.log(props.el)
    return (
      <div className='beerInfo' key={this.props.index}>
        
        {this.props.shouldShowDrinkBtn ? 
        <button onClick={() => this.props.drinkBeer(this.props.el.id, {list: "beerConsumedList"})}>
          Drink
        </button> : null}
         {/* the line above is using props. Its parent is BeerWishList */}
        <p>Brewery: {this.props.el.brewery}</p>
        <p>Name: {this.props.el.name}</p>
        <p>Style: {this.props.el.style}</p>
        <p>ABV: {this.props.el.abv}%</p>
        {this.props.shouldShowDrinkBtn ?
        <button onClick={() => this.props.deleteBeer(this.props.el.id)}>
          Delete
        </button> : null}
        <br/>
        <br/>
      </div>
    );
  }
}

export default Beer;
{/* {this.props.shouldShowDrinkBtn ?
<button onClick={this.props.deleteBeer(this.props.el.id, {list: "beerWishList"})}>
  Delete
</button> : null} */}