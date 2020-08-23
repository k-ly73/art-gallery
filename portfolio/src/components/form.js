import React from 'react';
import 'purecss/build/pure.css';
import '../assets/css/form.css';

export default class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this);
        this.state = {
            status: ""
        };
    }
    render() {
        const { status } = this.state;
        return (
            <div className = "wrapper wrapper-w960 center">
                
                <div className = "form-card mb-3">
                    <div className = "row no-gutters">
                                          
                        <div>
                            <h2 className = "card-title header">Contact</h2>
                                                  
                        
                            <p>Feel free to send me a message below!</p>
                                                
                            <form 
                                onSubmit={this.submitForm}
                                action="https://formspree.io/xwkrjqdy"
                                method="POST"
                                id = "contact"
                            >
                                <div className = "input-group">
                                    <input className = "input--style-2" name="name" type="text" placeholder = "Name" required/>
                                </div>

                                <div className = "input-group">
                                    <input name="email" type="email" placeholder = "Email" required/>
                                </div>

                                <div className = "input-group">
                            
                                    <textarea type = "text" name="message" placeholder = "Message" required>
                                    </textarea>
                                </div>
                                    
                                    
                                
                                    
                                    {status === "SUCCESS" ? <p>Thank you for sending a message, I'll get back to you ASAP!</p> : <button class = "submit pure-button pure-button-primary round-input">Send</button>}
                                    {status === "ERROR" && <p>Oops! Try again!</p>}
                            
                            </form>
                        </div>

                      
                        
                      

                    </div>

                    
                </div>
            </div>
                     
        );
    }


    submitForm(ev) {
        ev.preventDefault();
        const form = ev.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
            if(xhr.readyState !== XMLHttpRequest.DONE) return;
            if(xhr.status === 200) {
                form.reset();
                this.setState({ status: "SUCCESS"});
            }
            else {
                this.setState({ status:"ERROR" });
            }
        };
        xhr.send(data);
    }
}