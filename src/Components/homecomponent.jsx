import react, { Component } from 'react'
import './homecomponent.css'
import QUIZ from './quizcomponent';

class HOME extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <div className="home-container">
                <h2>Quiz App</h2>
                <button type="submit">Play</button>
            </div>
        );
    }
}
 
export default HOME ;