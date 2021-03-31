import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <Counter />
      </div>
    );
  }
}


const Header = () => {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to React</h1>
    </header>
  );
}

class Counter extends Component {

  state = {
    count: 0
  }

  changeVal = (val) => {
    this.setState({
      count: this.state.count + val
    })
  }

  renderDescription = () => {
    const remainder = this.state.count % 5;
    const upToNext = 5 - remainder;
    return `The current count is less than ${this.state.count + upToNext}`;
  };

  render(){
    return (
      <div className="Counter">
        <h3> { this.renderDescription() } </h3>
        <h1> { this.state.count} </h1>
        <button onClick={ () => this.changeVal(-1) }> - </button>
        <button onClick={ () => this.changeVal(+1) }> + </button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
