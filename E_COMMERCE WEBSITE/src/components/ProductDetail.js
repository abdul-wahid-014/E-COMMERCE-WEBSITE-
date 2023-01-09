import React, { useEffect } from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom'
import {addCart} from '../redux/action/cartAction'

const ProductDetail = () => {
  let [productdetailpage,setProductDetailPage] = useState([]);
  let dispatch = useDispatch();
  let params =useParams();
  async function details(){
    try{
      let response = await fetch('https://jsonplaceholder.typicode.com/photos?id='+params.id);
      let data = await response.json()
      setProductDetailPage(data)
    }
    catch(e){
      console.log(e)
    }
  }
  useEffect(()=>{
    details()
  },[])
  // console.log('productdetailpage',productdetailpage)
  // console.log('params.id',params.id)

  
    
  return (
    <>
     {
      productdetailpage.map((item,index)=><div className="container mb-5 mt-5" key={index}>
      
      <div className="row">
        <div className="col text-center mb-4" style={{border:'1px solid red'}}>
          <h4>{item.id} ) {item.title} </h4>
        </div>
      </div>

      <div className="row">
        <div className="col-6">
        <h5 style={{border:'1px solid red'}} className='text-center'>Image</h5> 
        <img src={item.url} alt="images"  width={'100%'} height={'60%'} className='mb-3' style={{border:'2px solid black'}}/>
        <h1 className='text-center'>
        <img src={item.thumbnailUrl} alt="images"  width={'23%'} style={{border:'2px solid black'}} className='ms-1'/>
        <img src={item.thumbnailUrl} alt="images"  width={'23%'} style={{border:'2px solid black'}} className='ms-1'/>
        <img src={item.thumbnailUrl} alt="images"  width={'23%'} style={{border:'2px solid black'}} className='ms-1'/>
        <img src={item.thumbnailUrl} alt="images"  width={'23%'} style={{border:'2px solid black'}} className='ms-1'/>
        </h1>
        </div>
        <div className="col-6">
        <h5 style={{border:'1px solid red'}} className='text-center'>About Product </h5>
        <p style={{border:'1px solid red'}} className='text-center'>{item.title} </p>
        <h1 className='text-center'><button className='btn btn-danger' onClick={()=>dispatch(addCart(item))}>ADD TO CART</button></h1>
        </div>
      </div>
      
      </div> )
     }
    </>
  )
}

export default ProductDetail
