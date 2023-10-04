import React from 'react';
import { Table } from 'react-bootstrap';

const Academics = ({ semester, subjects }) => {
  const totalMarks = subjects.reduce((total, subject) => total + subject.obtainedMarks, 0);
  const totalMaxMarks = subjects.reduce((total, subject) => total + subject.maxMarks, 0);
  const percentage = (totalMarks / totalMaxMarks) * 100;

  return (
    <div>
      <h2>Computer Science Department - Semester {semester} Report</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Subject</th>
            <th>Maximum Marks</th>
            <th>Obtained Marks</th>
          </tr>
        </thead>
        <tbody>
          {subjects.map((subject, index) => (
            <tr key={index}>
              <td>{subject.name}</td>
              <td>{subject.maxMarks}</td>
              <td>{subject.obtainedMarks}</td>
            </tr>
          ))}
          <tr>
            <td>Total</td>
            <td>{totalMaxMarks}</td>
            <td>{totalMarks}</td>
          </tr>
          <tr>
            <td>Percentage</td>
            <td></td>
            <td>{percentage.toFixed(2)}%</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Academics;
