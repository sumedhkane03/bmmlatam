import React, { useState, useEffect } from 'react';
import { auth } from '../Firebase';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from "firebase/auth";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../css/Profile.css'; // Import your profile page styles

const Profile = () => {
  const navigate = useNavigate();

  const [displayName, setDisplayName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [uid, setUid] = useState('');

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setDisplayName(user.displayName);
        setUserEmail(user.email);
        setUid(user.uid);
      } else {
        console.log("user is logged out");
        // Redirect to the login page or handle the signed-out state as needed
      }
    });
  }, []);

  return (
    <div className="profile-container">
      <Navbar />
      <div className="profile-content">
        <div className="profile-header">
          <h1 className="profile-title">{displayName}</h1>
          <p className="profile-email">{userEmail}</p>
        </div>
        <div className="profile-details">
          <p className="profile-uid">User ID: {uid}</p>
          {/* You can add more user information here, such as a profile picture or bio */}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
