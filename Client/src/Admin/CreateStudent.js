// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import '../Faculty/AddClassroom.css';
// import Sidebar from './Sidebar';

// const CreateStudent = () => {
//   const [name, setName] = useState('');
//   const [year, setYear] = useState('');
//   const [department, setDepartment] = useState('');

  
//   let navigate =useNavigate()

//   let handleSubmit = (e) => {
//   e.preventDefault()
//   let payload = {name, year, department }
//   axios.post("http://localhost:9000/create", payload)
// .then(result => {console.log(result)
// navigate('/classroom')})
//       .catch(err => console.log(err))
//       }
    

//   return (
//     <div style={{display:"flex"}}  >
//         <Sidebar/>
//         <section style={{paddingTop:"150px",paddingLeft:"30%"}}>
//         <div className="add-classroom-container" style={{background:"skyblue",width:"350px"}} >
//       <h2>Add Student</h2>
//       <form onSubmit={handleSubmit}>
//         <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
//         <input type="text" placeholder="Subject" value={subject} onChange={(e) => setSubject(e.target.value)} />
//         <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
//         <button type="submit">Create Classroom</button>
//       </form>
//       </div>
//       </section>
//     </div>
//   );
// };

// export default CreateStudent;
