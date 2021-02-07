import React, {Component} from "react";
import '../assets/css/about.css';
import ToolBar from "./toolbar";


class AboutPage extends Component {
    render() {
        return (
            <div className = "App">
                <ToolBar/>
                <div className="container-fluid pd-t-100">
                    <div className="row text-center">
                        <div className= "col-12">
                            <h1 className="display-4">
                                Endless Collection
                            </h1>

                        </div>
                        <hr></hr>
                        <div className="col-12">
                            Welcome to PhotoBom
                        </div>
                        
                    </div>
                </div>
                <div className = "container-fluid pd-t-100">

                </div>
                
            </div>
        )
    }
} 
export default AboutPage