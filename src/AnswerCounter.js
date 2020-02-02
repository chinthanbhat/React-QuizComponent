import React, { Component } from 'react';

class AnswerCounter extends Component {
  render() {
    return (
      <div className="AnswerCounter">
        <Counter />
      </div>
    );
  }
}

class Counter extends Component {
  state = {
    count: 0
  }

  handleClick = () => {
    this.setState((prevState, { count }) => ({
      count: prevState.count + 1
    }));
  };

  render() {
    return <button onClick={this.handleClick}>{this.state.count}</button>;
  }
}

export default AnswerCounter;
