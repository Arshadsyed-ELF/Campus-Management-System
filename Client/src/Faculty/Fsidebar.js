// import React from 'react'
// import { Link } from 'react-router-dom'

// const FacultyDashboard = () => {
//   return (
//     <div>
       
//      <div class="sidenav">
//      <h3 style={{color:"blue",}}><u>Faculty Dashboard</u></h3>
//     <Link to="/fdash">Dashboard</Link>    
//     {/* <Link to="/mstudent">Manage Students</Link> */}
//     <Link to="/fprofile">Profile</Link>
//     <Link to="/timetable">Time Table</Link>
//     <Link to="/">Logout</Link>
//     </div>
//     {/* <h1>welcome !!</h1> */}
//     </div>
//   )
// }

// export default FacultyDashboard

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
    FaUserAlt,
    FaTable,
    FaFileAlt,
    FaBroom,
    FaRestroom,
    FaSass,
    FaRobot
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';


const Fsidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        // {
        //     path:"/fdash",
        //     name:"Dashboard",
        //     icon:<FaTh/>
        // },
        // {
        //     path:"/mstudent",
        //     name:"Student",
        //     icon:<FaChild/>
        // },
        {
            path:"/timetable",
            name:"Time Table",
            icon:<FaTable/>
        },
        {
            path: "/ffattendance",
             name: " Attendance" ,
             icon:<FaFileAlt/>
          },
          {
            path: "/addroom",
             name: "Add Class" ,
             icon:<FaRobot/>
          },
          {
            path: "/classroom",
             name: " Classes" ,
             icon:<FaFileAlt/>
          },
          {
            path: "/fcreatelab",
             name: "Add lab" ,
             icon:<FaRobot/>
          },
          {
            path: "/flab",
             name: " Labs" ,
             icon:<FaFileAlt/>
          },
          {
                path: "/fevents",
                 name: "Events" ,
                 icon:<FaFileAlt/>
              },
        //   {
        //     path: "/flab",
        //      name: "Grades" ,
        //      icon:<FaFileAlt/>
        //   },
          {
            path:"/fprofile",
            name:"Profile",
            icon:<FaUserAlt/>
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
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Faculty</h1>
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

export default Fsidebar;