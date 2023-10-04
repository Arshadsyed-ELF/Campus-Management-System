// components/AddClassroom.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import './AddClassroom.css';
import '../Faculty/AddClassroom.css';
import Sidebar from './Sidebar';

const Acreatelab= () => {
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [code, setCode] = useState('');
  const [description, setDescription] = useState('');

  
  let navigate =useNavigate()

  let handleSubmit = (e) => {
  e.preventDefault()
  let payload = {name, subject, code ,description }
  axios.post("http://localhost:9000/createlab", payload)
.then(result => {console.log(result)
navigate('/alab')})
      .catch(err => console.log(err))
      }
    

  return (
    <div style={{display:"flex"}}  >
        <Sidebar/>
        <section style={{paddingTop:"150px",paddingLeft:"30%"}}>
        <div className="add-classroom-container" style={{background:"skyblue",width:"350px"}} >
      <h2>Add Lab</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="text" placeholder="Subject" value={subject} onChange={(e) => setSubject(e.target.value)} />
        <input type="text" placeholder="Sub code " value={code} onChange={(e) => setCode(e.target.value)} />
        <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
        <button type="submit">Create Lab</button>
      </form>
      </div>
      </section>
    </div>
  );
};

export default Acreatelab;
