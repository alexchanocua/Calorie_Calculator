import { Box, Button, Paper, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { mealItem } from '../../MockData/mockData';



// TODO: 
    // - props: 
    //  - mealItems: food items
    //  - buttonName: meal button name
const MealCard = ({mealName, mealItems}) => {
    const navigate = useNavigate();

    const getTotalCals = (items) => {
        if(items) {
            return mealItems.reduce(
                (acc, currVal) => acc + currVal.calories,
                0,
            );
        } else {
            return 0;
        }
    }

    const totalCal = getTotalCals(mealItems);

    const handleAddItem = () => {
        navigate('/addItem');
    };

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
            <Typography variant='h6' sx={{m: 2}}>{mealName}: {totalCal} calories</Typography>
            {totalCal > 0 ? mealItems.map((meal) => (
                <ul>
                    <li>
                        {meal.name} : {meal.calories}
                    </li>
                </ul>
            )) : <p>No items</p>}
            <Box 
                sx={{display:'flex', justifyContent: 'flex-end',}}
            >
                {/* TODO: add link to food item page */}
                <Button sx={{m: 2}} onClick={handleAddItem} variant='contained'> Add to {mealName}</Button>
            </Box>
        </Paper>
    </Box>
  )
};

export default MealCard;