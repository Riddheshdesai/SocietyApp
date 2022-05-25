import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const EntryView = () => {


  return (
    <>
    <div className="log-card shadow d-flex align-items-center justify-content-between mb-3">
    <div className="log-details">
    <label  className="text-center log-text ms-1" style={{fontSize:"16px" ,width:"auto", color:"#fff", fontWeight:"600"}}>Mr. Deepak Kanodia</label> <br />
    <label  className="text-center log-text ms-1" style={{fontSize:"16px" ,width:"auto", color:"#fff", fontWeight:"600"}}>Esquire Society</label>
    </div>
    <div className="date-details">
    <label  className="text-center date-text ms-1" style={{fontSize:"16px" ,width:"auto", color:"#fff", fontWeight:"600"}}>12.30 pm</label>
    </div>
    </div>
    <div className="log-card shadow d-flex align-items-center justify-content-between ">
    <div className="log-details">
    <label  className="text-center log-text ms-1" style={{fontSize:"16px" ,width:"auto", color:"#fff", fontWeight:"600"}}>Mr. Deepak Kanodia</label> <br />
    <label  className="text-center log-text ms-1" style={{fontSize:"16px" ,width:"auto", color:"#fff", fontWeight:"600"}}>Esquire Society</label>
    </div>
    <div className="date-details">
    <label  className="text-center date-text ms-1" style={{fontSize:"16px" ,width:"auto", color:"#fff", fontWeight:"600"}}>12.85pm</label>
    </div>
    </div>
    </>
  );
};

export default EntryView;