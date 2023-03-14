import { Box, Button, Paper, Typography } from '@mui/material';
import { collection, documentId, getDocs, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from '../../firebase';
import { mealItem } from '../../MockData/mockData';
import axios from 'axios';



// TODO: 
    // - props: 
    //  - mealItems: food items
    //  - buttonName: meal button name
const MealCard = ({mealName, mealItems}) => {
    const navigate = useNavigate();

    console.log("mealcard: ", typeof mealItems)
    // const totalCal = getTotalCals(mealItems);
    const totalCal = 100;

    const handleAddItem = () => {
        navigate('/addItem', {state: {type: mealName}});
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