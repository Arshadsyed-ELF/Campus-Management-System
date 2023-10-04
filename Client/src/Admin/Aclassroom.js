// components/GetClassroom.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Faculty/getclass.css';
import { Button } from 'react-bootstrap';
import { useNavigate,Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Sidebar from './Sidebar';
import Addroom from '../Faculty/Addroom';

const Aclassroom = () => {
  const [classrooms, setClassrooms] = useState([]);
  const navigate =useNavigate();
  useEffect(() => {
    async function fetchClassrooms() {
      try {
        const response = await axios.get('http://localhost:9000/getclassroom'); // Define the correct API endpoint
        setClassrooms(response.data);
      } catch (error) {
        console.error('Error fetching classrooms:', error);
      }
    }
    fetchClassrooms();
  }, []);

 
  let deleteData=(_id)=>{
    axios.delete(`http://localhost:9000/classdelete/${_id}`)
    window.location.assign("/aclassroom")
    alert("class is deleted")
  }

  return (
    <div style={{display:"flex"}}>
    <div style={{position:'fixed'}}>
    <Sidebar />  
    </div>
        <div style={{marginLeft:"200px",marginRight:"200px"}}>  
        <div className="container mt-5"> <Button onClick={()=>navigate('/acreateroom')}>Create class</Button>
      <h2 className="mb-4" >Classrooms </h2>
      <div className="grid-container">
        {classrooms.map((classroom) => (  
          <div key={classroom._id} className="grid-item">
            <div className="classroom-info">  
              <h5><strong style={{color:"black"}}>name:</strong>{classroom.name}</h5>
              <p><strong style={{color:"black"}}>Subject:</strong>{classroom.subject}</p>
              <p><strong style={{color:"black"}}>Description:</strong>{classroom.description}</p>
              {/* <Button ><Link to={`/classdetails/${classroom._id}`} style={{color:"white",textDecoration:"none"}}>open</Link></Button> */}
                  <Button variant="danger" onClick={()=>{deleteData(classroom._id)}}style={{marginLeft:"0px"}}>delete</Button>
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

export default Aclassroom;
