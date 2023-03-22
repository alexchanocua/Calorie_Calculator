import { CardMembershipSharp } from '@mui/icons-material';
import { Box, Button, Paper, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import getAuthUser from '../../CustomHooks/CustomHooks';
import axios from 'axios';


const AddItem = () => {
    const [name, setName] = useState('');
    const [protein, setProtein] = useState('');
    const [carbs, setCarbs] = useState('');
    const [fat, setFat] = useState('');
    const [calories, setCalories] = useState('');
    const [servingSize, setServingSize] = useState('');
    const navigate = useNavigate();
    // userId and setItems function passed as props
    const location = useLocation();
    const mealType = location.state.type;
    const userDate = location.state.date;
 
    const user = getAuthUser();
    
    
    const handleSubmit = async () => {
        const url = `http://localhost:3000/foodItems/${user.uid}`
        // adding the new mealItem doc to foodEntries collection
        const res = await axios.put(url, {
            type: mealType,
            name: name,
            calories: parseInt(calories),
            protein: parseInt(calories),
            carbs: parseInt(carbs),
            fat: parseInt(fat),
            quantity: parseInt(servingSize),
            date: userDate,
        });
        if(res.status === 204){
            navigate('/home');
        } else {
            console.log("Unable to add item");
        }
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
                alignItems: "center", justifyContent: "center", width: "80%"}}
        >
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
                        onClick={handleSubmit}
                        variant='contained'
                        color='primary'
                        fullWidth
                        
                    > Add item </Button>
                </Box>
        </Paper>
    </Box>
  )
}

export default AddItem