import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    axios.post("http://localhost:9000/logout")
      .then(res => {
        console.log(res.data.message);
        navigate('/'); // Redirect to the login page after successful logout
      })
      .catch(err => {
        console.error("Logout error:", err);
        // Handle any errors that occur during logout
      });
  };

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;
