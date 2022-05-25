import React from "react";
import { Link } from "react-router-dom";
import authpage from "../Images/authPage.png";
import authPageSUN from "../Images/authPageSUN.png";

export default function Auth() {
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
                            <img className="img-fluid" src={authPageSUN} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="authmiddle px-5 d-flex align-items-center justify-content-center">
        <img className="img-fluid" src={authpage} alt="" />
        </div>
        <div className="auth-btn-con d-flex flex-column align-items-center justify-content-cente">
            <div class="d-grid gap-3">
            <button class="btn btn-primary auth-btn" type="button"><Link to="/register">Register</Link></button>
            <button class="btn btn-primary auth-btn" type="button"><Link to="/login">Login</Link></button>
            </div>
        </div>
        <div className="authbottom-line my-4 ps-3">
            <a href="">Designed and developed by SimplifyTech.in</a>
        </div>
    </div>
  )
}
