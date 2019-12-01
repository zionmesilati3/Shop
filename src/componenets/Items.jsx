import React, { Component } from 'react';

export default class Items extends Component{
    constructor(props){
        super(props);
     
        console.log(this.props);
        this.state={
            listI:this.props.idata
        };

        this.ItemsList=this.state.listI.map((item,index)=>
            this.props.addToCart(item,index)
        );
    }


    render(){
        return(
            <div>
                {this.ItemsList}
            </div>
        );
    }
    
}