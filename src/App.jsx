import React from 'react';
import './App.css';
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
  function addToItems(item, index) {
    return (<Item id={item.id} name={item.name} image={item.image} price={item.price} key={index} addToCart={addToCart} />)
  }

  function addToCart() {
    console.log(this)
  }

  return (
    <div className="App">
      <header className="App-header">
        <Items idata={Wears} addToItems={addToItems} />
      </header>
    </div>
  );
}

export default App;
