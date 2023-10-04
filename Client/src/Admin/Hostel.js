// import React from 'react'
// import AdminDashboard from './AdminDashboard'
// import Table from 'react-bootstrap/Table';
// import Sidebar from './Sidebar';


// const Hostel = () => {
//   return (
//     <section style={{display:"flex"}}>
       
//         <Sidebar/>
//         <div className='list' style={{paddingLeft:"50px"}}>
//         <h1>Hostel Information</h1> 
//         <br/>
//       <Table striped bordered hover >
//         <thead>
//           <tr>
//             <th>Hostel Name</th>
//             <th>Hostel Address</th>
//             <th>Number of Rooms</th>
//             <th>Capacity per Room</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td>Hostel A</td>
//             <td>123 Main Street</td>
//             <td>50</td>
//             <td>2</td>
//           </tr>
//           <tr>
//             <td>Hostel B</td>
//             <td>456 Park Avenue</td>
//             <td>40</td>
//             <td>3</td>
//           </tr>
//           <tr>
//             <td>Hostel C</td>
//             <td>789 Elm Road</td>
//             <td>55</td>
//             <td>3</td>
//           </tr>
//           <tr>
//             <td>Hostel D</td>
//             <td>459 mg Road</td>
//             <td>60</td>
//             <td>2</td>
//           </tr>
//           {/* Add more rows for other hostels */}
//         </tbody>
//       </Table>
//       </div>
//     </section>
//   )
// }

// export default Hostel


import React from 'react'
import AdminDashboard from './AdminDashboard'
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faEdit,faTrash,faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import Sidebar from './Sidebar';
import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';



const Hostel = () => {
  const [data, setData] = useState([]);
  
  const navigate=useNavigate()

  useEffect(() => {
    axios.get("http://localhost:9000/gethostel") 
    .then((response) => {
       setData(response.data) 
      })
      .catch(() => {
        console.log("DIDNT GET");
      })
  },[])

  let deleteData=(_id)=>{
    axios.delete(`http://localhost:9000/hosteldelete/${_id}`)
    .then( res=>{
      window.location.assign("/hostel")
      alert("user deleted")
    })
    .catch(()=>{
      console.log('didnt work')
    })
  

  }
  return (
   <section style={{display:"flex"}} >
 {/* 328979 */}
    
            <Sidebar/> 
         <div className='list'  style={{paddingLeft:"50px", alignItems:"flex-end"}}> <br/> <Button onClick={()=>navigate('/addhostel')}>Add Hostel</Button>
         <h1> Hostels</h1> <br/>
        <Table striped bordered hover  >
          <thead className='list'>
          <tr>
            <th>sl/no</th>
            <th>Hostel Name</th>
             <th>Number of Rooms</th>
             <th>Capacity per Room</th>
             <th>Operations</th>

          </tr>
          </thead>
          <tbody className='list'>
            {data.map((item,index) =>
                <tr >
                  <td>{index + 1}</td>
                  {/* <td>{item._id}</td> */}
                  <td>{item.hostelname}</td>
                  <td>{item.rooms}</td>
                  <td>{item.capacity}</td>
                  {/* <td><a  href='CSE Brochure.pdf' download="cse.pdf">ECE Brochure</a></td> */}
                <td>
                <button style={{border:"none",background:"none",paddingRight:"10px"}} ><Link to={`/supdate/${item._id}`} style={{color:"blue",textDecoration:"none"}}><FontAwesomeIcon icon={faEdit} /></Link></button> <span></span> <span></span> <span></span>
                <button onClick={()=>{deleteData(item._id)}} style={{border:"none",background:"none"}}> <FontAwesomeIcon icon={faTrash} style={{color:"red",border:"none"}} /></button>
                {/* <button><Link to={`/reads/${item.id}`}>reads</Link></button> */}
                </td>
                </tr>
              )
            }
          </tbody>
        </Table>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
         </section>
  )
}

export default Hostel