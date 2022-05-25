import React, { useState } from "react";
import { Link } from "react-router-dom";
import Main from "../Images/mainSun.png";
import Entry from "../Images/LogEntry.png";
import business from "../Images/business.png";
import EntryView from "./EntryView";
import ExitView from "./ExitView";

export default function Login() {
    const [entryTab, SetEntryTab] = useState(true);
    const [activeTab, SetActiveTab] = useState(true);

  return (
    <div className="container-fluid p-0 view-con auth-container">
        <div className="view-lof-header py-3 bg-primary">
            <h3 className="ms-4">Logs</h3>
            <div className="auth-btn-con d-flex align-items-center justify-content-center">
                <button  class="btn btn-primary auth-btn login-btn date-btn shadow-sm me-3" type="button">Start Date</button>
                <button  class="btn btn-primary auth-btn login-btn date-btn shadow-sm" type="button">End Date</button>
            </div>
            <div className="entry-exit-con">
            <div className="auth-btn-con d-flex align-items-center justify-content-center py-0">
                <button  class={`btn btn-primary auth-btn login-btn entry-btn me-5 ${activeTab ? "entry-line-btn" : ""}`} 
                onClick={() => {
                    SetEntryTab(true);
                    SetActiveTab(true);
                  }}type="button">Entries</button>
                <button class={`btn btn-primary auth-btn login-btn entry-btn ${!activeTab ? "entry-line-btn" : ""}`} onClick={() => {
              SetEntryTab(false);
              SetActiveTab(false);
            }} type="button">Exit</button>
            </div>
            </div>
        </div>
        <div className="view-body px-2 pt-3">
            {entryTab ? <EntryView />:<ExitView/>}
            {/* <div className="log-card shadow d-flex align-items-center justify-content-between ">
                <div className="log-details">
                <label  className="text-center log-text ms-1" style={{fontSize:"16px" ,width:"auto", color:"#fff", fontWeight:"600"}}>Mr. Deepak Kanodia</label> <br />
                <label  className="text-center log-text ms-1" style={{fontSize:"16px" ,width:"auto", color:"#fff", fontWeight:"600"}}>Esquire Society</label>
                </div>
                <div className="date-details">
                <label  className="text-center date-text ms-1" style={{fontSize:"16px" ,width:"auto", color:"#fff", fontWeight:"600"}}>12.30 pm</label>
                </div>
            </div> */}
        </div>
    </div>
  )
}
