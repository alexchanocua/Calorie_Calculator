import React, { useEffect, useState } from 'react';
import getAuthUser from '../../CustomHooks/CustomHooks';
import MealCard from '../MealCard/MealCard';
import {userInfo, mealItem, foodItem } from '../../MockData/mockData';
import axios from 'axios';




const Home = () => {
  const user = getAuthUser();
  const today = new Date();
  // format the date to UTC
  const userDate = today.toISOString().slice(0, 10);
  const [mealItems, setMealItems] = useState([]);

  // get the user items
  useEffect( () => {
    console.log(userDate);
    const fetchUserItems = async () => {
      try{
        // check if we have userItems for the current date
        const url = "http://localhost:3000/foodItems/test"
        let userItems = await axios.get(url ,{
          params: {
            date: userDate,
          }
        });
        // check if there is no userItems
        if(userItems.data.error){
          // if there is no food entry then create a new log for the day
          userItems = await axios.post(url, { date: userDate  } );
        } 
        // set the foodEntries items
        const currItems = userItems.data.foodEntries.map((item) => item);
        setMealItems([...currItems]);
      } catch (error) {
        console.log(error);
      }
    }

    fetchUserItems();
  // run whenever the date of the user changes
  },[userDate]);
  // TODO: have a state here to hold the total cals of each meal

  return (
    <>
      <p>Hello, {user.email}</p>
      <MealCard mealName={"breakfast"} mealItems={mealItems} userDate={userDate} userId={user.uid}/>
      <MealCard mealName={"lunch"} mealItems={mealItems} userDate={userDate} userId={user.uid}/>
      <MealCard mealName={"dinner"} mealItems={mealItems} userDate={userDate} userId={user.uid}/>
    </>
    
  )
}

export default Home;