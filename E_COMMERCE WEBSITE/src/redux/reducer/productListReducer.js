
function productListReducer(state = [], action) {
  switch (action.type) {
    case 'SET_PRODUCT_LIST':
      return [...action.payload]
    default:
      return state
  }
}

export {productListReducer}