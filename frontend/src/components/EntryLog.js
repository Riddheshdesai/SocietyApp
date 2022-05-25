import React from "react";
import { Link } from "react-router-dom";
import Main from "../Images/mainSun.png";
import Entry from "../Images/LogEntry.png";
import business from "../Images/business.png";

export default function Login() {
  return (
    <div className="container-fluid p-0 auth-container">
    <div className="header-shape auth-header bg-primary"  style={{width:"100%"}}>
        <div className="auth-tittle ps-0">
            <div className="row">
                <div className="col-6">
                    <div className="entry-log-header d-flex mt-4 ms-4">
                    <Link to="/main"><img className="" style={{width:"42px"}}  src={Entry} alt="" /> </Link>
                    <label  className="text-center log-text ms-1" style={{fontSize:"22px" ,width:"100%", color:"#fff", fontWeight:"500"}} For="varify">Log Entry</label>
                </div>
                    </div>
                <div className="col-6">
                    <div className="auth-sunimage ">    
                        <img className=""  style={{width:"125px"}}  src={Main} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div style={{height:"700px"}} className="scanner-container d-flex flex-column align-items-center justify-content-center">
    <div className="scanner border border-primary p-5">
    <img className="" style={{width:"140px"}} src={business} alt="" /> 
    </div>
    </div>
    </div>
  )
}
