import React, { useEffect, useState } from "react";
import { useLocation} from "react-router-dom";
import EntryView from "./EntryView";
import ExitView from "./ExitView";
import axios from "axios";

export default function ViewLogs() {
    const [entryTab, SetEntryTab] = useState(true);
    const [activeTab, SetActiveTab] = useState(true);
    const [viewLogs, SetViewLogs] = useState("");
    const location = useLocation()

    useEffect( () => {
      getViewData()
    }, [])
    const getViewData = async()=>{
      try{
        const mobileNumber = location.state.mobile_number
        const result = await axios.post("/viewlogs",{
             mobile_number: mobileNumber
        });
        SetViewLogs(result.data)
        console.log(result.data);

      }catch(error){
        console.log(error);
      }
    }

  return (
    <div className="container-fluid p-0 view-con auth-container">
        <div className="view-lof-header py-3 bg-primary">
            <h3 className="ms-4">Logs</h3>
            <div className="auth-btn-con d-flex align-items-center justify-content-center">
                <button  className="btn btn-primary auth-btn login-btn date-btn shadow-sm me-3" type="button">Start Date</button>
                <button  className="btn btn-primary auth-btn login-btn date-btn shadow-sm" type="button">End Date</button>
            </div>
            <div className="entry-exit-con">
            <div className="auth-btn-con d-flex align-items-center justify-content-center py-0">
                <button  className={`btn btn-primary auth-btn login-btn entry-btn me-5 ${activeTab ? "entry-line-btn" : ""}`} 
                onClick={() => {
                    SetEntryTab(true);
                    SetActiveTab(true);
                  }}type="button">Entries</button>
                <button className={`btn btn-primary auth-btn login-btn entry-btn ${!activeTab ? "entry-line-btn" : ""}`} onClick={() => {
              SetEntryTab(false);
              SetActiveTab(false);
            }} type="button">Exit</button>
            </div>
            </div>
        </div>
        <div className="view-body px-2 pt-3">
            {entryTab ? <EntryView viewLogs={viewLogs} />:<ExitView viewLogs={viewLogs} />}
        </div>
    </div>
  )
}
