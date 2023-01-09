import { combineReducers } from 'redux'
import { productListReducer } from '../reducer/productListReducer'
import { cartReducer } from '../reducer/cartReducer'
const rootReducer =  combineReducers({
    productListReducer,cartReducer
})

export default rootReducer