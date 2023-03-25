import { Box, Button, TextField, Typography, Link } from '@mui/material';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';
import axios from 'axios';
import gif from './cbum.gif';
import { Link as RouterLink } from 'react-router-dom';


const SignUp = () => {
 // username and password states
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');
 const [confirmedPassword, setConfirmedPassword] = useState('');
 const [name, setName] = useState('');
 const navigate = useNavigate();

 const handleSignUp = async (e) => {
     e.preventDefault();
     // sign in the user with their email and password
     if(password === confirmedPassword){
        try {
            const createdUser = await createUserWithEmailAndPassword(auth, email, password);
            const url = `http://localhost:3000/users/${createdUser.user.uid}`;
            const response = await axios.post(url, {
                email: email,
                name: name,
            })
            if(response.status === 201){
                console.log("user created successfully");
                navigate('/home');
            } else {
                throw new Error("Failed to create user.");
            }
        } catch (error) {
            console.log(error.code);
            console.log(error.message);
        }
     } else {
        console.log('passwords do not match');
     }
     
 }

return (
    <Box
        sx={{height: "100vh", display: "flex", flexDirection: "column", alignItems: "center",
                justifyContent: "center", }}  
    >
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" margin={2}>
                <img src={gif} alt='giffy' width="400" height="550"/>
                
            </Box>
            <Typography style={{ fontStyle: 'italic',}}>thavage</Typography>
            <form onSubmit={handleSignUp}>
                <TextField
                    variant='standard'
                    label="Email"
                    size="small"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    fullWidth
                    required
                />
                <TextField
                    variant='standard'
                    label="Name"
                    size="small"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    fullWidth
                    required
                />
                <TextField
                    variant='standard'
                    label="Password"
                    size="small"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    fullWidth
                    required
                />
                <TextField
                    variant='standard'
                    label="Confirm Password"
                    size="small"
                    value={confirmedPassword}
                    onChange={(e) => setConfirmedPassword(e.target.value)}
                    fullWidth
                    required
                />
                <Box display="flex"  justifyContent="center">
                    <Button
                        sx={{m: 3,}}
                        type='submit'
                        variant='contained'
                        color='primary'
                        fullWidth
                        
                    > Sign Up </Button>
                </Box>
            </form>
            <RouterLink to="/">
                <Link underline='hover'>
                    Have an account? Log In here ⚒️
                </Link>
            </RouterLink>
    </Box>
)
};

export default SignUp