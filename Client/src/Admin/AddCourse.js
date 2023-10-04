// components/AddClassroom.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import '../Faculty/AddClassroom.css'
import Sidebar from './Sidebar';

const AddCourse = () => {
  const [department, setDepartment] = useState('');
  const [coursecode, setCoursecode] = useState('');
  const [credits, setCredits] = useState('');
  const [hod, setHod] = useState('');

  
  let navigate =useNavigate()

  let handleSubmit = (e) => {
  e.preventDefault()
  let payload = {department, coursecode, credits,hod }
  axios.post("http://localhost:9000/createcourse", payload)
.then(result => {console.log(result)
navigate('/courses')})
      .catch(err => console.log(err))
      }
    

  return (
    <div style={{display:"flex"}}  >
        <Sidebar/>
        <section style={{paddingTop:"150px",paddingLeft:"30%"}}>
        <div className="add-classroom-container" style={{background:"skyblue",width:"350px"}} >
      <h2>Add Course</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Department" value={department} onChange={(e) => setDepartment(e.target.value)} />
        <input type="text" placeholder="Course code" value={coursecode} onChange={(e) => setCoursecode(e.target.value)} />
        <input type="number" placeholder="Credits" value={credits} onChange={(e) => setCredits(e.target.value)} />
        <input type="text" placeholder="HOD name" value={hod} onChange={(e) => setHod(e.target.value)} />
        <button type="submit">Create Course</button>
      </form>
      </div>
      </section>
    </div>
  );
};

export default AddCourse;
