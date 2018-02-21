import React, { Component } from 'react';
import './two.css';

export default class TabTwo extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="tab-two">
                <div className="row">
                    <div className="col heading text-center"><b>Top Practices</b></div>
                    <div className="col">
                        <div class="dropdown">
                            <button class="btn btn-light dropdown-toggle text-info" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <b>Top numbers</b>
                            </button>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a class="dropdown-item" href="#">Action</a>
                                <a class="dropdown-item" href="#">Another action</a>
                                <a class="dropdown-item" href="#">Something else here</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="progress-text row">
                    <div className="oneline col-8">Personal ownership</div>
                    <div className="oneline col-4 text-right">98</div><br/>
                    <div className="bar">
                        <div className="bar-color" id="one-color"></div>
                    </div>
                </div>
                <div className="progress-text row">
                    <div className="oneline col-8">People perf. review.</div>
                    <div className="oneline col-4 text-right">93</div><br/>
                    <div className="bar">
                        <div className="bar-color" id="two-color"></div>
                    </div>
                </div>
                <div className="progress-text row">
                    <div className="oneline col-8">Talent Aquisition</div>
                    <div className="oneline col-4 text-right">89</div><br/>
                    <div className="bar">
                        <div className="bar-color" id="three-color"></div>
                    </div>
                </div>
                <div className="progress-text row">
                    <div className="oneline col-8">Supportive leadership</div>
                    <div className="oneline col-4 text-right">89</div><br/>
                    <div className="bar">
                        <div className="bar-color" id="four-color"></div>
                    </div>
                </div>
                <div className="progress-text row">
                    <div className="oneline col-8">Challenging leadership</div>
                    <div className="oneline col-4 text-right">87</div><br/>
                    <div className="bar">
                        <div className="bar-color" id="five-color"></div>
                    </div>
                </div>
            </div>
        )
    }
}