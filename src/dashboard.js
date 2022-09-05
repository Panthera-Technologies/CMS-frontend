import { Link, useLocation, Routes, Route } from "react-router-dom";

export default function Dashboard() {
  const location = useLocation();
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <div className="p-4">
        <h3>Dashboard</h3>
    </div>
  )
}
