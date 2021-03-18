import React, { Component } from 'react'

import TeamContainer from './TeamContainer'
import WizContainer from './WizContainer'

export default class GameContainer extends Component {

    state = {
        wizards: [],
        team: []
    }

    addToTeam = (id) => {
        if(!this.state.team.includes(id)){
            this.setState({team: [...this.state.team, id]})
        }
    }

    removeFromTeam = (id) => {

        this.setState({team: this.state.team.filter(wizId => wizId !== id )})

    }

    componentDidMount(){
        fetch("http://localhost:3001/wizards")
            .then(r => r.json())
            .then(wizards => this.setState({wizards}))
    }

    filteredTeam = () => this.state.team.map(wizId => this.state.wizards.find(wizard => wizard.id === wizId))
    
   
    render() {
        return (
            <>
              <TeamContainer removeFromTeam={this.removeFromTeam} wizards={this.filteredTeam()}  />
              <WizContainer addToTeam={this.addToTeam} wizards={this.state.wizards}/>  
            </>
        )
    }
}
