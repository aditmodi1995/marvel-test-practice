import React, { Component } from 'react';
import './quartile.css';

export default class Quartile extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="row-fluid quartile text-secondary">
                <div className="col quartile-kid"><div class="one"></div>Top Quartile</div>
                <div className="col quartile-kid"><div class="two"></div>Quartile 2</div>
                <div className="col quartile-kid"><div class="three"></div>Quartile 3</div>
                <div className="col quartile-kid"><div class="four"></div>Bot Quartile</div>
            </div>           
        )
    }
}