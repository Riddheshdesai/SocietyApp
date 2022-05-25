import React from 'react'
import Main from "../Images/mainSun.png";

export default function ExitPass() {
  return (
    <div className="container-fluid p-0 auth-container">
        <div className="pass-con" style={{height:"650px"}}>
            <div className="pass-image">
                <img className=""  style={{width:"200px"}}  src={Main} alt="" />
            </div>
            <div className="pass-tittle">
              <h1>Thank you <br /> for visiting <br /> Oberoi Esquire</h1>
            </div>
            <div className="auth-btn-con d-flex flex-column btn-pass-con align-items-center justify-content-center">
                <button  class="btn btn-primary auth-btn login-btn shadow-sm pass-btn" type="button">Okay</button>
            </div>
        </div>
    </div>
  )
}