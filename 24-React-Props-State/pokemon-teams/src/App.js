import React from 'react';

import './App.css';
import TrainersContainer from './TrainersContainer'


  const sampleData = [
    {
      "id": 1,
      "name": "Natalie",
      "pokemons": [
        {
          "id": 1,
          "species": "Hitmonlee",
          "nickname": "Wava",
          "trainer_id": 1
        },
        {
          "id": 2,
          "species": "Vileplume",
          "nickname": "Martha",
          "trainer_id": 1
        },
        {
          "id": 3,
          "species": "Dewgong",
          "nickname": "Gail",
          "trainer_id": 1
        }
      ]
    },
    {
      "id": 2,
      "name": "Prince",
      "pokemons": [
        {
          "id": 4,
          "species": "Onix",
          "nickname": "Jeanna",
          "trainer_id": 2
        },
        {
          "id": 6,
          "species": "Sandslash",
          "nickname": "Josiah",
          "trainer_id": 2
        },
        {
          "id": 7,
          "species": "Nidorina",
          "nickname": "Margert",
          "trainer_id": 2
        }
      ]
    }
  ]

class App extends React.Component {

  state = {
    trainers: []
  }

  componentDidMount(){
    fetch("http://localhost:3000/pokemons")
    .then(res => res.json())
    .then(trainers => {
      // this.state.trainers = trainers
      this.setState({ trainers }) 
    })
  }

  render(){
    return (
      <div className="App">
        <header>
          <h2>Pokemon Teams!</h2>
        </header>

        <TrainersContainer data={this.state.trainers} />
      </div>
    );
  }
}

export default App;
