import React, { Component } from 'react'

//Components 
import Navbar from './Navbar'
import Home from './Home'
import SearchContainer from './SearchContainer'

export default class App extends Component {

  state = {
    view: "Home"
  }

  changeToSearch = () => {
    this.setState({
      view: "Search Container"
    })
  }

  changeToHome = () => {
    this.setState({
      view: "Home"
    })
  }

  render(){
    return (
      <>     
        <Navbar changeToHome={this.changeToHome} />
        {  this.state.view === "Home" ? <Home changeToSearch={this.changeToSearch}/> : null }
        
        { this.state.view === "Search Container" ? <SearchContainer changeToHome={this.changeToHome}/> : null}
      </>
    )
  }

}


