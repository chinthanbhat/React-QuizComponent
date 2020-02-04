import React, { Component } from 'react'
import './App.css'
import Quiz from './Quiz.js'

let quizData = require('./quiz_data.json')

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showComponent: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      showComponent: true,
    });
  }

  render() {
    return (
      <div>
      <div className="QuizQuestion1">{quizData.quiz_questions[0].instruction_text}</div>
      <button onClick={this.handleClick}>Take a poll</button>
      {this.state.showComponent ?
           <Quiz /> :
           null
        }
      </div>
    )
  }
}

export default App
