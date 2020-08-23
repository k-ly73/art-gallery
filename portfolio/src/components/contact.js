import React, {Component} from "react";
import '../assets/css/form.css';
import ToolBar from './toolbar.js';
import MyForm from './form.js'
class ContactPage extends Component {
    render() {
        return (
            <div className = "page-wrapper bg-light-colors p-t-180">                     
                <ToolBar></ToolBar>     
                <div className = "container-fluid">
                    
                    <div className = "row">
                        <MyForm></MyForm>
                    </div>
                </div> 
            </div>

     
        )
    }
} 
export default ContactPage 