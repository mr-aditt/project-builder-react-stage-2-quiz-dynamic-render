import React, { Component } from 'react'
import './resultcomponent.css'
import tick from './Assets/tick.png'

class RESULT extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <div className="container">
                <div>
                    <img src= {tick} alt="Tick"/>
                    <h1>Result</h1>
                </div>
                <div className="card">
                    <span>You need more practice!</span>
                    <span>Your score: 20%</span>
                    <div className="list">
                        <span>Total number of questions:</span><span>15</span>
                        <span>Number of attempted questions:</span><span>9</span>
                        <span>Number of Correct Answers</span><span>3</span>
                        <span>Number of Wrong Answers</span><span>6</span>
                    </div>
                </div>
                <div className="btns">
                    <button>Play Again</button>
                    <button>Back to Home</button>
                </div>
            </div>
        );
    }
}
 
export default RESULT;