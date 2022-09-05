import { Outlet } from "react-router-dom";

export default function MembersOutlet(){
    return(
        <div className="p-4 h-100">
            <Outlet />
        </div>
    )
}