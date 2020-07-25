import React, {Component} from 'react';
import '../App.css';
import ToolBar from './toolbar.js';
class HomePage extends Component {
    render() {
        return (
            <div className = "App">
                <div className = "bg-city">
                    <div className = "container-fluid">
                        <ToolBar></ToolBar>
                        <div className = "row center text-white">
                            <div className = "col-md-12">
                                <div className = "header">A Life in the City</div>
                                <h3 style={{margin: "50px"}}>Creativity in the Gallery</h3>
                                <a href ="/portfolio" className = "btn btn-outline-light">View Album</a>
                            </div>
                        </div>
                    </div>
                    <div className = "container-fluid">
                        <div class = "row">

                        </div>
                    </div>
                </div>
            </div>
        );
    }
} 
export default HomePage
