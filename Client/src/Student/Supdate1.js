import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import Sidebar from '../Admin/Sidebar'
import { Button } from 'react-bootstrap'

const Supdate1 = () => {
    
    const [rollno,setRollno]=useState()
    const [name,setName]=useState()
    const [year,setYear]=useState()
    const [department,setDepartment]=useState()
    const [attendance,setAttendance]=useState()

    let { id } = useParams()
    console.log(id)
    let navigate = useNavigate()
    console.log(id)



    useEffect(() => {
        axios.get('http://localhost:9000/getuser/'+id)
            .then((resp) => {
                console.log(resp)
                setRollno(resp.data.rollno)
                setName(resp.data.name)
                setYear(resp.data.year)
                setDepartment(resp.data.department)
                setAttendance(resp.data.attendance)    
            })
            .catch(() => {
                console.log(" DIDNT GET data")
            })
    }, [])



    let formHandle = (e) => {
        e.preventDefault();
        const payload={ rollno,name,year,department,attendance }
        axios.put(`http://localhost:9000/supdate1/${id}`,payload)
            .then((res) => {
                console.log(res)
                alert("data updated successfully")
            })
        navigate("/sattendance")
    }
    return (
        <div style={{ display: "flex" }}>
            <Sidebar />
            <div style={{ padding: "50px" }}>
                <form onSubmit={formHandle}>
                    <label>Roll no</label> <br/>
                    <input placeholder="Student rollno" onChange={(e)=> setRollno(e.target.value)}  value={rollno} /><br /> 
                    <label>Name</label> <br/>
                    <input placeholder=" student Name" onChange={(e)=> setName(e.target.value)}  value={name} /><br />
                    <label>Year</label> <br/>
                    <input placeholder=" Student Year" onChange={(e)=> setYear(e.target.value)}  value={year} /><br /> 
                    <label>Department</label> <br/>
                    <input placeholder=" Student Department" onChange={(e)=> setDepartment(e.target.value)}  value={department} /><br /> 
                    <label>Attendance</label> <br/>
                    <input placeholder=" Student attendance"onChange={(e)=> setAttendance(e.target.value)}  value={attendance} /><br /> <br />
                    <button  style={{border:"1 px solid",background:"blue",color:"white",height:"30px",width:"85px"}}>Update</button>
                    
                </form>
            </div>
        
        </div>
    )
}

export default Supdate1