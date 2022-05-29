import axios from "axios";
import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import verify from "../Images/verify.png";


export default function Verify() {
    const history = useHistory();
    const location = useLocation();
    const [Otp, setOtp] = useState("");

    const verifyOtp = async () => {
        console.log("hah");
        try {
          if (!Otp) {
            return toast.error("please provide OTP code", {
              position: toast.POSITION.TOP_CENTER,
              autoClose: 3000,
            });
          }
    
          await axios.post("/verify/otp", {
            otp: Otp,
            mobile_number: location.state.mobile_number,
          });
    
          history.push({
            pathname: '/main',
            state: { mobile_number: location.state.mobile_number }
          })
        } catch (error) {
          return toast.error(error.response.data.message, {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 3000,
          });
        }
      };

      const resendOtp = async () => {
        toast.success("OTP resent please check sms", {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 3000,
          });
      };
  return (
    <div className="container-fluid p-0 auth-container">
    <div className="header-shape auth-header bg-primary">
        <div className="auth-tittle">
            <div className="row">
                <div className="col-5">
                <p className="mb-0 auth-tittle ">Mobile Varification</p> 
                </div>
                <div className="col-7">
                    <div className="auth-sunimage">    
                        <img className=""  style={{width:"96px",marginLeft:"30px"}}  src={verify} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="login-middle verify-middle d-flex flex-column align-items-center justify-content-center">
            <label  className="px-1 py-3" style={{fontSize:"16px" ,width:"302px", color:"#3B60E4", fontWeight:"600"}} htmlFor="varify">You will have received an OTP on your registered number</label>
            <div className="mb-3">
                <input placeholder="Varification Code" type="tel" onChange={(e) => setOtp(e.target.value)} className="form-control" />
            <label onClick={()=>resendOtp} className="px-1 ms-auto mt-2" style={{fontSize:"16px" ,width:"100%", color:"#3B60E4", fontWeight:"600",textAlign:"end"}} >Resend OTP</label>
            </div>
    </div>
    <div className="auth-btn-con d-flex flex-column align-items-center justify-content-cente">
        <button className="btn btn-primary auth-btn login-btn shadow-sm" onClick={()=>verifyOtp()} type="button">Submit</button>
    </div>
    </div>
  )
}
