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
  function addToCart(item,index){
    return (<Item id={item.id} name={item.name} image={item.image} price={item.price} key={index} />)
  }

  return (
    <div className="App">
      <header className="App-header">
        <Items idata={Wears} addToCart={addToCart} />
      </header>
    </div>
  );
}

export default App;
