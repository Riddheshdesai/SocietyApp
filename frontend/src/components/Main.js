import React, {  useState } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import Main from "../Images/mainSun.png";
import Entry from "../Images/LogEntry.png";
import Exit from "../Images/LogExit.png";
import Out from "../Images/Logout.png";
import View from "../Images/viewLog.png";

export default function Login() {
    const history = useHistory();
    const logout = async () => {
        toast.success("Logout success", {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 3000,
        });
        history.push("/login");
      };

  return (
    <div className="container-fluid p-0 auth-container">
    <div className="header-shape auth-header main-header bg-primary">
        <div className="auth-tittle">
            <div className="row">
                <div className="col-5">
                <p className="mb-0 auth-tittle ">Hello  Harshit</p> 
                </div>
                <div className="col-7">
                    <div className="auth-sunimage">    
                        <img className=""  style={{width:"125px",marginLeft:"30px"}}  src={Main} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="login-middle verify-middle d-flex flex-column align-items-center justify-content-center" style={{zIndex:"100"}}>
        <div className="main-content">
        <div class="grid-container">
            <Link to="/entrylog">
            <div class="grid-item">
            <img className="" style={{width:"42px"}}  src={Entry} alt="" />
            <label  className="text-center log-text" style={{fontSize:"15px" ,width:"100%", color:"#fff", fontWeight:"500"}} For="varify">Log Entry</label>
            </div></Link>
            <Link to="/exitlog">
            <div class="grid-item">
            <img className="" style={{width:"42px"}}  src={Exit} alt="" />
            <label  className="text-center log-text" style={{fontSize:"15px" ,width:"100%", color:"#fff", fontWeight:"500"}} For="varify">Log Entry</label>
            </div> </Link>
            <Link to="/viewlogs"> 
            <div class="grid-item">
            <img className="" style={{width:"42px"}}  src={View} alt="" />
            <label  className="text-center log-text" style={{fontSize:"15px" ,width:"100%", color:"#fff", fontWeight:"500"}} For="varify">Log Entry</label>
            </div></Link> 
            <div class="grid-item" onClick={()=>logout()}>
            <img className="" style={{width:"42px"}}  src={Out} alt="" />
            <label  className="text-center log-text" style={{fontSize:"15px" ,width:"100%", color:"#fff", fontWeight:"500"}} For="varify">Log Entry</label>
            </div>
        </div>

        </div>
        <div style={{height:"500px"}} className="d-flex align-items-end">
        <div  className="authbottom-line mainline-bottom my-4">
            <a href="">Designed and developed by SimplifyTech.in</a>
        </div>
        </div>
    </div>
    </div>
  )
}
