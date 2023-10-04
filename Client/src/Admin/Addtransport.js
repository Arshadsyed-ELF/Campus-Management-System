// components/AddClassroom.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import '../Faculty/AddClassroom.css'
import Sidebar from './Sidebar';

const Addtransport = () => {
  const [drivername, setDrivername] = useState('');
  const [route, setRoute] = useState('');
  const [busno, setBusno] = useState('');
  const [capacity, setCapacity] = useState('');

  
  let navigate =useNavigate()

  let handleSubmit = (e) => {
  e.preventDefault()
  let payload = {drivername, route, busno,capacity }
  axios.post("http://localhost:9000/createtransport", payload)
.then(result => {console.log(result)
navigate('/transport')})
      .catch(err => console.log(err))
      }
    

  return (
    <div style={{display:"flex"}}  >
        <Sidebar/>
        <section style={{paddingTop:"150px",paddingLeft:"30%"}}>
        <div className="add-classroom-container" style={{background:"skyblue",width:"350px"}} >
      <h2>Add Bus</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Driver Name" value={drivername} onChange={(e) => setDrivername(e.target.value)} />
        <input type="text" placeholder="Route" value={route} onChange={(e) => setRoute(e.target.value)} />
        <input type="number" placeholder="Bus No" value={busno} onChange={(e) => setBusno(e.target.value)} />
        <input type="number" placeholder="capacity per Bus" value={capacity} onChange={(e) => setCapacity(e.target.value)} />
        <button type="submit">Create Bus</button>
      </form>
      </div>
      </section>
    </div>
  );
};

export default Addtransport;
