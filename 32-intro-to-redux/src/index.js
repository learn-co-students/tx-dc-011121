import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import logo from "./logo.svg";
import "./App.css";

import { createStore } from 'redux';

const reducer = (state={ count: 10, name: 'Shivang' },action) => {
  switch (action.type) {
    case 'ADD':
      return {
        ...state,
        count: state.count + action.value
      }

    case 'MUL':
      return {
        ...state,
        count: state.count * action.value
      }

    case 'DIV':
      return {
        ...state,
        count: state.count / action.value
      }

    default:
      return state
  }
}

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

class App extends Component {

  componentDidMount(){
    store.subscribe(() => this.forceUpdate())
  }

  render(){
    return (
      <div className="App">
        <Header />
        <Counter />
      </div>
    );
  }
}

const renderDescription = () => {
  const remainder = store.getState().count % 5;
  const upToNext = 5 - remainder;
  return `The current count is less than ${store.getState().count + upToNext}`;
};

const Header = (props) => {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to React</h1>
      <h3> { renderDescription() } </h3>
    </header>
  );
}

const Counter = () => {
  return (
    <div className="Counter">
      <h1> { store.getState().count } </h1>
      <button onClick={ () => store.dispatch({ type: 'ADD', value: -1 }) }> - </button>
      <button onClick={ () => store.dispatch({ type: 'ADD', value: +1 }) }> + </button>
      <button onClick={ () => store.dispatch({ type: 'MUL', value: 5 }) }> *5 </button>
      <button onClick={ () => store.dispatch({ type: 'ADD', value: -3 }) }> -3 </button>

    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
