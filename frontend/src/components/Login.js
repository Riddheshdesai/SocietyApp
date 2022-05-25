import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import login from "../Images/login.png";

export default function Login() {
    const history = useHistory();
    const [mobileNumber, setMobileNumber] = useState("");
    const [password, setPassword] = useState("");

    const loginUser = async (e) => {
        // e.preventDefault();
    
        try {
          if (!mobileNumber || !password) {
            return toast.error("All fields are mandatory", {
              position: toast.POSITION.TOP_CENTER,
              autoClose: 3000,
            });
          }
    
          await axios.post("/login", {
            mobile_number: mobileNumber,
            password,
          });
    
          await axios.post("/send/otp", {
            mobile_number: mobileNumber,
          });
    
          toast.success("OTP sended please check sms", {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 3000,
          });
    
          history.push({
            pathname: "/verify",
            state: { mobile_number: mobileNumber },
          });
        } catch (error) {
          return toast.error(error.response.data.message, {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 3000,
          });
        }
      };
  return (
    <div className="container-fluid p-0 auth-container">
    <div className="header-shape auth-header bg-primary">
        <div className="auth-tittle">
            <div className="row">
                <div className="col-5">
                <p className="mb-0 auth-tittle ">Simplify Entry </p> 
                </div>
                <div className="col-7">
                    <div className="auth-sunimage ">    
                        <img className="img-fluid" src={login} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="login-middle d-flex flex-column align-items-center justify-content-center">
            <div class="mb-4">
                <input placeholder="Mobile Number" type="tel" onChange={(e) => setMobileNumber(e.target.value)} class="form-control" id="username" />
            </div>
            <div class="mb-4">
                <input placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)} class="form-control" id="password" />
            </div>
    </div>
    <div className="auth-btn-con d-flex flex-column align-items-center justify-content-cente">
        <button  class="btn btn-primary auth-btn login-btn shadow-sm"  onClick={()=>loginUser()} type="button">Login</button>
    </div>
    <div className="authbottom-line my-4 ps-3">
        <a href="">Designed and developed by SimplifyTech.in</a>
    </div>
    </div>
  )
}
