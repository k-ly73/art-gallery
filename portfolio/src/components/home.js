import React, {Component} from 'react';
import { Media } from 'reactstrap';


class HomePage extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className = "half-black">
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
} export default HomePage
