import React, { useState } from 'react';
import {
    FaTh,
    FaBars,
    FaChild,
    FaChalkboardTeacher,
    FaList,
    FaHome,
    FaBusAlt,
    FaSignOutAlt,
    FaInfo,
    FaPercentage,
    FaFileAlt,
    FaUserEdit,
    FaUserAlt,
    FaTimes,
    FaTable,
    FaCalendar,
    FaBookReader,
    FaReadme,
    FaReply,
    FaReplyd,
    FaComment
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';


const Ssidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    
    const menuItem=[
        {
            path:"/academics1",
            name:"Academics",
            icon:<FaPercentage/>
        },
        {
            path:"/ssattendance",
            name:"Attendance",
            icon:<FaFileAlt/>
        },
        {
            path:"/sclasses",
            name:"Classes",
            icon:<FaReadme/>
        },
        {
            path:"/slabs",
            name:"Labs",
            icon:<FaReadme/>
        },
        {
            path:"/sevents",
            name:"Events",
            icon:<FaCalendar/>
        },
        {
            path:"/slibrary",
            name:"Library",
            icon:<FaBookReader/>
        },

        {
            path:"/stimetable",
            name:"Time Table",
            icon:<FaTable/>
        },
        {
            path:"/sprofile",
            name:"Profile",
            icon:<FaUserAlt/>
        },
        {
            path:"/scomplaint",
            name:"Complaint",
            icon:<FaComment/>
        },
        {
            path:"/",
            name:"Logout",
            icon:<FaSignOutAlt/>
        }
        
    ]
    return (
        <div className="containers" id='side'>
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Student</h1>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                           
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Ssidebar;