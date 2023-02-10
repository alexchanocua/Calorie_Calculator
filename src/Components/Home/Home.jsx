import React, { useEffect } from 'react';
import getAuthUser from '../../CustomHooks/CustomHooks';
import MealCard from '../MealCard/MealCard';
import {userInfo, mealItem, foodItem } from '../../MockData/mockData';




const Home = () => {
  const user = getAuthUser();

  // TODO: have a state here to hold the total cals of each meal

  return (
    <>
      <p>Hello, {user.email}</p>
      <MealCard mealName={"Breakfast"} mealItems={mealItem.foodItems} userId={user.uid}/>
      <MealCard mealName={"Lunch"} mealItems={mealItem.foodItems} userId={user.uid}/>
      <MealCard mealName={"Dinner"} mealItems={mealItem.foodItems} userId={user.uid}/>
    </>
    
  )
}

export default Home;