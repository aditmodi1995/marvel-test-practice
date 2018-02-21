import React, { Component } from 'react';
import './tab.css';

export default class Tab extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="row tab text-center">
                <div className="col" id="one" onClick={this.props.clickedOne}>
                    <div style={this.props.one}><b>OVERVIEW</b></div>
                </div>
                <div className="col" id="two" onClick={this.props.clickedTwo}>
                    <div style={this.props.two}><b>TOP PRACTICES</b></div> 
                </div>
                <div className="col" id="three" onClick={this.props.clickedThree}>
                    <div style={this.props.three}><b>OUTCOME</b></div> 
                </div>
            </div>
        )
    }
}