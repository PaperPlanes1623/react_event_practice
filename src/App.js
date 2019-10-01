import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Validation from './components/Validation';
import Char from './components/Char';

class App extends Component {
  state = {
    userInput: ''
  }

  inputChangedHandler = (e) => {
    this.setState({ userInput: e.target.value });
  }

  deleteChar = (index) => {
    const text = this.state.userInput.split('');
    text.splice(index, 1);
    const updatedText = text.join('');
    this.setState({ userInput: updatedText });
  }

  render() {
    const charList = this.state.userInput.split('').map((ch, index) => {
      return <Char character={ch} key={index}
        clicked={() => this.deleteChar(index)} />
    });

    return (
      <div>
        <hr />
        <input type="text" onChange={this.inputChangedHandler} value={this.state.userInput} />
        <p>{this.state.userInput}</p>
        <Validation inputLength={this.state.userInput.length} />
        {charList}
      </div>
    )
  }
}

export default App;
