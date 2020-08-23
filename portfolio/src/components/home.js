import React, {Component} from 'react';
import '../App.css';
import ToolBar from './toolbar.js';


class HomePage extends Component {
  
    render() {
        return (
            <div className = "App">
                <div className = "bg-city">
                    <ToolBar></ToolBar>
                    <div className = "container-fluid">  
                        <div className = "row">
                            <div className = "col-md-12" style ={{marginTop: "100px"}}>
                                <h1>
                                    A Life in the City
                                </h1>
                                <p style={{margin: "50px"}}>A Photography Album By Kevin</p>
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
