import React, { Component } from 'react';
import InnerCont from '../innerContainer/innerContainer.jsx';
import './outerContainer.css'

export default class OuterCont extends Component{
    constructor(props){
        super(props);
    }

    render(){

        return(
            <div className="container-fluid outerContainer h-100">
                <InnerCont/>
            </div>
        )
    }
}