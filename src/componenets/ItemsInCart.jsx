import React, { Component } from 'react';

export default class ItemsInCart extends Component {
    constructor(props) {
        super(props);

        console.log(this.props);
        this.state = {
            listI: this.props.idata
        };

        this.CartList = this.state.listI.map((item, index) =>
            this.props.addToItems(item, index)
        );
      /*  this.setState((state,props)=>{
            return{listI:props.idata};
        });*/
    }


    render() {
        return (
            <div>
                <h1>Cart List</h1>
                {this.CartList}
            </div>
        );
    }

}