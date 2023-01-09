import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addCart, removeCart } from '../redux/action/cartAction';
const Counter = (props) => {
  // console.log(props)
  let [counter, setCounter] = useState(1);
  let dispatch = useDispatch();
  let cartData = useSelector((state) => {
    return state.cartReducer
  })
  let increment = () => {
    setCounter(counter + 1)
    // dispatch(addCart(props.item))
  }
  let decrement = () => {
    (counter > 1) ? setCounter(counter-1) : setCounter(counter)
    // dispatch(removeCart(props.index))
  }

  return (
    <div>
      <button className='btn btn-primary ' onClick={decrement}>-</button>
      <span className='ms-3 me-3 '>{counter}</span>
      <button className='btn btn-primary ' onClick={increment}>+</button>
    </div>
  )
}

export default Counter
