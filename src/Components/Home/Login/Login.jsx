import { Box, Button, Paper, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import gif from './ronnie_coleman.gif';


const Login = () => {
    // username and password states
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
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
                    label="Username"
                    size="small"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
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