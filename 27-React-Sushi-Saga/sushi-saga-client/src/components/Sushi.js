import React from 'react'

const Sushi = ({sushi, eat, eaten}) => {
  return (
    <div className="sushi">
      <div className="plate" 
           onClick={() => eat(sushi)}>
        { 
          eaten.includes(sushi) ?
            null
          :
            <img src={sushi.img_url} alt={sushi.name} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {sushi.name} - ${sushi.price}
      </h4>
    </div>
  )
}

export default Sushi