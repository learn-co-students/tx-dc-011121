import React, { Fragment } from 'react'

const Table = ({money, eaten}) => {

  const renderPlates = (array) => {
    return array.map((x, index) => {
      console.log(x)
      return <div key={x.id} className="empty-plate" style={{ top: -7 * index }}/>
    })
  }

  return (
    <Fragment>
      <h1 className="remaining">
        You have: ${ money } remaining!
      </h1>
      <div className="table">
        <div className="stack">
          {
            /* 
               renderPlates takes an array 
               and renders an empty plate
               for every element in the array
            */
            renderPlates(eaten)
          }
        </div>
      </div>
    </Fragment>
  )
}

export default Table