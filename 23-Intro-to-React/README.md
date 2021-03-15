# Intro To React

## Creating a React App

- `create-react-app <app_name>`
- `npm install`

## Challenges With Mod 3 Apps

- document.createElement, appendChild
  - manually manage and manipulate the DOM
- lots of functions and lots of data being passed around
- manually had to refresh page to test

## Node, Node Package Manager, package.json

## JSX and Babel

## Webpack and Modular JS

## Thinking in Components: class vs. functional

#### functional - shorter; more suscint
```js
const App = () => {
return (<div>JSX</div>)
}

function App(){
return (<div>JSX</div>)
}
```
#### class - extend React.Component; have state and lifecycle methods
```js
class App extends Component {
render(){
return (<div>JSX</div>)
}
}

class App extends React.Component {
render(){
return (<div>JSX</div>)
}
}
```
## Default exports and imports
