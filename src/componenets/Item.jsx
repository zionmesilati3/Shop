import React, { Component } from 'react';

export default class Item extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: props.id,
            name: props.name,
            price: props.price,
            image: props.image
        };
    }

    render() {
        return (
            <div>
                <h3>Item Card</h3>
                <h5>{this.state.name}</h5>
                <img src={this.state.image} alt="img" height='200px' width='150px' />
                <p>{this.state.price}</p>
                <button onClick={() => this.props.addToCart()}>add to Cart</button>
            </div>
        );
    }
}