import React, { Component } from 'react';
import './FooterJokes.css'
class FooterJokes extends Component {


  constructor(props) {
    super(props)

    this.state = { 
      joke: ''
    }

    this.handleJoke = this.handleJoke.bind(this);
  }

  handleJoke() {
    
    const randomNum = Math.ceil(Math.random() * 6)
    console.log(randomNum)
    if ( randomNum === 1 ) {
      this.setState({
        joke: "What is Beethoven's favorite fruit? Ba-na-na-nas."
      })
    }else if ( randomNum === 2 ) {
      this.setState({
        joke: "Why do seagulls live by the sea? Cause if they lived by the bay, they'd be bagels."
      })
    }else if ( randomNum === 3 ) {
      this.setState({
        joke: "A burger walks into a bar. The bartender says 'Sorry, we don't serve food here'"
      })
    }else if ( randomNum === 4 ) {
      this.setState({
        joke: "How do you find Will Smith in the snow? Look for fresh prints."
      })
    }else if ( randomNum === 5) {
      this.setState({
        joke: "I'm reading a book about anti-gravity. I can't put it down."
      })
    }else if ( randomNum === 6) {
      this.setState({
        joke: "My dolphin puns are terrible on porpoise."
      })
    }
    
  }

  render() {
    return (
      <div className="container">
        <p>Dad Jokes</p>
        <button onClick={this.handleJoke}>Click for Joke</button>
        <div className="jokeCon">
        <div>{this.state.joke}</div>
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