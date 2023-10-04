import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import './AddClassroom.css';
import '../Faculty/AddClassroom.css';

import Sidebar from './Sidebar';


const Createevent = () => {
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [description, setDescription] = useState('');

  
  let navigate =useNavigate()

  let handleSubmit = (e) => {
  e.preventDefault()
  let payload = {name, subject, description }
  axios.post("http://localhost:9000/createevent", payload)
.then(result => {console.log(result)
navigate('/events')})
      .catch(err => console.log(err))
      }
    

  return (
    <div style={{display:"flex"}}  >
        <Sidebar/>
        <section style={{paddingTop:"150px",paddingLeft:"30%"}}>
        <div className="add-classroom-container" style={{background:"skyblue",width:"350px"}} >
      <h2>Add Event</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder=" Event Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="date" placeholder="Date" value={subject} onChange={(e) => setSubject(e.target.value)} />
        {/* <input type="text" placeholder="Date" value={subject} onChange={(e) => setSubject(e.target.value)} /> */}
        <textarea placeholder="Description " value={description} onChange={(e) => setDescription(e.target.value)} />
        <button type="submit">Create Event</button>
      </form>
      </div>
      </section>
    </div>
  );
};

export default Createevent;
