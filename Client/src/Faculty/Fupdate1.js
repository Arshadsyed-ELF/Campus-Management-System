import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import Sidebar from '../Admin/Sidebar'
import { Button } from 'react-bootstrap'

const Fupdate1 = () => {
    const [name,setName]=useState()
    const [department,setDepartment]=useState()
    const [attendance,setAttendance]=useState()
    let { id } = useParams()
    console.log(id)
    let navigate = useNavigate()
    console.log(id)



    useEffect(() => {
        axios.get('http://localhost:9000/getfac/'+ id)
            .then((resp) => {
                console.log(resp)
                setName(resp.data.name)
                setDepartment(resp.data.department)
                setAttendance(resp.data.attendance)     
            })
            .catch(() => {
                console.log(" DIDNT GET")
            })
    }, [])



    let formHandle = (e) => {
        e.preventDefault();
        let payload = { name,department,attendance }
        axios.put(`http://localhost:9000/fupdate1/${id}`,payload)
            .then((res) => {
                console.log(res)
                alert("data updated successfully")
            })
        navigate("/fattendance")
    }
    return (
        <div style={{ display: "flex" }}>
            <Sidebar />
            <div style={{ padding: "50px" }}>
                <form onSubmit={formHandle}>

                    
                    <label>Name</label> <br/>
                    <input placeholder=" Faculty Name" onChange={(e)=> setName(e.target.value)}  value={name} /><br />
                    <label>Department</label> <br/>
                    <input placeholder=" Faculty Department" onChange={(e)=> setDepartment(e.target.value)}  value={department} /><br /> 
                    <label>Attendance</label> <br/>
                    <input placeholder=" Faculty attendance" onChange={(e)=> setAttendance(e.target.value)}  value={attendance} /><br /> <br />


                    <button  style={{border:"1 px solid",background:"blue",color:"white",height:"30px",width:"85px"}}>Update</button>

                </form>
            </div>
        </div>
    )
}

export default Fupdate1