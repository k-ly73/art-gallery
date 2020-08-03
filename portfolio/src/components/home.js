import React, {Component} from 'react';
import '../App.css';
import ToolBar from './toolbar.js';
import anime from "animejs";

class HomePage extends Component {
    
    animation() {
        
        anime.timeline({loop: true})
            .add({
                targets: '.header',
                opacity: [0, 1],
                translateX: [40, 0],
                translateZ: 0,              
                easing: "easeOutExpo",
                duration: 1400,
                delay:(el, i) => 300 + 30 * i
            })
            .add({
                targets: '.header',
                opacity: [1, 0],
                translateX: [0, -40],
                translateZ: 0,
                easing: "easeInExpo",
                duration: 1200,
                delay:(el, i) => 300 + 30 * i
            })

    }

    render() {
        return (
            <div className = "App">
                <div className = "bg-city">
                    <ToolBar></ToolBar>
                    <div className = "container-fluid">
                        
                        <div className = "row text-center text-white">
                            <div className = "col-md-12" style ={{marginTop: "100px"}}>
                                <h1 className = "header">
                                    <span className = "letters">A Life in the City</span>
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
