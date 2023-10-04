// SemesterResults.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SemesterResults = ({ studentId }) => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const response = await axios.get(`/http://localhost:9000/results/student/${studentId}`);
        setResults(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchResults();
  }, [studentId]);

  return (
    <div>
      <h2>Semester Results</h2>
      <ul>
        {results.map((result) => (
          <li key={result._id}>
            Subject: {result.subject}
            Grade: {result.grade}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SemesterResults;
