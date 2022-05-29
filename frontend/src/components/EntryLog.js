import React from 'react'
import { useHistory,useLocation } from "react-router-dom"
import axios from "axios";
import { Link } from "react-router-dom";
import Main from "../Images/mainSun.png";
import Entry from "../Images/LogEntry.png";
import { QrReader } from 'react-qr-reader';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';;

export default function EntryLog() {
    const history = useHistory();
    const location = useLocation();

    const getCurrentTime = () =>{
        var dt = new Date();
        var hours = dt.getHours() ; 
        var AmOrPm = hours >= 12 ? 'pm' : 'am';
        hours = (hours % 12) || 12;
        var minutes = dt.getMinutes() ;
        var finalTime = `${hours}:${minutes} ${AmOrPm}`
        return finalTime
    }

    const handleQrScan = async (result,error) =>{
      if (result) {
        try {
            const timestamp = getCurrentTime()
            console.log(timestamp);
            const mobileNumber = location.state.mobile_number;
            await axios.post("/entry", {
                mobile_number: mobileNumber,
                society_name: result.text,
                entry:"entry",
                time:timestamp
            });
            history.push({
                pathname: "/entrypass",
                state: { mobile_number: mobileNumber },
              });
            return toast.success("Entry Log", {
              position: toast.POSITION.TOP_CENTER,
              autoClose: 2000,
            });
        } catch (error) {
            console.log(error);
        }
        
      }
  
      if (error) {
        // console.info(error);
      }
    }
  return (
    <div className="container-fluid p-0 auth-container">
    <div className="header-shape auth-header bg-primary"  style={{width:"100%"}}>
        <div className="auth-tittle ps-0">
            <div className="row">
                <div className="col-6">
                    <div className="entry-log-header d-flex mt-4 ms-4">
                    <Link to="/main"><img className="" style={{width:"42px"}}  src={Entry} alt="" /> </Link>
                    <label  className="text-center log-text ms-1" style={{fontSize:"22px" ,width:"100%", color:"#fff", fontWeight:"500"}}>Log Entry</label>
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
    <div className="scanner border border-primary p-4">
    {/* <img className="" style={{width:"140px"}} src={business} alt="" />  */}
        <div className="qr-reader-con" style={{width:"180px"}}>
            <QrReader
                style={{ width: '100%'}}
                delay={300}
                onResult={handleQrScan}
            />
        </div>
    </div>
    </div>
    </div>
  )
}
