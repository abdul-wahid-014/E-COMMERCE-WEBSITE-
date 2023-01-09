import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { extradata } from '../config/firebase';
const ExtraSignUp = () => {
    let [userdata,setUserData] = useState({});
    let navigate = useNavigate();
    console.log(userdata)
    function handleClick(){
        extradata(userdata)
        navigate('/login')
    }
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12 ">
                    <h2 className='text-center'>SignUp Screen</h2>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Name</label>
                            <input type="text" 
                            class="form-control" 
                            id="exampleFormControlInput1" 
                            placeholder="name" 
                            required
                            onChange={(event)=>setUserData({...userdata,name:event.target.value})}

                            />
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput2" class="form-label">Email Address</label>
                            <input type="email" 
                            class="form-control" 
                            id="exampleFormControlInput2" 
                            placeholder="name@example.com" 
                            onChange={(event)=>setUserData({...userdata,email:event.target.value})}
                            required
                            />
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput3" class="form-label">phone</label>
                            <input type="number" 
                            class="form-control" 
                            id="exampleFormControlInput3" 
                            placeholder="1234567890" 
                            onChange={(event)=>setUserData({...userdata,phone:event.target.value})}
                            required
                            />
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput4" class="form-label">age</label>
                            <input type="number" 
                            class="form-control" 
                            id="exampleFormControlInput5" 
                            placeholder="25" 
                            onChange={(event)=>setUserData({...userdata,age:event.target.value})}
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

export default ExtraSignUp
