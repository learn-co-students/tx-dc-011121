import React from 'react';

import Header from './components/Header';
import UserForm from './components/UserForm';
import NewGame from './components/NewGame';

import GamesContainer from './containers/GamesContainer';

const API = 'http://localhost:3000'
const GAMES = API + `/games`

class App extends React.Component {

  state = {
    games: []
  }

  componentDidMount(){
    fetch(GAMES)
    .then(res => res.json())
    .then(games => this.setState({ games }))
  }

  addGame = (gameObj) => {
    this.setState({ 
      games: [...this.state.games, gameObj]
    })
  }

  deleteGame = (gameId) => {
    const newGameList = [...this.state.games].filter(game => game.id !== gameId)
    
    fetch(GAMES+`/${gameId}`,{
      method: 'DELETE'
    })
    .then(res => res.json())
    .then(_ => this.setState({ games: newGameList }))
  }

  render(){
    return (
      <div className="App">
        <Header />
        <GamesContainer games={this.state.games} deleteGame={this.deleteGame} />
        <UserForm />
        <NewGame addGame={this.addGame} />
      </div>
    );
  }
}

export default App;
