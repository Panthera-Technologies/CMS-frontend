import { Link, useLocation, Routes, Route, Outlet, useNavigate } from "react-router-dom";

export default function Home(){
    const location = useLocation();
    const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <div className="row vh-100">
      <div
        className="col-3 h-100 d-flex flex-column p-3 border border-r"
        style={{ borderColor: "#0F3460", borderWidth: "2px",  }}
      >
        <div className="d-flex flex-row w-100 justify-content-between align-items-center">
          <img
            src="/cms-logo.png"
            className="ml-3"
            style={{ height: "80px", width: "80px" }}
          />
          <div>
            <h4>Grace Family Chapel</h4>
            <h7 style={{ fontSize: "15px" }}>Church Management System</h7>
          </div>
        </div>
        <div className="d-flex flex-column ml-3 mt-5">
          <Link
            to="/"
            className="text-decoration-none"
            style={{ color: `${location.pathname === "/" ? "white" : "#0F3460"}` }}
          >
            <div
              className="p-2 w-100 "
              style={{
                borderRadius: "10px",
                backgroundColor: `${
                  location.pathname === "/" ? "#0F3460" : ""
                }`,
              }}
            >
              Dashboard
            </div>
          </Link>
          <Link
            to="/members"
            className="text-decoration-none "
            style={{ color: `${location.pathname.includes("members") ? "white" : "#0F3460"}` }}
          >
            <div
              className="p-2 w-100 "
              style={{
                borderRadius: "10px",
                backgroundColor: `${
                    location.pathname.includes("members") ? "#0F3460" : ""
                }`,
              }}
            >
              Members
            </div>
          </Link>
        </div>
      </div>
      <div className="col-9 d-flex flex-column p-0 h-100" style={{backgroundColor: "#EEEEEE"}}>
        <div
          className="h-auto p-3 shadow-sm w-100 d-flex text-white  flex-row justify-content-between"
          style={{ backgroundColor: "#0F3460" }}
        >
          <div className="d-flex flex-column p-0">
            <span style={{ fontSize: "20px", fontWeight: "500" }}>
              WELCOME, {user.name}
            </span>
            <span style={{ fontSize: "12px" }} className="">
              Here's this week's summary
            </span>
          </div>
          <div className="d-flex flex-row mr-3">
            <button onClick={() => navigate('/members/add-member')} className="btn btn-primary mr-3" style={{height: "40px"}}>+ Add Member</button>
            <button onClick={() => navigate('/members/add-member')} className="btn btn-light mr-3" style={{height: "40px"}}>Pay Tithe</button>
            <div
              className="rounded-circle border border-secondary "
              style={{ borderWidth: "2px", height: "50px", width: "50px" }}
            ></div>
          </div>
        </div>
        <div className="w-100 h-100">
            <Outlet />
        </div>
      </div>
    </div>
  );
}