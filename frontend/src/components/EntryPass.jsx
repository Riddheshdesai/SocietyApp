import React from 'react'
import Mainimg from "../Images/mainSun.png";
import { Link,useLocation } from "react-router-dom";


export default function EntryPass() {
  const location = useLocation()

  return (
    <div className="container-fluid p-0 auth-container">
        <div className="pass-con" style={{height:"650px"}}>
            <div className="pass-image d-flex justify-content-center">
                <img className=""  style={{width:"200px"}}  src={Mainimg} alt="" />
            </div>
            <div className="pass-tittle d-flex justify-content-center">
              <h1>Warm welcome <br /> to Oberoi Esquire </h1>
            </div>
            <div className="auth-btn-con okay-btn d-flex flex-column btn-pass-con align-items-center justify-content-center">
            <Link to={{
                pathname: "/main", 
                state: { 
                    mobile_number: location.state.mobile_number
                }
            }}><button  class="btn btn-primary auth-btn login-btn shadow-sm pass-btn" type="button">Okay</button></Link>
            </div>
        </div>
    </div>
  )
}
