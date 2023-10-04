import React from 'react'
import { Table } from 'react-bootstrap'
import { useState,useEffect } from 'react'
import axios from 'axios'
import Ssidebar from './Ssidebar'

const Sattendance = () => {
  const [data, setData] = useState([]);

  
  useEffect(() => {
    axios.get("http://localhost:9000/get") 
    .then((response) => {
       setData(response.data) 
      })
      .catch(() => {
        console.log("DIDNT GET");
      })
  },[])

  return (
    <div style={{display:"flex"}}>
        <Ssidebar />
       
    <div className='list' style={{paddingLeft:"50px"}} >
      <h2> Attendance </h2> <br/>
      <Table striped bordered hover  >
          <thead className='list'>
            <tr className='list'>
            
              <th>sl/no</th>
              <th>Month</th>
              <th>classes</th>
              <th>Percentage</th>
              
              
            </tr>
          </thead>
          <tbody className='list'>
            {/* {data.map((item,index) =>
                <tr >
                 <td>{index +1}</td>
                  <td>march</td>
                  <td></td>
                  <td>{item.attendance}</td>
                 
                </tr>
             
              )
            }
               */}
               <tr>
                <td>1</td>
                <td>June</td>
                <td>21/24</td>
                <td>87%</td>
                </tr>

                <tr>
                <td>2</td>
                <td>July</td>
                <td>20/24</td>
                <td>83%</td>
                </tr>

                <tr>
                <td>3</td>
                <td>August</td>
                <td>20/24</td>
                <td>87%</td>
                </tr>

                <tr>
                <td>4</td>
                <td>September</td>
                <td>18/24</td>
                <td>75%</td>
                </tr>

                <tr>
                <td>5</td>
                <td>October</td>
                <td>22/24</td>
                <td>91%</td>
                </tr>
               
          </tbody>

        
        </Table>
    </div>
    </div>
  )
}

export default Sattendance














// import React from 'react'
// import { Table } from 'react-bootstrap'
// import Ssidebar from './Ssidebar'


// const Sattendance = () => {
//   return (
//     <div style={{display:"flex"}}>
//        <Ssidebar/>
//         <div className='list'  style={{paddingLeft:"50px"}} > 
//         <h1>Attendance</h1>
//         <Table striped bordered hover>
//       <thead>
//         <tr>
//           <th>#</th>
//           <th>Month</th>
//           <th>Percentage</th>
//         </tr>
//       </thead>
//       <tbody>
//         <tr>
//           <td>1</td>
//           <td>janaury</td>
//           <td>93.5%</td>
//         </tr>
//         <tr>
//           <td>2</td>
//           <td>febraury</td>
//           <td>89.5%</td>
          
//         </tr>
//         <tr>
//           <td>3</td>
//           <td >March</td>
//           <td>90%</td>
//         </tr>
//         <tr>
//           <td>4</td>
//           <td >April</td>
//           <td>88.5%</td>
//         </tr>
//         <tr>
//           <td>5</td>
//           <td >May</td>
//           <td>93%</td>
//         </tr>
//         <tr>
//           <td>6</td>
//           <td >June</td>
//           <td>94.5%</td>
//         </tr>
//         <tr>
//           <td>overall</td>
//           <td >-</td>
//           <td>89.3%</td>
//         </tr>
//       </tbody>
//     </Table>
//     </div>
//     </div>
//   )
// }

// export default Sattendance