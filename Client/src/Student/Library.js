// components/GetClassroom.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Faculty/getclass.css';
import { Button } from 'react-bootstrap';
import { useNavigate,Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Ssidebar from './Ssidebar';

const Library = () => {

  const [classrooms, setClassrooms] = useState([]);
  const navigate =useNavigate();
  useEffect(() => {
    async function fetchClassrooms() {
      try {
        const response = await axios.get('http://localhost:9000/getlibrary'); // Define the correct API endpoint
        setClassrooms(response.data);
      } catch (error) {
        console.error('Error fetching classrooms:', error);
      }
    }
    fetchClassrooms();
  }, []);

 
  let deleteData=(_id)=>{
    axios.delete(`http://localhost:9000/librarydelete/${_id}`)
    window.location.assign("/slibrary")
    alert("Book is Submited")
  }

  return (
    <div style={{display:"flex"}}>
    <div style={{position:'fixed'}}>
    <Ssidebar/> 
    </div> 
        <div style={{marginLeft:"200px",marginRight:"200px"}}>  
        <div className="container mt-5">  
        <Button onClick={()=>navigate('/screatebook')}>Get Book</Button>
            <h2 className="mb-4" >Books  Currently Registerd </h2>
      <div className="grid-container">
        {classrooms.map((classroom) => (  
          <div key={classroom._id} className="grid-item">
            <div className="classroom-info">  
              <h5><strong style={{color:"black"}}>Book name:</strong>{classroom.bookname}</h5>
              <h5><strong style={{color:"black"}}>Book code:</strong>{classroom.bookcode}</h5>
              <h5><strong style={{color:"black"}}>Roll NO:</strong>{classroom.rollno}</h5>
              <h5><strong style={{color:"black"}}>email:</strong>{classroom.email}</h5>
              {/* <Button ><Link to={`/classdetails/${classroom._id}`} style={{color:"white",textDecoration:"none"}}>open</Link></Button> */}
                  <Button variant="primary" onClick={()=>{deleteData(classroom._id)}}style={{marginLeft:"0px"}}>Return</Button>
              {/* <button onClick={()=>{deleteData(item._id)}} style={{border:"none",background:"none"}}> <FontAwesomeIcon icon={faTrash} style={{color:"red",border:"none"}} /></button> */}

             
            </div>
          </div>
        ))}
      </div>
    </div>


    </div>
    </div>
  );
};

export default Library;
