import React from 'react';
// import ComputerScienceMarkSheet from './ComputerScienceMarkSheet';
import Academics from './Academics';
import Ssidebar from './Ssidebar';
import { Button } from 'react-bootstrap';

const Academics1 = () => {
    const semester1Subjects = [
        { name: 'Introduction to Programming', maxMarks: 100, obtainedMarks: 90 },
        { name: 'Discrete Mathematics', maxMarks: 100, obtainedMarks: 85 },
        { name: 'Digital Logic', maxMarks: 100, obtainedMarks: 78 },
        // Add more subjects for Semester 1
      ];
    
      const semester2Subjects = [
        { name: 'Data Structures', maxMarks: 100, obtainedMarks: 92 },
        { name: 'Algorithms', maxMarks: 100, obtainedMarks: 88 },
        { name: 'Database Systems', maxMarks: 100, obtainedMarks: 76 },
        // Add more subjects for Semester 2
      ];
      const semester3Subjects = [
        { name: 'Operating Systems', maxMarks: 100, obtainedMarks: 85 },
        { name: 'Computer Networks', maxMarks: 100, obtainedMarks: 92 },
        { name: 'Database Management', maxMarks: 100, obtainedMarks: 78 },
        // Add more subjects for Semester 3
      ];
    
      const semester4Subjects = [
        { name: 'Software Engineering', maxMarks: 100, obtainedMarks: 88 },
        { name: 'Web Development', maxMarks: 100, obtainedMarks: 76 },
        { name: 'Machine Learning', maxMarks: 100, obtainedMarks: 90 },
        // Add more subjects for Semester 4
      ];
    
      const semester5Subjects = [
        { name: 'Artificial Intelligence', maxMarks: 100, obtainedMarks: 85 },
        { name: 'Cybersecurity', maxMarks: 100, obtainedMarks: 92 },
        { name: 'Software Testing', maxMarks: 100, obtainedMarks: 78 },
        // Add more subjects for Semester 5
      ];
  return (
    <div style={{display:"flex"}}>
       <div style={{position:"fixed"}}>
       <Ssidebar />
       </div>
 <div  style={{paddingLeft:"250px"}}>

 <Academics semester={1} subjects={semester1Subjects} /> <Button ><a  href='result.pdf' download="result.pdf" style={{color:'white'}}>Download Result</a> </Button>
     <Academics semester={2} subjects={semester2Subjects} /> <Button ><a  href='result.pdf' download="result.pdf" style={{color:'white'}}>Download Result</a> </Button>
      <Academics semester={3} subjects={semester3Subjects} />  <Button ><a  href='result.pdf' download="result.pdf" style={{color:'white'}}>Download Result</a> </Button>
      
 </div>
    </div>
  );
};

export default Academics1;
