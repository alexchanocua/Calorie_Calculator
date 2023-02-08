import { CardMembershipSharp } from '@mui/icons-material';
import { Box, Button, Paper, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';


const AddItem = () => {
    const [name, setName] = useState('');
    const [protein, setProtein] = useState('');
    const [carbs, setCarbs] = useState('');
    const [fat, setFat] = useState('');
    const [calories, setCalories] = useState();
    const [servingSize, setServingSize] = useState();

    
    const handleSubmit = () => {
        
    };

  return (
    <Box
        sx={{height: "100vh", display: "flex", flexDirection: "column", alignItems: "center",
                justifyContent: "center", }}  
    >
            <Typography style={{ fontStyle: 'italic',}}>Add your item</Typography>
        <Paper
            elevation={6}
            sx={{ p: "2", display: "flex", flexDirection: "column",
                alignItems: "center", justifyContent: "center",}}
        >
            <form onSubmit={handleSubmit}>
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
                    label="Protein"
                    size="small"
                    value={protein}
                    onChange={(e) => setProtein(e.target.value)}
                    fullWidth
                    required
                />
                <TextField
                    variant='standard'
                    label="Carbs"
                    size="small"
                    value={carbs}
                    onChange={(e) => setCarbs(e.target.value)}
                    fullWidth
                    required
                />
                <TextField
                    variant='standard'
                    label="Fat"
                    size="small"
                    value={fat}
                    onChange={(e) => setFat(e.target.value)}
                    fullWidth
                    required
                />
                <TextField
                    variant='standard'
                    label="Calories per serving"
                    size="small"
                    value={calories}
                    onChange={(e) => setCalories(e.target.value)}
                    fullWidth
                    required
                />
                <TextField
                    variant='standard'
                    label="Serving Size"
                    size="small"
                    value={servingSize}
                    onChange={(e) => setServingSize(e.target.value)}
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
                        
                    > Add item </Button>
                </Box>
            </form>
        </Paper>
    </Box>
  )
}

export default AddItem