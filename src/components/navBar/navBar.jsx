import React, { Component } from 'react';
import './navBar.css';
import TiDownload from 'react-icons/lib/ti/download';
import FaListUl from 'react-icons/lib/fa/list-ul';

export default class NavBar extends Component{
    constructor(props){
        super(props);
        this.state = {
            displayFilter: false
        }
    }

    renderDisplay = () => {
        this.setState({
            displayFilter: true
        })
    }

    removeDisplay = () => {
        this.setState({
            displayFilter: false
        })
    }

    removeFilter = () => {
        return(
            <div className="container-fluid header-bar">
                <div className="brand-container header-attr">
                    <img className="brand" id="logo" src="/images/logo.png"/>
                    <div className="brand" id="company-name">OHI<br/>LIVE</div>
                </div>
                <div className="header-attr date-dropdown dropdown">
                    <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        October 2017
                    </button>
                    <div class="dropdown-menu date-dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <input type="date"/>
                    </div>
                </div>
                <div className="header-attr download text-center">
                    <TiDownload className="text-warning icon"/>
                </div>
                <div className="header-attr filter text-center" onClick={this.renderDisplay}>
                    <FaListUl className="text-warning icon"/>                
                </div>
            </div>
            )
    }

    renderFilter = () => {
        return(
            <div className="filter">
                <div className="headItems">
                    <div className="text-left head">Filter by</div>
                    <button className="btn head float-right" onClick={this.removeDisplay}>X</button>
                </div>
                <div className="filter-one">
                    <div>Business Unit</div>
                    <div class="btn-group">
                        <br/>
                        <button type="button" class="btn asd">All</button>
                        <button type="button" class="btn dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <span class="sr-only">Toggle Dropdown</span>
                        </button>
                        <div class="dropdown-menu">
                            <a class="dropdown-item" href="#">Action</a>
                            <a class="dropdown-item" href="#">Another action</a>
                            <a class="dropdown-item" href="#">Something else here</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#">Separated link</a>
                        </div>
                    </div>
                </div>
                <div className="filter-one">
                    <div>Region</div>
                    <div class="btn-group">
                        <br/>
                        <button type="button" class="btn asd">All</button>
                        <button type="button" class="btn dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <span class="sr-only">Toggle Dropdown</span>
                        </button>
                        <div class="dropdown-menu">
                            <a class="dropdown-item" href="#">Action</a>
                            <a class="dropdown-item" href="#">Another action</a>
                            <a class="dropdown-item" href="#">Something else here</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#">Separated link</a>
                        </div>
                    </div>
                </div>
                <div className="filter-one">
                    <div>Tenure</div>
                    <div class="btn-group">
                        <br/>
                        <button type="button" class="btn asd">All</button>
                        <button type="button" class="btn dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <span class="sr-only">Toggle Dropdown</span>
                        </button>
                        <div class="dropdown-menu">
                            <a class="dropdown-item" href="#">Action</a>
                            <a class="dropdown-item" href="#">Another action</a>
                            <a class="dropdown-item" href="#">Something else here</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#">Separated link</a>
                        </div>
                    </div>
                </div>
                <div className="filter-one">
                    <div>Age</div>
                    <div class="btn-group">
                        <br/>
                        <button type="button" class="btn asd">All</button>
                        <button type="button" class="btn dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <span class="sr-only">Toggle Dropdown</span>
                        </button>
                        <div class="dropdown-menu">
                            <a class="dropdown-item" href="#">Action</a>
                            <a class="dropdown-item" href="#">Another action</a>
                            <a class="dropdown-item" href="#">Something else here</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#">Separated link</a>
                        </div>
                    </div>
                </div>
                <div className="filter-one">
                    <div>Lorem Ipsum</div>
                    <div class="btn-group">
                        <br/>
                        <button type="button" class="btn asd">All</button>
                        <button type="button" class="btn dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <span class="sr-only">Toggle Dropdown</span>
                        </button>
                        <div class="dropdown-menu">
                            <a class="dropdown-item" href="#">Action</a>
                            <a class="dropdown-item" href="#">Another action</a>
                            <a class="dropdown-item" href="#">Something else here</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#">Separated link</a>
                        </div>
                    </div>
                </div>
                <div className="filter-footer">
                    <button className="btn btn-outline-warning btn-lg reset">Reset</button>
                    <button className="btn btn-warning btn-lg apply" onClick={this.removeDisplay}>Apply</button>
                </div>
            </div>
        )
    }

    render(){
        return(
            this.state.displayFilter==true ? this.renderFilter() : this.removeFilter()
        )
    }
}