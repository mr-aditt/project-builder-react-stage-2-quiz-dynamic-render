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

    next_QA = () => {
        (this.state.currIndex===11)?this.setState({currIndex:this.state.QA.length-1}):this.setState({currIndex: this.state.currIndex+1});
        console.log(this.state.currIndex);
    }

    prev_QA = () => {
        (this.state.currIndex>0)?this.setState({currIndex: this.state.currIndex-1}):this.setState({currIndex:0});
        console.log(this.state.currIndex);
    }

    quit_quiz = () => {
        // Turn display off
        this.setState({show:false})
    }

    render() {
        console.log(this.state.QA.length);
        return (
            (this.state.show)? 
            <div className="quiz-container">
                <h2>Question</h2>
                <div className="question-space">
                    <span className="qno">{this.state.currIndex+1} of {this.state.QA.length}</span>
                    <span>{this.state.QA[this.state.currIndex].question}</span>
                </div>
                <div className="options">
                    <button>{this.state.QA[this.state.currIndex].optionA}</button>
                    <button>{this.state.QA[this.state.currIndex].optionB}</button>
                    <button>{this.state.QA[this.state.currIndex].optionC}</button>
                    <button>{this.state.QA[this.state.currIndex].optionD}</button>
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