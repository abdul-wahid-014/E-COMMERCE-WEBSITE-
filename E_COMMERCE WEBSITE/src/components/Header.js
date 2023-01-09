import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { logout } from '../config/firebase'
const Header = () => {
    let cartData = useSelector((state) => {
        return state.cartReducer
    })
    // console.log('header mein hai',cartData)
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item me-5">
                                <NavLink to='/home' className="nav-link active" aria-current="page" >Home</NavLink>
                            </li>
                            <li className="nav-item me-5">
                                <NavLink to='/product' className="nav-link" >Product</NavLink>
                            </li>
                            <li className="nav-item me-5">
                                <NavLink className="nav-link" to='/recipes'>Recipes</NavLink>
                            </li>
                            <li className="nav-item me-5">
                                <NavLink className="nav-link" to='/contactUs'>Contact Us</NavLink>
                            </li>
                            <li className="nav-item me-5">
                                <NavLink className="nav-link" to='/coorporate'>Coorporate Us</NavLink>
                            </li>
                            <li className="nav-item me-5">
                                <button className="btn btn-primary " onClick={logout}>Logout</button>
                            </li>
                            <li className="nav-item me-5">
                                <NavLink className="nav-link"to='/cart' ><button type="button" className="btn btn-primary position-relative" >
                                    Cart
                                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                        
                                        {cartData.length > 0 ? <span> {cartData.length} </span> : null }
                                    </span>
                                </button>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header
