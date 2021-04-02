import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

import { connect } from 'react-redux';

// Endpoint!
const API = 'http://localhost:3000/sushis';

class SushiContainer extends React.Component {

  componentDidMount() {
    fetch(API)
      .then(res => res.json())
      .then(sushis => this.props.get_sushi(sushis));
  }

  selectFourSushis = () => {
		return this.props.sushis.slice(this.props.index, this.props.index + 4);
	};

  render(){
    return (
      <Fragment>
        <div className="belt">
          {
            this.selectFourSushis().map(sushi => {
              return <Sushi key={sushi.id} sushi={sushi} />
            })
          }
          <MoreButton />
        </div>
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => {
	return {
		sushis: state.sushis,
		index: state.index
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		get_sushi: (sushis) => dispatch({ type: 'GET_SUSHI', sushis: sushis })
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(SushiContainer)
