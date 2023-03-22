import { Avatar, Box, Button, IconButton, List, ListItem, ListItemAvatar, ListItemText, Paper, Typography } from '@mui/material';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import ClearIcon from '@mui/icons-material/Clear';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';



// TODO: 
    // - props: 
    //  - mealItems: food items
    //  - buttonName: meal button name
const MealCard = ({mealName, mealItems, userDate, setMealItems, userId }) => {
    const navigate = useNavigate();
    // calculating the total calories
    const totalCal = mealItems.reduce((acc, curr) => acc + curr.calories, 0);

    const filterMealItems = (items, type) => {
        const filteredItems = items.filter((item) => item.type === type);
        return filteredItems;
      }
    // event handler for adding an item
    const handleAddItem = () => {
        navigate('/addItem', {state: {type: mealName, date: userDate, userId: userId}});
    };

    const handleRemoveItem = async (meal) => {
        console.log(meal._id);
        try {
            const url = `http://localhost:3000/foodItems/${userId}`;
            const newItems = await axios.delete(url, {
                data:{
                    foodId: meal._id,
                    date: userDate,
                    calories: meal.calories,
                    protein: meal.protein,
                    fat: meal.fat,
                    carbs: meal.carbs,
                    quantity: meal.quantity 
                }
                
            });
            const currItems = newItems.data.foodEntries.map((item) => item);
            setMealItems(filterMealItems(currItems, mealName ));
        } catch (error) {
            console.log(error);
        }
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
                <List>
                    <ListItem
                        key={meal._id}
                        secondaryAction={
                        <IconButton onClick={() => {
                                handleRemoveItem(meal);
                            }} 
                            edge="end" aria-label="delete">
                            <ClearIcon  />
                        </IconButton>
                        }
                    >
                        <ListItemAvatar>
                        <Avatar>
                            <RestaurantMenuIcon />
                        </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary={`${meal.name} : ${meal.calories}`}
                        />
                    </ListItem>
              </List>
            )) :<List><ListItem><ListItemText primary={'No items added'} /></ListItem></List>}
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