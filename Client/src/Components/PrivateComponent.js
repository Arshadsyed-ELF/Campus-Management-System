import React from "react";
import { Navigate,Outlet } from "react-router-dom";
const PrivateComponent=()=>{
    const auth=localStorage.getItem('use')
    return auth?<Outlet/>:<Navigate to="/a"/>
}
export default PrivateComponent