const sushiReducer = (state = {
  sushis: [],
  eaten: [],
  money: 100,
  index: 0
}, action) => {
  switch (action.type) {

    case 'GET_SUSHI':
      return {
        ...state,
        sushis: action.sushis
      }

    case 'EAT_SUSHI':
      const sushi = action.sushi

      if (!state.eaten.includes(sushi)) {
        if(state.money >= sushi.price){
          return {
            ...state,
            eaten: [...state.eaten, sushi],
            money: state.money - sushi.price
          };
        } else {
          alert('You cannot afford this sushi!')
        }
      }

    case 'MORE_SUSHI':
      let index = state.index + 4 >= state.sushis.length ? 0 : state.index + 4
      return {
        ...state,
        index: index
      }

    default:
      return state
  }
}

export default sushiReducer;
