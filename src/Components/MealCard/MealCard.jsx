import { Box, Button, Paper, Typography } from '@mui/material';
import React from 'react';

const foodItems = ['Rice', 'Fish', 'Milk', 'Carne'];
const buttonName = "Add Breakfast"

// TODO: 
    // - props: 
    //  - mealItems: food items
    //  - buttonName: meal button name
const MealCard = () => {

  return (
    <Box 
        sx={{display: 'grid', gridTemplateColumns: '1fr', justifyContent: 'center',}}
    >
        <Paper
            textAlign='center'
            lineHeight='60px'
            elevation={12}
            sx={{mt: 3}}
            
        >
            <Typography variant='h6' sx={{m: 2}}>Meal: X calories</Typography>
            {foodItems.map((item) => (
                <ul>
                    <li>
                        {item}
                    </li>
                </ul>
            ))}
            <Box 
                sx={{display:'flex', justifyContent: 'flex-end',}}
            >
                {/* TODO: add link to food item page */}
                <Button sx={{m: 2}}variant='contained'>{buttonName}</Button>
            </Box>
        </Paper>
    </Box>
  )
};

export default MealCard;