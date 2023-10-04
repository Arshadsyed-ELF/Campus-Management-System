import React, { useState } from 'react';
import { Table, Form } from 'react-bootstrap';
import Sidebar from './Sidebar';
import axios from 'axios';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faEdit,faTrash,faPenToSquare } from '@fortawesome/free-solid-svg-icons'

const StudentAttendanceTable = () => {
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
    window.location.assign("/sattendance")
    alert("user is deleted")

  }
   
  return (
    <div style={{display:"flex"}}>
      <Sidebar/>
   
      <div className='list' style={{paddingLeft:"50px"}} >
      <h2>Student Attendance Record</h2> <br/>
      <Table striped bordered hover  >
          <thead className='list'>
            <tr className='list'>
              <th>sl/no</th>
              <th>Roll no</th>
              <th>Name</th>
              <th>Year</th>
              <th>Department</th>
              <th>Attendance</th>
              <th>Operation</th>
              
            </tr>
          </thead>
          <tbody className='list'>
            {data.map((item,index) =>
                <tr >
                  <td>{index + 1}</td>
                  <td>{item.rollno}</td>
                  <td>{item.name}</td>
                  <td>{item.year}</td>
                  <td>{item.department}</td>
                  <td>{item.attendance}</td>
                  

                <td>
                <button style={{border:"none",background:"none",paddingRight:"10px"}} ><Link to={`/supdate1/${item._id}`} style={{color:"blue",textDecoration:"none"}}><FontAwesomeIcon icon={faEdit} /></Link></button> <span></span> <span></span> <span></span>
                <button onClick={()=>{deleteData(item._id)}} style={{border:"none",background:"none"}}> <FontAwesomeIcon icon={faTrash} style={{color:"red",border:"none"}} /></button>
                {/* <button><Link to={`/reads/${item.id}`}>reads</Link></button> */}
                </td>
                </tr>
              )
            }
          </tbody>
        </Table>
 
    </div>
    </div>
  );
};

export default StudentAttendanceTable;
