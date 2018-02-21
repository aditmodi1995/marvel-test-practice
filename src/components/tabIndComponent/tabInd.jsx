import React, { Component } from 'react';
import './tabInd.css';

export default class TabInd extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="container tabind text-center">
                <div className="row">
                    <div className="col one">
                        <div style={this.props.one}></div>
                    </div>
                    <div className="col two">
                        <div style={this.props.two}></div>
                    </div>
                    <div className="col three">
                        <div style={this.props.three}></div>
                    </div>
                </div>
            </div>
        )
    }
}