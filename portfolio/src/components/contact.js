import React, {Component} from "react";
import ToolBar from './toolbar.js';
import MyForm from './form.js'
class ContactPage extends Component {
    render() {
        return (
            <div className = "App">
                <div className = "bg-gray">
                    <ToolBar></ToolBar>
            
                    <div className = "container-fluid">
                        
                        <div className = "row center">
                            <div className = "col-sm-4">

                            </div>
                            <div className = "col-sm-4">
                                <MyForm>

                                </MyForm>
                            </div>
                            <div className = "col-sm-4">
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
} 
export default ContactPage 