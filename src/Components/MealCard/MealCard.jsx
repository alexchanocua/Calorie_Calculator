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
const MealCard = ({mealName, mealItems, userDate, setMealItems }) => {
    const [ removedItem, setRemovedItem ] = useState('');
    const navigate = useNavigate();
    // calculating the total calories
    const totalCal = mealItems.reduce((acc, curr) => acc + curr.calories, 0);
    // event handler for adding an item
    const handleAddItem = () => {
        navigate('/addItem', {state: {type: mealName, date: userDate}});
    };

    const handleRemoveItem = () => {
        // updating the parents mealItems
        const newItems = mealItems.filter((item) => {
            if(item.name != removedItem){
                return item;
            }
        })
        setMealItems(newItems);
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
                // <List >
                //     <ListItem>
                //         <ListItemIcon>
                //             {meal.name} : {meal.calories}
                //         </ListItemIcon>
                //     </ListItem>
                // </List>
                <List>
                    <ListItem
                        secondaryAction={
                        <IconButton onClick={() => {
                                setRemovedItem(meal.name);
                                handleRemoveItem();
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