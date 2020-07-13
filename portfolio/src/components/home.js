import React, {Component} from 'react';
import '../App.css';

class HomePage extends Component {
    render() {
        return (
            <div className = "App">
                <div className = "bg-city">
                    <div className = "container">
                        <div className = "row center text-white" style={{marginTop: "100px"}}>
                            <div className = "col-md-12">
                                <div className = "header">A Life in the City</div>
                                <a href ="/portfolio" className = "btn btn-outline-light">View Gallery</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
} 
export default HomePage