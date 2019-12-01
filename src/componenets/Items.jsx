import React, { Component } from 'react';
import Item from './Item'

export default class Items extends Component{
    constructor(props){
        super(props);
     
        this.state={
            listI:this.props.idata
        };

        this.ItemsList=this.listI.map((item,index)=>
            <Item id={item.id} name={item.name} image={item.image} price={item.price} key={index} />
        );
    }

    btnSendtoParent=()=>{
        this.props.sendData('7');
    }

    render(){
        return(
            <div>
                {this.ItemsList}
            </div>
        );
    }
    
}