import React, { Component } from 'react'

//Components 
import Navbar from './Navbar'
import Home from './Home'
import SearchContainer from './SearchContainer'
import GameContainer from './GameContainer'

export default class App extends Component {

  state = {
    view: "Home"
  }

  changeToSearch = () => this.setState({view: "Search Container"
    })

  changeToHome = () => this.setState({view: "Home"})
  

  changeToGame = () => this.setState({view: "game"})

  render(){
    return (
      <>     
        <Navbar changeToHome={this.changeToHome} />
        {  this.state.view === "Home" ? <Home changeToGame={this.changeToGame} changeToSearch={this.changeToSearch}/> : null }
        
        { this.state.view === "Search Container" ? <SearchContainer />: null}

        { this.state.view === "game" ? <GameContainer />: null}
      </>
    )
  }

}


