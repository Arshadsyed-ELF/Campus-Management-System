import React from 'react'
import AdminDashboard from './AdminDashboard'
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import Sidebar from './Sidebar'

const Dashboard = () => {
  return (
    <div style={{display:"flex"}}>
       <Sidebar  />
       {/* <AdminDashboard/> */}
        <img src='https://www.inetsoft.com/blog/wp-content/uploads/2019/05/enrollment.png' style={{height:"600px"}}/>
        {/* <Card style={{ width: '20rem',height:"12rem" }}>
      <ListGroup variant="flush">
        <ListGroup.Item style={{ height: '3rem',background:"green" }}>Applications</ListGroup.Item>
        <ListGroup.Item style={{ height: '7rem',background:"yellowgreen",color:"white",alignItems:"center",display:"flex",justifyContent:"center",fontSize:"40px" }}><strong >14,489</strong></ListGroup.Item>
        <ListGroup.Item style={{ height: '2.5rem',background:"black",color:'white' }}>18,967</ListGroup.Item>
      </ListGroup>
    </Card> */}

    </div>
  )
}

export default Dashboard