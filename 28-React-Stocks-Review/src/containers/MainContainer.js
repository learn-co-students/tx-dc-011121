import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

const URL = "http://localhost:3002/stocks"

class MainContainer extends Component {

  state = {
    stocks: [],
    portfolio: [],
    sort: "",
    filter: "All"
  }

  componentDidMount(){
    fetch(URL)
      .then(r => r.json())
      .then(stocks => this.setState({stocks}))
  }

  addStock = (stock) => {
    if(!this.state.portfolio.includes(stock)){
        this.setState({portfolio: [...this.state.portfolio, stock]})
    }
  }

  removeStock = (stock) => {
    let newStocks = this.state.portfolio.filter(portStock => portStock !== stock )
    this.setState({portfolio: newStocks})
  }

  changeSort = sort => this.setState({sort})

  changeFilter = filter => this.setState({filter})


  displayStocks = () => {
    // Make a copy of the stocks in state
    let stocksToDisplay = [...this.state.stocks]

    // Check to see if the filter is "ALL"
    // If it isnt, THEN we need to run some filter
    if(this.state.filter !== "All"){
      stocksToDisplay = stocksToDisplay.filter(stock => stock.type === this.state.filter)
    }

    // Once the array is filtered
    // Check to see what to sort by, then sory by that
    if(this.state.sort === "Alphabetically"){
      return stocksToDisplay.sort((stock1, stock2) => stock1.name > stock2.name ? 1 : -1)
    } else if(this.state.sort === "Price") {
      return stocksToDisplay.sort((stock1, stock2) => stock1.price > stock2.price ? 1 : -1)
    } else {
      return stocksToDisplay
    }

  }


  render() {
    return (
      <div>
        <SearchBar changeSort={this.changeSort} sort={this.state.sort} changeFilter={this.changeFilter}/>

          <div className="row">
            <div className="col-8">

              <StockContainer addStock={this.addStock} stocks={this.displayStocks()}/>

            </div>
            <div className="col-4">

              <PortfolioContainer removeStock={this.removeStock} stocks={this.state.portfolio}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
