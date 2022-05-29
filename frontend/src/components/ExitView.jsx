import React from "react";

const EntryView = ({viewLogs}) => {


  return (
    <>
    {viewLogs.logs && viewLogs.logs.map(element => {
      if(element.entry === "exit"){
        return(
        <div className="log-card shadow d-flex align-items-center justify-content-between mb-3" key={element._id}>
        <div className="log-details">
        <label  className="text-center log-text ms-1" style={{fontSize:"16px" ,width:"auto", color:"#fff", fontWeight:"600"}}>Mr. {viewLogs.name}</label> <br />
        <label  className="text-center log-text ms-1" style={{fontSize:"16px" ,width:"auto", color:"#fff", fontWeight:"600"}}>{viewLogs.society}</label>
        </div>
        <div className="date-details">
        <label  className="text-center date-text ms-1" style={{fontSize:"16px" ,width:"auto", color:"#fff", fontWeight:"600"}}>{element.time}</label>
        </div>
        </div>
        )
      }else{
        return ""
      }
    })}
    </>
  );
};

export default EntryView;