import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          {this.props.stocks.map(stock => <Stock clickAction={this.props.removeStock} key={stock.id} stock={stock}/>)}
      </div>
    );
  }

}

export default PortfolioContainer;
