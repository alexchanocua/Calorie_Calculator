import React, { useEffect, useState } from 'react';
import getAuthUser from '../../CustomHooks/CustomHooks';
import MealCard from '../MealCard/MealCard';
import axios from 'axios';
import { Box, Typography } from '@mui/material';
import { getAuth } from 'firebase/auth';
import DateChangerButton from '../DateChangerButton/DateChangerButton';
import NavBar from '../NavBar/NavBar';




const Home = () => {
  const user = getAuthUser();
  const today = new Date();
  const [currDate, setCurrDate] = useState(today.toISOString().slice(0, 10));
  const [ protein, setProtein ] = useState(0);
  const [ fat, setFat ] = useState(0);
  const [ carbs, setCarbs ] = useState(0);
  const [ totalCalories, setTotalCalories ] = useState(0);
  const [breakfastItems, setBreakfastItems ] = useState([]);
  const [lunchItems, setLunchItems ] = useState([]);
  const [dinnerItems, setDinnerItems ] = useState([]);

  // function to filter items based on their type
  const filterMealItems = (items, type) => {
    const filteredItems = items.filter((item) => item.type === type);
    return filteredItems;
  }

  // get the user items
  useEffect( () => {
    const fetchUserItems = async () => {
      try{
        // check if we have userItems for the current date
        const url = `http://localhost:3000/foodItems/${user.uid}`
        let userItems = await axios.get(url ,{
          params: {
            date: currDate,
          }
        });
        // check if there is no userItems
        if(userItems.data.error){
          // if there is no food entry then create a new log for the day
          userItems = await axios.post(url, { date: currDate  } );
        } 
        // set the foodEntries items and other values
        setProtein(userItems.data.totalProtein);
        setFat(userItems.data.totalFat);
        setCarbs(userItems.data.totalCarbs);
        setTotalCalories(userItems.data.totalCals);
        const currItems = userItems.data.foodEntries.map((item) => item);
        setBreakfastItems(filterMealItems(currItems, 'breakfast'));
        setLunchItems(filterMealItems(currItems, 'lunch'));
        setDinnerItems(filterMealItems(currItems, 'dinner'));
      } catch (error) {
        console.log(error);
      }
    }
    // fetching user items
    fetchUserItems();
  // run whenever the date of the user changes
  },[currDate, user.uid]);

  return (
    <>
      <NavBar />
      <Box sx={{display: 'flex', justifyContent: 'center'}}>
        <DateChangerButton dateStr={currDate} setDate={setCurrDate} action={'decrease'} type={'Prev'}/>
        <Typography sx={{ textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center'}}> {currDate} </Typography>
        <DateChangerButton dateStr={currDate} setDate={setCurrDate} action={'increase'} type={'Next'}/>
      </Box>
      <Typography>Todays Calories: {totalCalories} </Typography>
      <Typography>Todays Macros: Protein: {protein} | Fat: {fat} | Carbs | {carbs} </Typography>
      <MealCard mealName={"breakfast"} userDate={currDate} setMealItems={setBreakfastItems} mealItems={breakfastItems} userId={user.uid}/>
      <MealCard mealName={"lunch"} userDate={currDate} setMealItems={setLunchItems} mealItems={lunchItems} userId={user.uid}/>
      <MealCard mealName={"dinner"} userDate={currDate} setMealItems={setDinnerItems} mealItems={dinnerItems} userId={user.uid}/>
    </>
    
  )
}

export default Home;