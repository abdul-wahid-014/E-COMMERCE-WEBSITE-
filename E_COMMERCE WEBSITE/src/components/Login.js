import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../config/firebase';

const Login = () => {
    let [userdata,setUserData] = useState({});
    let navigate = useNavigate();
    console.log(userdata)

    function handleClick(){
        loginUser(userdata);
        if(userdata.email && userdata.password){
        navigate('/cart')
        }
        else{
            alert('please fill all field')
        }
    }

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                    <h2 className='text-center'>Login Screen</h2>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Email Address</label>
                            <input type="email" 
                            class="form-control" 
                            id="exampleFormControlInput1" 
                            placeholder="name@example.com" 
                            onChange={(event)=>setUserData({...userdata,email:event.target.value})}
                            required
                            />
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput2" class="form-label">Password</label>
                            <input type="password" class="form-control" id="exampleFormControlInput2" 
                            placeholder="name@example.com" 
                            onChange={(event)=>setUserData({...userdata,password:event.target.value})}
                            required
                            />
                        </div>
                        <button className='btn btn-primary' onClick={handleClick}>Submit</button>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
