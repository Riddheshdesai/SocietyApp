import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import bgHome from "../Images/homebg.png";

export default function Home() {
    
    return (
        <div className="container-fluid d-flex align-items-center justify-content-center">
            <div className="maincontainer bg-primary mt-2 position-relative" style={{ backgroundImage: `url(${bgHome})` }}>
                <Link to="/auth">
                <div className="home-tittle">
                    <p className="mb-0">Simplify Entry </p>
                </div>
                </Link>
            </div>
        </div>
        )
}