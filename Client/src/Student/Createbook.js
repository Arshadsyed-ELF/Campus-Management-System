// components/AddClassroom.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import './AddClassroom.css';
import '../Faculty/AddClassroom.css';
import Ssidebar from './Ssidebar';

const Createbook= () => {
  const [bookname, setBookName] = useState('');
  const [email, setEmail] = useState('');
  const [rollno, setRollno] = useState('');
  const [bookcode, setBookCode] = useState('');

  
  let navigate =useNavigate()

  let handleSubmit = (e) => {
  e.preventDefault()
  let payload = {bookcode, bookname, email,rollno, }
  axios.post("http://localhost:9000/createlibrary", payload)
.then(result => {console.log(result)
navigate('/slibrary')})
      .catch(err => console.log(err))
      }
    

  return (
    <div style={{display:"flex"}}  >
      <Ssidebar/>
        <section style={{paddingTop:"150px",paddingLeft:"30%"}}>
        <div className="add-classroom-container" style={{background:"skyblue",width:"350px"}} >
      <h2>Register for  Book</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Book Name" value={bookname} onChange={(e) => setBookName(e.target.value)} />
        <input type='text' placeholder="Book Code" value={bookcode} onChange={(e) => setBookCode(e.target.value)} />
        <input type="text" placeholder="Roll no" value={rollno} onChange={(e) => setRollno(e.target.value)} />
        <input type="text" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
           <button type="submit">Submit</button>
      </form>
      </div>
      </section>
    </div>
  );
};

export default Createbook;
