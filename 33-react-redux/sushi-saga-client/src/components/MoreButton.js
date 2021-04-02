import React from 'react'
import { connect } from 'react-redux';

const MoreButton = ({ more_sushi }) => {
    return <button onClick={more_sushi}>
            More sushi!
          </button>
}

const mapDispatchToProps = (dispatch) => {
  return {
    more_sushi: () => dispatch({ type: 'MORE_SUSHI' })
  }
}

export default connect(null,mapDispatchToProps)(MoreButton)
