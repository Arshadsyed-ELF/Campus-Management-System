import React from 'react'
import FacultyDashboard from './Fsidebar'
import Table from 'react-bootstrap/Table';
import { useState } from 'react';
import Fsidebar from './Fsidebar';

const TimeTable = () => {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    const times = [
      '8:00 - 9:30',
      '9:45 - 11:15',
      '11:30 - 1:00',
      '2:00 - 3:30',
    ];
  
    const timetableData = [
      ['Mathematics', 'Physics', 'Computer Science', 'Chemistry'],
      ['Computer Science', 'Chemistry', 'Mathematics', 'Physics'],
      ['Electrical Engineering', 'Mechanical Engineering', 'Digital Logic', 'Engineering Drawing'],
      ['Data Structures', 'Control Systems', 'Thermodynamics', 'Algorithms'],
      ['Software Engineering', 'Signal Processing', 'Fluid Mechanics', 'Database Management'],
    ];
  return (
    <div style={{display:"flex"}}>
        <Fsidebar/>
        <div className='list' style={{paddingLeft:"50px"}} > 
        <h1> Time Table</h1> <br/>   <br/>
      <Table striped bordered hover >
        <thead>
          <tr>
            <th>Day/Time</th>
            {times.map((time, index) => (
              <th key={index}>{time}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {days.map((day, dayIndex) => (
            <tr key={dayIndex}>
              <td>{day}</td>
              {timetableData[dayIndex].map((course, courseIndex) => (
                <td key={courseIndex}>{course}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
  </div>

        </div>
  )
}

export default TimeTable