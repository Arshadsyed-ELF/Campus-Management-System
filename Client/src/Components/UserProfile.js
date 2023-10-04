import React from 'react';
import { useParams } from 'react-router-dom';
import Logout from './Logout';
import { Button } from 'react-bootstrap';
import Ssidebar from '../Student/Ssidebar';

const UserProfile = () => {
  const { userInfo } = useParams();
  const parsedUserInfo = JSON.parse(decodeURIComponent(userInfo));

  return (
    <div style={{display:"flex"}}>
                <Ssidebar/>
        <section>

      {parsedUserInfo && (
        <div>
          <h1>Welcome, {parsedUserInfo.name}!</h1>
          <p>Email: {parsedUserInfo.email}</p>
          
        </div>    
      )}
      </section>


</div>

  );
};

export default UserProfile;
