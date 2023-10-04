import React from 'react'
import "./admin.css"
import { Navbar, Nav, Container,Dropdown ,NavDropdown} from "react-bootstrap";
import { Link } from 'react-router-dom';
// import ".../"



const AdminDashboard = () => {
  return (
    <div > 
     <div class="sidenav" >
    <h5 className='unique'><u>Admin Dashboard</u></h5>
    <Link to="/dashboard" >Dashboard</Link>    
    <Link to="/mstudent">Manage Students</Link>
    <Link to="/mfaculty">Manage Faculty</Link>
    <Link to="/courses">Courses</Link>
    <Link to="/hostel">Hostel</Link>
    <Link to="/transport">Transport</Link>
    <Link to="/">Logout</Link>
   

  </div>

    </div>
  )
}

export default AdminDashboard


// import React, { useState } from 'react';
// import {
//     FaTh,
//     FaBars,
//     FaChild,
//     FaChalkboardTeacher,
//     FaList,
//     FaHome,
//     FaBusAlt,
//     FaSignOutAlt,
//     FaInfo,
//     FaFile,
//     FaFileAlt,
//     FaDropbox,
//     FaToggleOn,
//     FaDoorOpen,
//     FaOpencart,
//     FaRegMinusSquare,
//     FaPlus,
//     FaPlusCircle,
//     FaRegPlusSquare
// }from "react-icons/fa";
// import { NavLink } from 'react-router-dom';


// const Sidebar = ({children}) => {
//     const[isOpen ,setIsOpen] = useState(false);
//     const toggle = () => setIsOpen (!isOpen);

//     const [submenuOpen, setSubmenuOpen] = useState({});
//     const menuItem=[
       
//        {
//         name:"student",
//         icon: <FaRegPlusSquare />,
//         submenus: [
//           {
//             path: "/mstudent",
//             name: "Manage",
//             icon: <FaChild />
//           },
//           {
//             path: "/sattendance",
//             name: "Attendance",
//             icon: <FaFileAlt />
//           },
//         ]
//       },
//       {
//         path: "/services",
//         name: "Faculty",
//         icon: <FaRegPlusSquare/>,
//         submenus: [
//           {
//             path: "/mfaculty",
//             name: "Manage",
//             icon: <FaChalkboardTeacher />
//           },
//           {
//             path: "/fattendance",
//             name: "Attendance",
//             icon: <FaFileAlt />
//           },
//           // Add more submenus as needed
//         ]
//         },      
//         {
//             path:"/courses",
//             name:"Courses",
//             icon:<FaList/>
//         },
//         {
//             path:"/hostel",
//             name:"Hostel",
//             icon:<FaHome/>
//         },
//         {
//             path:"/transport",
//             name:"Transport",
//             icon:<FaBusAlt/>
//         },
        
//         {
//             path:"/",
//             name:"Logout",
//             icon:<FaSignOutAlt/>
//         }
        
//     ]

//       // Function to toggle submenu open/close state
//     const toggleSubmenu = (index) => {
//         setSubmenuOpen({
//           ...submenuOpen,
//           [index]: !submenuOpen[index],
//         });
//       };
//     return (
    
//     <div className="containers" id='side'>
//     <div style={{ width: isOpen ? "200px" : "50px" }} className="sidebar">
//       <div className="top_section">
//         <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">Admin</h1>
//         <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
//           <FaBars onClick={toggle} />
//         </div>
//       </div>
//       {menuItem.map((item, index) => (
//         <div key={index}>
//           {item.submenus ? (
//             <div className="link" onClick={() => toggleSubmenu(index)}>
//               <div className="icon">{item.icon}</div>
//               <div style={{ display: isOpen ? "block" : "none" }} className="link_text">{item.name}</div>
//             </div>
//           ) : (
//             <NavLink to={item.path} className="link" activeClassName="active">
//               <div className="icon">{item.icon}</div>
//               <div style={{ display: isOpen ? "block" : "none" }} className="link_text">{item.name}</div>
//             </NavLink>
//           )}

//           {/* Render submenus if they exist and the submenu is open */}
//           {item.submenus && submenuOpen[index] && (
//             <div className="submenu">
//               {item.submenus.map((submenu, subIndex) => (
//                 <NavLink to={submenu.path} key={subIndex} className="link" activeClassName="active">
//                   <div className="icon">{submenu.icon}</div>
//                   <div className="link_text">{submenu.name}</div>
//                 </NavLink>
//               ))}
//             </div>
//           )}
//         </div>
//       ))}
//     </div>
//     <main>{children}</main>
//   </div>

//     );
// };
// export default Sidebar;