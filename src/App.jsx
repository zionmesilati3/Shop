import React from 'react';
import './App.css';
//import Items from './componenets/Items.jsx';
//import ItemsInCart from './componenets/ItemsInCart.jsx';
import Item from './componenets/Item';
import Items from './componenets/Items';
import Wears from './assets/Wears';

function App() {
/*
  function DataFromItems(data) {
    alert("hello from Items:" + data);
  }
  
  function DataFromCart(data){
    alert("hello from ItemsInCart:"+data);
  }
  */


  return (
    <div className="App">
      <header className="App-header">
        <Item />
        <Items idata={Wears} />
      </header>
    </div>
  );
}

export default App;
