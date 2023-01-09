import React from 'react'
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";


const Footer = () => {
    return (
        <div style={{backgroundColor:'black',color:'white'}}>
            <div className='container-fluid' >
                <div className="row mb-4" >
                    <div className="col-12 text-center "><h2>CONTACT US</h2></div>
                </div>

                <div className='row text-center d-flex justify-content-around mb-4' >
                    <div className="col-3" >
                        <div className="mb-3">
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Full Name" />
                        </div>
                        <div className="mb-3">
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Phone Number" />
                        </div>
                        <div className="mb-3">
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="E-mail address" />
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="mb-3">
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                            <button type="button" className="btn btn-danger">Sumbit</button>
                    </div>
                    <div className="col-4">
                        <h2>HEAD OFFICE</h2>
                        <h6>Plaza no 3, Phase 6 commercial dha, Lahore <br />
                            Building no 68, Shop no 1, bukhari commercial, <br />
                            dha, Karachi</h6>
                        <h6>PH: 042-111-FATIMA <br />
                            PH: 042-111-328462</h6>
                        <h6>Email: support@fatimameat.com</h6>
                    </div>
                </div>

                <div className="row " style={{backgroundColor:'black'}}>
                    <div className="col-10 " style={{color:'white'}}>
                        <h3>Copyright 2022 © DynamicSystem.org</h3>
                    </div>
                    <div className="col-2 d-flex" style={{color:'red'}}>
                        <h3 className='px-2'><BsFacebook /></h3>
                        <h3 className='px-2'><BsInstagram /></h3>
                        <h3 className='px-2'><BsTwitter /></h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
