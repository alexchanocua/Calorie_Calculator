import React, { useEffect, useState } from 'react';
import getAuthUser from '../../CustomHooks/CustomHooks';
import MealCard from '../MealCard/MealCard';
import {userInfo, mealItem, foodItem } from '../../MockData/mockData';
import axios from 'axios';




const Home = () => {
  const user = getAuthUser();
  const userDate = '2023-03-09'
  const [mealItems, setMealItems] = useState([]);

  // get the user items
  useEffect( () => {
    const fetchUserItems = async () => {
      try{
        const url = "http://localhost:3000/foodItems/test"
        const userItems = await axios.get(url ,{
          params: {
            date: userDate,
          }
        });
        console.log(userItems);
        const currItems = userItems.data.foodEntries.map((item) => item);
        setMealItems([...currItems]);
      } catch (error) {
        console.log(error);
      }
    }

    fetchUserItems();
    
  },[]);
  // TODO: have a state here to hold the total cals of each meal

  return (
    <>
      <p>Hello, {user.email}</p>
      <MealCard mealName={"breakfast"} mealItems={mealItems} userId={user.uid}/>
      <MealCard mealName={"lunch"} mealItems={mealItems} userId={user.uid}/>
      <MealCard mealName={"dinner"} mealItems={mealItems} userId={user.uid}/>
    </>
    
  )
}

export default Home;