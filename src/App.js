import React from "react";
import { Route, Routes, } from "react-router-dom";
import Dashboard from "./dashboard";
import Login from "./login";

export default function App(){
  return (
    <div className="vh-100 vw-100">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path={"/login"} element={<Login />} />
      </Routes>
    </div>
  )
}