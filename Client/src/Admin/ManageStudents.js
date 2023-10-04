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



const ManageStudents = () => {
  const [data, setData] = useState([]);
  // const [id,setId]=useState(0)

  //  const ids =setId(
  //   id +1
  //  )

  useEffect(() => {
    axios.get("http://localhost:9000/get") 
    .then((response) => {
       setData(response.data) 
      })
      .catch(() => {
        console.log("DIDNT GET");
      })
  },[])

  let deleteData=(_id)=>{
    axios.delete(`http://localhost:9000/delete/${_id}`)
    .then( res=>{
      window.location.assign("/mstudent")
      alert("user deleted")
    })
    .catch(()=>{
      console.log('didnt work')
    })
  

  }
  return (
   <section style={{display:"flex" }} >
{/* #22155640 */}
    
            <Sidebar/>
      
         <div className='list'  style={{paddingLeft:"50px"}}>
         <h1> ManageStudents</h1> <br/>
        <Table striped bordered hover  >
          <thead className='list'>
            <tr className='list'>
              <th>sl/no</th>
              <th>Name</th>
              <th>Roll No</th>
              <th>Year</th>
              <th>Department</th>
              <th>Email</th>
              <th>Address</th>
              <th>Admission Date</th>
              <th>Operation</th>
              
            </tr>
          </thead>
          <tbody className='list'>
            {data.map((item,index) =>
                <tr >
                  <td>{index + 1}</td>
                  {/* <td>{item._id}</td> */}
                  <td>{item.name}</td>
                  <td>{item.rollno}</td>
                  <td>{item.year}</td>
                  <td>{item.department}</td>
                  <td>{item.email}</td>
                  <td>{item.address}</td>
                  <td>{item.registrationDate}</td>
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

export default ManageStudents