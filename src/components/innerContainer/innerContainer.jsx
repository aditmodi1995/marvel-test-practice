import React, { Component } from 'react';
import NavBar from '../navBar/navBar.jsx';
import Quartile from '../quartileComponent/quartile.jsx';
import Tab from '../tabComponent/tab.jsx';
import Content from '../contentComponent/content.jsx';
import TabInd from '../tabIndComponent/tabInd.jsx';

import './innerContainer.css';

export default class InnerCont extends Component{
    constructor(props){
        super(props);
        this.state = {
            displayOne: true,
            displayTwo: false,
            displayThree: false,
        }
    }

    clickedOne = () => {
        this.setState({
            displayOne: true,
            displayTwo: false,
            displayThree: false
        })
    }

    clickedTwo = () => {
        this.setState({
            displayOne: false,
            displayTwo: true,
            displayThree: false
        })
    }

    clickedThree = () => {
        this.setState({
            displayOne: false,
            displayTwo: false,
            displayThree: true
        })
    }


    render(){

        let blockStyle = {
            display: 'block',
            color: 'black'
        }

        let hideStyle = {
            display: 'none'
        }

        return(
            <div className="innerContainer">
                <NavBar/>
                <Quartile/>
                <Tab
                    clickedOne = {this.clickedOne}
                    clickedTwo = {this.clickedTwo}
                    clickedThree = {this.clickedThree}
                    one = {this.state.displayOne ? blockStyle: null}
                    two = {this.state.displayTwo ? blockStyle: null}
                    three = {this.state.displayThree ? blockStyle: null}
                />
                <TabInd
                    one = {this.state.displayOne ? blockStyle: hideStyle}
                    two = {this.state.displayTwo ? blockStyle: hideStyle}
                    three = {this.state.displayThree ? blockStyle: hideStyle}
                />
                <Content
                    displayOne = {this.state.displayOne}
                    displayTwo = {this.state.displayTwo}
                    displayThree = {this.state.displayThree}
                />
            </div>
        )
    }
}