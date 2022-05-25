import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./components/Home";
import Auth from "./components/Auth";
import Login from "./components/Login";
import Register from "./components/Register";
import Verify from "./components/Verify";
import Main from "./components/Main";
import EntryLog from "./components/EntryLog";
import ExitLog from "./components/ExitLog";
import ViewLogs from "./components/ViewLogs";
import EntryPass from "./components/EntryPass";
import ExitPass from "./components/ExitPass";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div className="font-Metrophobic container-fluid d-flex align-items-center justify-content-center app-con">
      <div className="mobile-container border border-primary">
      <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover />
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/Auth" component={Auth} exact />
          <Route path="/login" component={Login} exact />
          <Route path="/register" component={Register} exact />
          <Route path="/verify" component={Verify} exact />
          <Route path="/main" component={Main} exact />
          <Route path="/entrylog" component={EntryLog} exact />
          <Route path="/exitlog" component={ExitLog} exact />
          <Route path="/viewlogs" component={ViewLogs} exact />
          <Route path="/EntryPass" component={EntryPass} exact />
          <Route path="/Exitpass" component={ExitPass} exact />
        </Switch>
      </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
