import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';
import { productList } from '../redux/action/index'


const Product = () => {
  
  useEffect(() => {
    dispatch(productList())
  }, [])
  let dispatch = useDispatch();
  
  let result = useSelector((state) => state.productListReducer)
  console.log(result)

  return (
    <>
      <div className="container-fluid d-flex flex-wrap justify-content-center">
        {
          result.map((item, index) => {
            return (
              <div key={index}>
                <div className="card mr-2 mb-4 ms-3 mt-3" style={{ width: '14rem' }}>
                <NavLink key={index} to={'/product/productdetail/'+(index+1)}>
                  <img src={item.url} className="card-img-top" alt="..." />
                  </NavLink>
                  <div className="card-body">
                    <p className="card-text">{item.title}</p>
                  </div>
                </div>
              </div>
            )
          }
          )
        }
      </div>



    </>
  )
}

export default Product
