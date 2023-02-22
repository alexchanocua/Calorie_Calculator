import { Box, Button, Paper, Typography } from '@mui/material';
import { collection, documentId, getDocs, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from '../../firebase';
import { mealItem } from '../../MockData/mockData';



// TODO: 
    // - props: 
    //  - mealItems: food items
    //  - buttonName: meal button name
const MealCard = ({mealName, userId}) => {
    const navigate = useNavigate();
    const [currItems, setItems] = useState([]);
    const [mealItems, setMealItems] = useState([]);

    const getMealItems = async (userId) => {
        // building query
        const q = query(collection(db, "userItems"), where(documentId(), '==', userId));
        const querySnapShot = await getDocs(q);
        const tempItems = [];
        querySnapShot.forEach((doc, i) => {
            tempItems.push(doc.data().mealItems);
        })
        
        setMealItems(...tempItems);
    }

    const getTotalCals = (items) => {
        if(items && items.length > 0) {
            return mealItems.reduce(
                (acc, currVal) => acc + currVal.calories,
                0,
            );
        } else {
            return 0;
        }
    }

    useEffect(()  => {
        const getItems = async () => {
            try {
                const q = query(collection(db, "userItems"), where(documentId(), '==', userId));
                const querySnapShot = await getDocs(q);
                const tempItems = [];
                querySnapShot.forEach((doc, i) => {
                    tempItems.push(doc.data().mealItems);
                })
        
                let myItems = tempItems[0].filter((item) => {
                    return item.type === mealName;
                })
                setMealItems([...myItems]);
            } catch (error) {
                console.log(error);
            }
        }
        getItems();

    },[userId]);
    
    const totalCal = getTotalCals(mealItems);

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