import React from 'react';
import './App.css';
import Header from './components/Header'
import BeerWishList from './components/BeerWishList'
import BeerConsumedList from './components/BeerConsumedList'
import FooterJokes from './components/FooterJokes'

function App() {
  return (
    <div className="App">
      
      <Header />
      <BeerWishList />
      <BeerConsumedList />
      <FooterJokes />
    </div>
  );
}

export default App;
