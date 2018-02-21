import React, { Component } from 'react';
import './content.css';
import TabOne from './content/one/one';
import TabTwo from './content/two/two';
import TabThree from './content/three/three';

export default class Content extends Component{
    constructor(props){
        super(props);
    }

    render(){
        if(this.props.displayOne == true){
            return(
                <div className="container content">
                    <TabOne/>
                </div>
            )
        }
        if(this.props.displayTwo == true){
            return(
                <div className="container content">
                    <TabTwo/>
                </div>
            )
        }
        if(this.props.displayThree == true){
            return(
                <div className="container content">
                    <TabThree/>
                </div>
            )
        }
    }
}