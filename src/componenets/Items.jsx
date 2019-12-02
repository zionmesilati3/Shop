import React, { Component } from 'react';

export default class Items extends Component {
    constructor(props) {
        super(props);

        console.log(this.props);
        this.state = {
            listI: this.props.idata
        };

        this.ItemsList = this.state.listI.map((item, index) =>
            this.props.addToItems(item, index)
        );
        /*this.setState((state,props)=>{
            return{listI:props.idata};
        });*/
    }

    


    render() {
        return (
            <div>
                <h1>Items List</h1>    
                {this.ItemsList}
            </div>
        );
    }

}