import React ,{useState} from "react";
// import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom"
import axios from "axios";
import register from "../Images/register.png";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Login() {

    const history = useHistory();
    const [mobileNumber, setMobileNumber] = useState("");
    const [name, setName] = useState("");
    const [society, setSociety] = useState("Oberoi Esquire");
    const [password, setPassword] = useState("");
    const [cpassword, setCPassword] = useState("");

    const submitUser = async (e) => {
        console.log("hahah");
        // e.preventDefault();
        try {
          if (!mobileNumber || !name || !society || !password || !cpassword) {
            return toast.error("All fields are mandatory", {
              position: toast.POSITION.TOP_CENTER,
              autoClose: 3000,
            });
          }
    
          if (!society || society === "") {
            return toast.error("Please select society", {
              position: toast.POSITION.TOP_CENTER,
              autoClose: 3000,
            });
          }
    
          if (password !== cpassword) {
            return toast.error("Password and Confirm Password Not matching", {
              position: toast.POSITION.TOP_CENTER,
              autoClose: 3000,
            });
          }
    
          await axios.post("/register", {
            mobile_number: mobileNumber,
            name,
            society,
            password,
            cpassword,
          });
    
          history.push("/login");
    
          return toast.success("Registration Success", {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 3000,
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
    <div className="header-shape auth-header bg-primary" style={{width:"100%"}}>
        <div className="auth-tittle">
            <div className="row">
                <div className="col-6">
                <p className="mb-0 auth-tittle ">Register</p> 
                </div>
                <div className="col-6">
                    <div className="auth-sunimage ">    
                        <img style={{width:"125px"}} src={register} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="login-middle d-flex flex-column align-items-center justify-content-center">
            <div className="mb-3">
                <input placeholder="Mobile Number"
                minLength="10"
                maxLength="10"
                pattern="^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$"
                onChange={(e) => setMobileNumber(e.target.value)}
                type="text" className="form-control" id="username" />
            </div>
            <div className="mb-3">
                <input placeholder="Name" type="text" onChange={(e) => setName(e.target.value)} className="form-control"/>
            </div>
            <div className="mb-3">
                <input placeholder="Select Society"  type="text" className="form-control"  />
            </div>
            <div className="mb-3">
                <input placeholder="Password" onChange={(e) => setPassword(e.target.value)} type="Password" className="form-control"  />
            </div>
            <div className="mb-3">
                <input placeholder="Confirm Password" onChange={(e) => setCPassword(e.target.value)} type="Password" className="form-control"  />
            </div>
    </div>
    <div className="auth-btn-con d-flex flex-column align-items-center justify-content-center">
        <button  className="btn btn-primary auth-btn login-btn shadow-sm" type="button" onClick={submitUser}>Submit</button>
    </div>
    </div>
  )
}
