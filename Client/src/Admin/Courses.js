// import React from 'react'
// import AdminDashboard from './AdminDashboard'
// import Table from 'react-bootstrap/Table';
// import Sidebar from './Sidebar';

// const Courses = () => {
//   return (
//     <section style={{display:"flex"}}>
//       <Sidebar/>
     
     
//       <div className='list' style={{paddingLeft:"50px"}}>
//       <h1>Engineering Courses</h1>
//       <br/>

//       <Table striped bordered hover >
//         <thead>
//           <tr>
//             <th>serial no</th>
//             <th>Course Code</th>
//             {/* <th>Course Name</th> */}
//             <th>Department</th>
//             <th>Credits</th>
//             <th>Brochure</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td>1</td>
//             <td>EEE409</td>
//             {/* <td>Introduction to Engineering</td> */}
//             <td>Electrical and Electronics Engineering</td>
//             <td>47</td>
//             <td><a  href='CSE Brochure.pdf' download="cse.pdf">EEE Brochure</a></td>
//           </tr>
//           <tr>
//           <td>2</td>
//             <td>CSE201</td>
//             {/* <td>Programming Fundamentals</td> */}
//             <td>Computer Science</td>
//             <td>47</td>
//             <td><a  href='CSE Brochure.pdf' download="cse.pdf">CSE Brochure</a></td>
//           </tr>
//           <tr>
//           <td>3</td>
//             <td>MECH301</td>
//             {/* <td>Mechanical Design</td> */}
//             <td>Mechanical Engineering</td>
//             <td>47</td>
//             <td><a  href='CSE Brochure.pdf' download="cse.pdf">ME Brochure</a></td>
//           </tr>
//           <tr>
//           <td>4</td>
//             <td>CE305</td>
//             {/* <td>Structural anaylsis</td> */}
//             <td>Civil Engineering</td>
//             <td>47</td>
//             <td><a  href='CSE Brochure.pdf' download="cse.pdf">CE Brochure</a></td>
//           </tr>
//           <tr>
//           <td>5</td>
//             <td>ECE389</td>
//             {/* <td>Artificial Intelligence</td> */}
//             <td>Electronics and Communication Engineering</td>
//             <td>47</td>
//             <td><a  href='CSE Brochure.pdf' download="cse.pdf">ECE Brochure</a></td>
//           </tr>
          
//           {/* Add more rows for other courses */}
//         </tbody>
//       </Table>
//     </div>
//       </section>
//   )
// }

// export default Courses

import React from 'react'
import AdminDashboard from './AdminDashboard'
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faEdit,faTrash,faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import Sidebar from './Sidebar';
import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';



const Courses = () => {
  const [data, setData] = useState([]);
  // const [id,setId]=useState(0)

  //  const ids =setId(
  //   id +1
  //  )
  const navigate=useNavigate()

  useEffect(() => {
    axios.get("http://localhost:9000/getcourse") 
    .then((response) => {
       setData(response.data) 
      })
      .catch(() => {
        console.log("DIDNT GET");
      })
  },[])

  let deleteData=(_id)=>{
    axios.delete(`http://localhost:9000/coursedelete/${_id}`)
    .then( res=>{
      window.location.assign("/courses")
      alert("user deleted")
    })
    .catch(()=>{
      console.log('didnt work')
    })
  

  }
  return (
   <section style={{display:"flex"}} >
 {/* 328979 */}
    
            <Sidebar/> 
         <div className='list'  style={{paddingLeft:"50px", alignItems:"flex-end"}}> <br/> <Button onClick={()=>navigate('/addcourse')}>Add Course</Button>
         <h1> Courses</h1> <br/>
        <Table striped bordered hover  >
          <thead className='list'>
          <tr>
            <th>sl/no</th>
            <th>Course Code</th>
            {/* <th>Course Name</th> */}
            <th>Department</th>
            <th>Credits</th>
            <th>HOD</th>
            <th>Operation</th>

          </tr>
          </thead>
          <tbody className='list'>
            {data.map((item,index) =>
                <tr >
                  <td>{index + 1}</td>
                  {/* <td>{item._id}</td> */}
                  <td>{item.coursecode}</td>
                  <td>{item.department}</td>
                  <td>{item.credits}</td>
                  <td>{item.hod}</td>
                  {/* <td><a  href='CSE Brochure.pdf' download="cse.pdf">ECE Brochure</a></td> */}
                <td>
                <button style={{border:"none",background:"none",paddingRight:"10px"}} ><Link to={`/supdate/${item._id}`} style={{color:"blue",textDecoration:"none"}}><FontAwesomeIcon icon={faEdit} /></Link></button> <span></span> <span></span> <span></span>
                <button onClick={()=>{deleteData(item._id)}} style={{border:"none",background:"none"}}> <FontAwesomeIcon icon={faTrash} style={{color:"red",border:"none"}} /></button>
                {/* <button><Link to={`/reads/${item.id}`}>reads</Link></button> */}
                </td>
                </tr>
              )
            }
          </tbody>
        </Table>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
         </section>
  )
}

export default Courses