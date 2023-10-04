// components/AddClassroom.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './AddClassroom.css';
import Fsidebar from './Fsidebar';
const Fcreatelab= () => {
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [description, setDescription] = useState('');

  
  let navigate =useNavigate()

  let handleSubmit = (e) => {
  e.preventDefault()
  let payload = {name, subject, description }
  axios.post("http://localhost:9000/create", payload)
.then(result => {console.log(result)
navigate('/classroom')})
      .catch(err => console.log(err))
      }
    

  return (
    <div style={{display:"flex"}}  >
        <Fsidebar/>
        <section style={{paddingTop:"150px",paddingLeft:"30%"}}>
        <div className="add-classroom-container" style={{background:"skyblue",width:"350px"}} >
      <h2>Add Lab</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="text" placeholder="Subject" value={subject} onChange={(e) => setSubject(e.target.value)} />
        <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
        <button type="submit">Create Classroom</button>
      </form>
      </div>
      </section>
    </div>
  );
};

export default Fcreatelab;
