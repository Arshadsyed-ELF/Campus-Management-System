// components/AddClassroom.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import '../Faculty/AddClassroom.css'
import Sidebar from './Sidebar';

const Addhostel = () => {
  const [hostelname, setHostelname] = useState('');
  const [rooms, setRooms] = useState('');
  const [capacity, setCapacity] = useState('');

  
  let navigate =useNavigate()

  let handleSubmit = (e) => {
  e.preventDefault()
  let payload = {hostelname, rooms, capacity }
  axios.post("http://localhost:9000/createhostel", payload)
.then(result => {console.log(result)
navigate('/hostel')})
      .catch(err => console.log(err))
      }
    

  return (
    <div style={{display:"flex"}}  >
        <Sidebar/>
        <section style={{paddingTop:"150px",paddingLeft:"30%"}}>
        <div className="add-classroom-container" style={{background:"skyblue",width:"350px"}} >
      <h2>Add Hostel</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="hostel name" value={hostelname} onChange={(e) => setHostelname(e.target.value)} />
        <input type="number" placeholder="number of rooms" value={rooms} onChange={(e) => setRooms(e.target.value)} />
        <input type="number" placeholder="capacity per room" value={capacity} onChange={(e) => setCapacity(e.target.value)} />
        <button type="submit">Create Hostel</button>
      </form>
      </div>
      </section>
    </div>
  );
};

export default Addhostel;
