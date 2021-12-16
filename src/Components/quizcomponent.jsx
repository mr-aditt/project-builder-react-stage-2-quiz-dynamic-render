import React, { Component } from 'react'
import './quizcomponent.css'
import data from '../Resource/questions.json'

class QUIZ extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            show: true,
            currIndex: 0,
            QA: [...data]
        }
    }

    next_QA = (index) => {
        this.setState({currIndex: currIndex++});
    }

    prev_QA = (index) => {
        this.setState({currIndex: currIndex--});
    }

    quit_quiz = () => {
        // Turn display off
        this.setState({show:false})
    }

    render() {
        return (
            (this.state.show)? 
            <div className="quiz-container">
                <h2>Question</h2>
                <div className="question-space">
                    <span className="qno">4 of 15</span>
                    <span>Which is the only mammel which can't jump?</span>
                </div>
                <div className="options">
                    <button>Dog</button>
                    <button>Goat</button>
                    <button>Elephant</button>
                    <button>Lion</button>
                </div>
                <div className="btns" id="actions-btns">
                    <button id="acton-previous" onClick={this.prev_QA}>Previous</button>
                    <button id="acton-next" onClick={this.next_QA}>Next</button>
                    <button id="acton-quit" onClick={this.quit_quiz}>Quit</button>
                </div>
            </div>:null
        );
    }
}
 
export default QUIZ;