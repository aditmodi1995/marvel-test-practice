import React, { Component } from 'react';
import FaCaretUp from 'react-icons/lib/fa/caret-up';
import './one.css';

export default class TabOne extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="tab-one">
                <div className="one-one">
                    <div className="heading"><b>Your Organization health looks<br/>good this month!</b></div>
                    <div><h1 className="number"><b>78</b></h1><sup className="text-success"><FaCaretUp/>10%</sup></div>
                    <img src="/images/graph.png"/> 
                    <div className="below-image text-center">Double tap in the area to zoom in</div>
                </div>
                <div className="one-two">
                    <div className="heading"><b>Response Rate</b></div> 
                    <div><h5 className="number"><b>83%</b></h5><p className="text-secondary number"><small><small>2100 / 2500 respondants</small></small></p>  </div>
                </div>
            </div>
        )
    }
}