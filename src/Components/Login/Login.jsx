import { Box, Button, Paper, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import gif from './ronnie_coleman.gif';
import { auth } from '../../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';


const Login = () => {
    // username and password states
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // sign in the user with their email and password
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential);
                navigate('/home');
            }).catch((error) => {
                console.log(error);
            })
    }

  return (
    <Box
        sx={{height: "100vh", display: "flex", flexDirection: "column", alignItems: "center",
                justifyContent: "center", }}  
    >
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" margin={2}>
                <img src={gif} alt='giffy' width="400" height="400"/>
                
            </Box>
            <Typography style={{ fontStyle: 'italic',}}>lightweight baby</Typography>
        {/* <Paper
            elevation={6}
            sx={{ p: "2", display: "flex", flexDirection: "column",
                alignItems: "center", justifyContent: "center",}}
        > */}
            <form onSubmit={handleSubmit}>
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
                <Box display="flex"  justifyContent="center">
                    <Button
                        sx={{m: 3,}}
                        type='submit'
                        variant='contained'
                        color='primary'
                        fullWidth
                        
                    > Login </Button>
                </Box>
            </form>
        {/* </Paper> */}
    </Box>
  )
}

export default Login;