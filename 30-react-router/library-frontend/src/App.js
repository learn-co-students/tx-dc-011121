import React from 'react';

import Header from './components/Header';
import UserForm from './components/UserForm';
import SignUpForm from './components/SignUpForm';
import NewGame from './components/NewGame';

import GamesContainer from './containers/GamesContainer';

import { 
  BrowserRouter as Router, 
  Route, 
  Redirect,
  Switch
} from 'react-router-dom';

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

        <Router>
          <Switch>
            <Route path='/new'>
              {
                localStorage.getItem('auth_key') ? <NewGame addGame={this.addGame} /> : <Redirect to="/login" />
              }
            </Route>
            
            <Route exact path='/'>
              <GamesContainer games={this.state.games} deleteGame={this.deleteGame} />
            </Route>
            
            <Route path='/login'>
              <UserForm />
            </Route>

            <Route path='/signup'>
              <SignUpForm />
            </Route>

            <Route>
              <Redirect to='/' />
            </Route>
          </Switch>
        </Router>
        
      </div>
    );
  }
}

export default App;
