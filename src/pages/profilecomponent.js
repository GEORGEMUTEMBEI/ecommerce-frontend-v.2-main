import React, { useState, useContext,useEffect } from 'react';
import { Box, Card, CardContent, CardActions, Button, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom';

import { AuthContext } from '../auth/auth';


const ProfilePage = () => {
  const [profileData, setProfileData] = useState({});
  const { authTokens, logoutUser } = useContext(AuthContext);
  const [errors, seterrors] = useState({})
  const [success, setsuccess] = useState({})
  
  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${authTokens.access}` },
    };
    fetch('http://127.0.0.1:8000/api/profile/', requestOptions)
      .then((response) => {
        if (response.status === 400) {
            
          return response.json().then((data) => {seterrors(data)});
        } else if (response.status === 200) {
          return response.json().then((data) => {
            setProfileData({
              first_name: data.first_name,
              last_name: data.last_name,
              id_number:data.id_number
              
            });
            console.log(profileData.first_name)
          });
        } else if (response.statusText === 'Unauthorized') {
          logoutUser();
        } else {
          return response.json();
        }
      })
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  }, []); 
  
  return (
    <Card elevation={3}>
        
      <CardContent>
      <Typography variant="h6" component="h4" color= 'red '>
              Profile
        </Typography>  
          {
                errors.detail&& (
                    
                    <Typography variant="h5" component="h4" color= 'red '>
              {errors.detail}
        </Typography>
                )
            }      
        <Typography color="text.secondary" sx={{ mb: 2 }}>
         First Name:{profileData.first_name}        
        </Typography>
        <Typography color="text.secondary" sx={{ mb: 2 }}>
         Last Name: {profileData.last_name}
        </Typography>
        <Typography color="text.secondary" sx={{ mb: 2 }}>
          ID Number: {profileData.id_number}
        </Typography>
        <Typography variant="body2" component="p">
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'flex-end' }}>
        <Link to="/dashboard/edit">
          <Button variant="contained" sx={{ bgcolor: 'success.main' }} endIcon={<EditIcon />}>
            Edit Profile
          </Button>
        </Link>
      </CardActions>
       
    </Card>
  );
};

export default ProfilePage;
