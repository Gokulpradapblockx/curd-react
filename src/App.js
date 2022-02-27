import React from "react";
import "./App.css";
import Dashboard from "./dashboard";
import Sidebar from "./sidebar";
import Topbar from "./topbar";
import UserList from "./UserList";
import Usercreate from "./Usercreate";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Userviwe from "./Userviwe";
import Useredit from "./Useredit";

function App() {
  return (
    <BrowserRouter>
      <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" class="d-flex flex-column">
          <div id="content">
            <Topbar />
            <div class="container-fluid">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/userlink" element={<UserList />} />
                <Route path="/usercreate" element={< Usercreate />} />
                <Route path="/userviwe/:id" element={< Userviwe />} />
                <Route path="/useredit/:id" element={< Useredit />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
