function cartReducer(state = [], action) {
    switch (action.type) {

        case 'ADD_TO_CART':
            //   console.log('data reducer mein aagaya',state)
            return [...state, action.data]

        case 'REMOVE_TO_CART':
            console.log('REMOVE_TO_CART in reducer',action.index)
            state.splice(action.index,1)
            return [...state]

        case 'EMPTY_CART':
            return []
        default:
            return state
    }
}

export { cartReducer }