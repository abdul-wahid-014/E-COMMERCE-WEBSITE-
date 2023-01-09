import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { removeCart, emptyCart } from '../redux/action/cartAction'
import Counter from './Counter';
const Cart = () => {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  let cartData = useSelector((state) => {
    return state.cartReducer
  })
  // console.log('cart ke under hoon mein', cartData)
  
  // const uniqueObjects = [...new Map(cartData.map(item => [item.id, item])).values()]
  

  return (
    <>
    <div className='mt-3 mb-3 ms-3 me-3'>
      <table className="table ">
        <thead className='text-center'>
          <tr>
          {cartData.length==0 ?null:<th scope="col"># ID</th>}
            <th scope="col">Image</th>
            <th scope="col">Title</th>
            <th scope="col">Counter</th>
            <th scope="col">Remove</th>
          </tr>
        </thead>
        <tbody className="table-group-divider text-center">
          {
            cartData.length==0 ? <tr><td className='text-center pt-5 pb-5' colSpan="4"><h2>Cart Is Empty</h2></td></tr>:
          cartData.map((item,index)=>
          <tr key={index} >
            <td scope="row" >{index+1}</td>
            <td ><img src={item.thumbnailUrl} alt=""width={'60px'}/> </td>
            <td >{item.title}</td>
            <td>{<Counter item={item} index={index}/>}</td>
            <td><button onClick={()=>dispatch(removeCart(index))} className='btn btn-danger'>Remove</button></td>
          </tr>) }
        </tbody>
      </table>
      <h3 className='text-center mt-5'>
        <button className='btn btn-danger' onClick={() => dispatch(emptyCart())}>Empty Cart</button>
      </h3>
    </div>

    <div className='text-center'>
    <button className='btn btn-primary me-2' onClick={()=>navigate('/signup')} >Signup</button>
    <button className='btn btn-primary' onClick={()=>navigate('/login')} >Login</button>
    </div>
    </>
    
  )
}

export default Cart
