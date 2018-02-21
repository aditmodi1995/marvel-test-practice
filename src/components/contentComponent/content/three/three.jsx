import React, { Component } from 'react';
import FaAngleRight from 'react-icons/lib/fa/angle-right';
import './three.css';

export default class TabThree extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="tab-three">
                <div className="row">
                    <div className="col heading text-center"><b>Overall Outcomes</b></div>
                    <div className="col">
                        <div class="dropdown">
                            <button class="btn btn-light dropdown-toggle text-info" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <b className="text-left">Fortnightly<br/>Comparison</b>
                            </button>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a class="dropdown-item" href="#">Action</a>
                                <a class="dropdown-item" href="#">Another action</a>
                                <a class="dropdown-item" href="#">Something else here</a>
                            </div>
                        </div>
                    </div>
                </div>
                <table className="table table-striped table-bordered table-sm">
                    <thead>
                        <tr>
                            <th colSpan={8}>Outcomes</th>
                            <th colSpan={4}>Differences</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td colSpan={8}>
                            <p className="each-item">
                                <a data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                                <div className="row">
                                    
                                    <div className="oneline col-8 text-left"><FaAngleRight/>          Direction</div>
                                        <div className="oneline col-4 text-right">98</div><br/>
                                        <div className="bar">
                                            <div className="bar-color" id="color-one"></div>
                                    </div>
                                </div>
                                </a>
                            </p>
                                <div class="collapse" id="collapseExample">
                                    <div class="card card-body">
                                        <div className="collapseContent text-secondary text-left"><b>Top Drivers - Practices</b></div>
                                        <div className="row">
                                            <div className="oneline col-6 text-left">Shared Vision</div>
                                                <div className="oneline col-3 text-right">98</div><br/>
                                                <div className="oneline col-3 text-right text-success">+6</div>
                                                <div className="collapse-bar">
                                                    <div className="bar-color" id="collapse-one"></div>
                                                </div>
                                        </div>
                                        <div className="row">
                                            <div className="oneline col-6 text-left">Strategic clarity</div>
                                                <div className="oneline col-3 text-right">87</div><br/>
                                                <div className="oneline col-3 text-right text-success">+3</div>
                                                <div className="collapse-bar">
                                                    <div className="bar-color" id="collapse-two"></div>
                                                </div>
                                        </div>
                                        <div className="row">
                                            <div className="oneline col-6 text-left">Employee involvement</div>
                                                <div className="oneline col-3 text-right">45</div><br/>
                                                <div className="oneline col-3 text-right text-danger">-3</div>
                                                <div className="collapse-bar">
                                                    <div className="bar-color" id="collapse-three"></div>
                                                </div>
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td colSpan={4} className="text-success oneline">+6</td>
                        </tr>
                        <tr>
                            <td colSpan={8}>
                            <p className="each-item">
                                <div className="row">
                                    <div className="oneline col-8 text-left"><FaAngleRight/>          Leadership</div>
                                        <div className="oneline col-4 text-right">65</div><br/>
                                        <div className="bar">
                                            <div className="bar-color" id="color-two"></div>
                                    </div>
                                </div>
                            </p>
                            </td>
                            <td colSpan={4} className="text-danger oneline">-5</td>
                        </tr>
                        <tr>
                            <td colSpan={8}>
                            <p className="each-item">
                                <div className="row">
                                    <div className="oneline col-8 text-left"><FaAngleRight/>          Work Environment</div>
                                        <div className="oneline col-4 text-right">68</div><br/>
                                        <div className="bar">
                                            <div className="bar-color" id="color-three"></div>
                                    </div>
                                </div>
                            </p>
                            </td>
                            <td colSpan={4} className="text-danger oneline">+5</td>
                        </tr>
                        <tr>
                            <td colSpan={8}>
                            <p className="each-item">
                                <div className="row">
                                    <div className="oneline col-8 text-left"><FaAngleRight/>          Accountability</div>
                                        <div className="oneline col-4 text-right">20</div><br/>
                                        <div className="bar">
                                            <div className="bar-color" id="color-four"></div>
                                    </div>
                                </div>
                            </p>
                            </td>
                            <td colSpan={4} className="text-danger oneline">+6</td>
                        </tr>
                        <tr>
                            <td colSpan={8}>
                            <p className="each-item">
                                <div className="row">
                                    <div className="oneline col-8 text-left"><FaAngleRight/>          Coordination</div>
                                        <div className="oneline col-4 text-right">59</div><br/>
                                        <div className="bar">
                                            <div className="bar-color" id="color-five"></div>
                                    </div>
                                </div>
                            </p>
                            </td>
                            <td colSpan={4} className="text-danger oneline">-5</td>
                        </tr>
                        <tr>
                            <td colSpan={8}>
                            <p className="each-item">
                                <div className="row">
                                    <div className="oneline col-8 text-left"><FaAngleRight/>          Capabilities</div>
                                        <div className="oneline col-4 text-right">25</div><br/>
                                        <div className="bar">
                                            <div className="bar-color" id="color-six"></div>
                                    </div>
                                </div>
                            </p>
                            </td>
                            <td colSpan={4} className="text-danger oneline">+5</td>
                        </tr>                    
                    </tbody>
                </table>
            </div>
        )
    }
}