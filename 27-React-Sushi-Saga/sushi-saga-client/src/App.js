import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = 'http://localhost:3000/sushis';

class App extends Component {
	state = {
		sushis: [],
		index: 0,
		eaten: [],
    money: 100
	};

	componentDidMount() {
		fetch(API)
			.then(res => res.json())
			.then(sushis => this.setState({ sushis }));
	}

	selectFourSushis = () => {
		return this.state.sushis.slice(this.state.index, this.state.index + 4);
	};

	eat = sushi => {
		if (!this.state.eaten.includes(sushi)) {
      if(this.state.money >= sushi.price){
        this.setState({ eaten: [...this.state.eaten, sushi], money: this.state.money - sushi.price });
      } else {
        alert('You cannot afford this sushi!')
      }
		}
	};

  showMoreSushi = () => {
    let index = this.state.index + 4 >= this.state.sushis.length ? 0 : this.state.index + 4
    this.setState({index})
  }

  addMoney = e => {
    e.preventDefault()
    this.setState({money: this.state.money + parseInt(e.target[0].value, 10)})
    e.target.reset()
  }


	render() {
		return (
			<div className='app'>
        <form onSubmit={this.addMoney} >
          <input type='number' />
          <input type='submit' value='Add $ to SushiWallet' />
        </form>
				<SushiContainer
					sushis={this.selectFourSushis()}
					eat={this.eat}
					eaten={this.state.eaten}
					index={this.state.index}
					more={this.showMoreSushi}
				/>
				<Table money={this.state.money} eaten={this.state.eaten} />
			</div>
		);
	}
}

export default App;
