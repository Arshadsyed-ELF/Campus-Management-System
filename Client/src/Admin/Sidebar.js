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
//     FaFileAlt
// }from "react-icons/fa";
// import { NavLink } from 'react-router-dom';


// const Sidebar = ({children}) => {
//     const[isOpen ,setIsOpen] = useState(false);
//     const toggle = () => setIsOpen (!isOpen);
//     const menuItem=[
//         // {
//         //     path:"/dashboard",
//         //     name:"Dashboard",
//         //     icon:<FaTh/>
//         // },
//         {
//             path:"/mstudent",
//             name:"Student",
//             icon:<FaChild/>
//         },
//         {
//             path: "/sattendance",
//             name: " ↑Attendance" ,
//             icon:<FaFileAlt/>
//        },
//         {
//             path:"/mfaculty",
//             name:"faculty",
//             icon:<FaChalkboardTeacher/>
//         },
//        {
//          path: "/fattendance",
//           name: " ↑Attendance" ,
//           icon:<FaFileAlt/>
//        },
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


//         // {
//         //     path:"/about",
//         //     name:"About",
//         //     icon:<FaInfo/>
//         // },
//         {
//             path:"/",
//             name:"Logout",
//             icon:<FaSignOutAlt/>
//         }

//     ]
//     return (
//         <div className="containers" id='side' >
//            <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
//                <div className="top_section">
//                    <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Admin</h1>
//                    <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
//                        <FaBars onClick={toggle}/>
//                    </div>
//                </div>
//                {
//                    menuItem.map((item, index)=>(
//                        <NavLink to={item.path} key={index} className="link" activeclassName="active">
//                            <div className="icon">{item.icon}</div>
//                            <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
//                        </NavLink>
//                    ))
//                }
//            </div>
//            <main>{children}</main>
//         </div>
//     );
// };

// export default Sidebar;


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
  FaFile,
  FaFileAlt,
  FaRegPlusSquare,
  FaArrowDown,
  FaBroom,
  FaHandsHelping,
  FaBoxTissue,
  FaComment,
  FaResolving,
  FaEvernote
} from "react-icons/fa";
import { NavLink } from 'react-router-dom';


const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const [submenuOpen, setSubmenuOpen] = useState({});

  const menuItem = [

    {
      name: "student",
      icon: <FaRegPlusSquare />,
      submenus: [
        {
          path: "/mstudent",
          name: "Manage",
          icon: <FaChild />
        },
        {
          path: "/sattendance",
          name: "Attendance",
          icon: <FaFileAlt />
        },
      ]
    },
    {
      name: "Faculty",
      icon: <FaRegPlusSquare />,
      submenus: [
        {
          path: "/mfaculty",
          name: "Manage",
          icon: <FaChalkboardTeacher />
        },
        {
          path: "/fattendance",
          name: "Attendance",
          icon: <FaFileAlt />
        },
        // Add more submenus as needed
      ]
    },      
    {
      name: "Facilities",
      icon: <FaRegPlusSquare />,
      submenus: [
        {
          path: "/aclassroom",
          name: "ClassRooms",
          icon: <FaList />
        },
        {
          path: "/alab",
          name: "Labs",
          icon: <FaFileAlt />
        },
        // Add more submenus as needed
      ]
    },
    {
      name: "Services",
      icon: <FaRegPlusSquare />,
      submenus: [
        {
          path: "/courses",
          name: "Courses",
          icon: <FaList />
        },

        {
          path: "/hostel",
          name: "Hostel",
          icon: <FaHome />
        },
        {
          path: "/transport",
          name: "Transport",
          icon: <FaBusAlt />
        },
      ]
    },
    
    {
      path: "/Events",
      name: "Events",
      icon: <FaEvernote />
    },
    {
      path: "/complaints",
      name: "Complaints",
      icon: <FaComment />
    },

    {
      path: "/",
      name: "Logout",
      icon: <FaSignOutAlt />
    }

  ]

  // Function to toggle submenu open/close state
  const toggleSubmenu = (index) => {
    setSubmenuOpen({
      ...submenuOpen,
      [index]: !submenuOpen[index],
    });
  };
  return (

    <div className="containers" id='side'>
      <div style={{ width: isOpen ? "200px" : "50px" }} className="sidebar">
        <div className="top_section">
          <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">Admin</h1>
          <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>
        {menuItem.map((item, index) => (
          <div key={index}>
            {item.submenus ? (
              <div className="link" onClick={() => toggleSubmenu(index)}>
                <div className="icon">{item.icon}</div>
                <div style={{ display: isOpen ? "block" : "none" }} className="link_text">{item.name}</div>
              </div>
            ) : (
              <NavLink to={item.path} className="link" activeClassName="active">
                <div className="icon">{item.icon}</div>
                <div style={{ display: isOpen ? "block" : "none" }} className="link_text">{item.name}</div>
              </NavLink>
            )}

            {/* Render submenus if they exist and the submenu is open */}
            {item.submenus && submenuOpen[index] && (
              <div className="submenu">
                {item.submenus.map((submenu, subIndex) => (
                  <NavLink to={submenu.path} key={subIndex} className="link" activeClassName="active">
                    <div className="icon">{submenu.icon}</div>
                    <div className="link_text">{submenu.name}</div>
                  </NavLink>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <main>{children}</main>
    </div>

  );
};
export default Sidebar;