import React from 'react'
import AdminDashboard from './AdminDashboard'
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import { useEffect,useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faEdit,faTrash,faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import Sidebar from './Sidebar';
import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const ManageFaculty = () => {
  const [data, setData] = useState([]);

  const navigate=useNavigate()

  useEffect(() => {
    axios.get("http://localhost:9000/fac") 
    .then((response) => {
       setData(response.data) 
      })
      .catch(() => {
        console.log("DIDNT GET");
      })
  },[])

  let deleteData=(_id)=>{
    axios.delete(`http://localhost:9000/fdelete/${_id}`)
      window.location.assign("/mfaculty")
      alert("user is deleted")
  }
  return (
    <section style={{display:"flex"}}>
    
      
        <Sidebar />
        


        <div className='list' style={{paddingLeft:"50px"}} >
        <h1>Manage Faculties</h1> <br/>
        <Table striped bordered hover >
          <thead className='list'>
            <tr className='list'>
              <th>sl/no</th>
              <th>emp id</th>
              <th>Name</th>
              <th>Department</th>
              <th>Email</th>
              <th>Address</th>
              <th>Joining Date</th>
              <th>Operation</th>
              
            </tr>
          </thead>
        
      
          <tbody className='list'>
            {data.map((item,index) =>
                <tr >
                  <td>{index + 1}</td>
                  <td>{item.empid}</td>
                  <td>{item.name}</td>
                  <td>{item.department}</td>
                  <td>{item.email}</td>
                  <td>{item.address}</td>
                  <td>{item.registrationDate}</td>
                <td>
                   <button style={{border:"none",background:"none"}} ><Link to={`/fupdate/${item._id}`} style={{color:"blue",textDecoration:"none"}}><FontAwesomeIcon icon={faEdit} /></Link></button> <span></span> <span></span>
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
        autoClose={3000}
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

export default ManageFaculty