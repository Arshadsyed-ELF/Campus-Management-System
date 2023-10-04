// import React from 'react'
// import AdminDashboard from './AdminDashboard'
// import Table from 'react-bootstrap/Table';
// import Sidebar from './Sidebar';


// const Transport = () => {
//   return (
//     <section style={{display:"flex"}}>

//      <Sidebar/>
//      <div className='list' style={{paddingLeft:"50px"}}>
//         <h1>Transport Information</h1>
//       <Table striped bordered hover >
//         <thead>
//           <tr>
//             <th>Bus Number</th>
//             <th>Route</th>
//             <th>Driver Name</th>
//             <th>Capacity</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td>Bus 1</td>
//             <td>Route A</td>
//             <td>John Doe</td>
//             <td>50</td>
//           </tr>
//           <tr>
//             <td>Bus 2</td>
//             <td>Route B</td>
//             <td>Jane Smith</td>
//             <td>40</td>
//           </tr>
//           <tr>
//             <td>Bus 3</td>
//             <td>Route C</td>
//             <td>Michael Johnson</td>
//             <td>60</td>
//           </tr>
//           <tr>
//             <td>Bus 4</td>
//             <td>Route D</td>
//             <td>Johnson</td>
//             <td>40</td>
//           </tr>
//           {/* Add more rows for other transport details */}
//         </tbody>
//       </Table>
//       </div>
//         </section>
//   )
// }

// export default Transport



import React from 'react'
import AdminDashboard from './AdminDashboard'
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faEdit, faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import Sidebar from './Sidebar';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';



const Transport = () => {
  const [data, setData] = useState([]);

  const navigate = useNavigate()

  useEffect(() => {
    axios.get("http://localhost:9000/gettransport")
      .then((response) => {
        setData(response.data)
      })
      .catch(() => {
        console.log("DIDNT GET");
      })
  }, [])

  let deleteData = (_id) => {
    axios.delete(`http://localhost:9000/transportdelete/${_id}`)
      .then(res => {
        window.location.assign("/transport")
        alert("user deleted")
      })
      .catch(() => {
        console.log('didnt work')
      })


  }
  return (
    <section style={{ display: "flex" }} >
      {/* 328979 */}

      <Sidebar />
      <div className='list' style={{ paddingLeft: "50px", alignItems: "flex-end" }}> <br /> <Button onClick={() => navigate('/addtransport')}>Add Transport</Button>
        <h1> Courses</h1> <br />
        <Table striped bordered hover  >
          <thead className='list'>
            <tr>
          
              <th>Bus Number</th>
              <th>Route</th>
              <th>Driver Name</th>
              <th>Capacity</th>
              <th>Operation</th>

            </tr>
          </thead>
          <tbody className='list'>
            {data.map((item, index) =>
              <tr >
                
                {/* <td>{item._id}</td> */}
                <td>{item.busno}</td>
                <td>{item.route}</td>
                <td>{item.drivername}</td>
                <td>{item.capacity}</td>
                {/* <td><a  href='CSE Brochure.pdf' download="cse.pdf">ECE Brochure</a></td> */}
                <td>
                  <button style={{ border: "none", background: "none", paddingRight: "10px" }} ><Link to={`/supdate/${item._id}`} style={{ color: "blue", textDecoration: "none" }}><FontAwesomeIcon icon={faEdit} /></Link></button> <span></span> <span></span> <span></span>
                  <button onClick={() => { deleteData(item._id) }} style={{ border: "none", background: "none" }}> <FontAwesomeIcon icon={faTrash} style={{ color: "red", border: "none" }} /></button>
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

export default Transport