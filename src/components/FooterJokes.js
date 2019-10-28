import React, { Component } from 'react';
import './FooterJokes.css'
class FooterJokes extends Component {


  constructor(props) {
    super(props)

    this.state = { 
      random: 0 
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const min = 1;
    const max = 100;
    const rand = min + Math.random() * (max - min);
    this.setState({ random: this.state.random + rand });
  }

  render() {
    return (
      <div className="container">
        <div className="jokeCon">
        <h1>Dad Jokes</h1>
        <button onClick={this.handleClick.bind(this)}>Click</button>
        <div>{this.state.random}</div>
        </div>
      </div>
    );
  }



  // render() {
  //   return (
  //     <div className="container">
  //       <h5>Footer.js</h5>
  //     </div>
  //   );
  // }
}

export default FooterJokes;