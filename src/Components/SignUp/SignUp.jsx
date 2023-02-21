import { Box, Button, TextField, Typography } from '@mui/material';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';
import gif from './cbum.gif';


const SignUp = () => {
 // username and password states
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');
 const [confirmedPassword, setConfirmedPassword] = useState('');
 const navigate = useNavigate();

 const handleSignUp = (e) => {
     e.preventDefault();
     // sign in the user with their email and password
     if(password === confirmedPassword){
        createUserWithEmailAndPassword(auth, email, password)
         .then((userCredential) => {
             console.log(userCredential);
             navigate('/home');
         }).catch((error) => {
             console.log(error.code);
             console.log(error.message);
         })
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
        {/* <Paper
            elevation={6}
            sx={{ p: "2", display: "flex", flexDirection: "column",
                alignItems: "center", justifyContent: "center",}}
        > */}
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
        
    </Box>
)
};

export default SignUp