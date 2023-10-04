import React from 'react'
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';

const Departments = () => {
  return (
    <div >
        <section id='department'>
    
            <h1>department</h1>
        <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>Branch</th>
          <th>HOD</th>
          <th>Email</th>
          <th>Broucher</th>
        
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Computer Science</td>
          <td>Rahul Gandhi</td>
          <td>rahul@gmail.com</td>
          <td><a  href='CSE Brochure.pdf' download="cse.pdf">CSE Brochure</a></td>

        </tr>
        <tr>
          <td>2</td>
          <td>Electronics and Communication</td>
          <td>pawan kalyan</td>
          <td>pawan@gmail.com</td>
          <td><a  href='CSE Brochure.pdf' download="cse.pdf">ECE Brochure</a></td>
        </tr>
        <tr>
          <td>3</td>
          <td >Civil Engineering</td>
          <td>modi</td>
          <td>modi@gmail.com</td>
          <td><a  href='CSE Brochure.pdf' download="cse.pdf">CE Brochure</a></td>
        </tr>
        <tr>
          <td>4</td>
          <td >Mechanical Engineering</td>
          <td>kejriwal</td>
          <td>kejriwal@gmail.com</td>
          <td><a  href='CSE Brochure.pdf' download="cse.pdf">ME Brochure</a></td>
        </tr>
        <tr>
          <td>5</td>
          <td >Electrical Engineering</td>
          <td>amit</td>
          <td>amith@gmail.com</td>
          <td><a  href='CSE Brochure.pdf' download="cse.pdf">EEE Brochure</a></td>
        </tr>
      </tbody>
    </Table>
        
        </section>
   
    </div>
  )
}

export default Departments