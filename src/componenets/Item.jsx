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
                <p>{this.state.image}</p>
                <p>{this.state.price}</p>
            </div>
        );
    }
}