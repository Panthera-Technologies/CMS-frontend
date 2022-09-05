import React from "react";
import { Route, Routes, } from "react-router-dom";
import Dashboard from "./dashboard";
import Login from "./login";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from "./home";
import Members from "./members/members";
import 'rsuite/dist/rsuite.min.css'
import AddMember from "./members/addMember";
import MembersOutlet from "./members";


export default function App(){
  return (
    <>
    <div className="vh-100 vw-100 m-0 overflow-hidden">
      <Routes>
        <Route path="/" element={<Home />} >
          <Route index element={<Dashboard />} />
          <Route path="members" element={<MembersOutlet />} >
            <Route index element={<Members />} />
            <Route path="add-member" element={<AddMember />} />
          </Route>
        </Route>
        <Route path={"/login"} element={<Login />} />
      </Routes>
    </div>
    <ToastContainer />
    </>
    
  )
}