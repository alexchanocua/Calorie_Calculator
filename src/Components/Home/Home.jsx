import React, { useEffect } from 'react';
import getAuthUser from '../../CustomHooks/CustomHooks';
import MealCard from '../MealCard/MealCard';
import {userInfo, mealItem, foodItem } from '../../MockData/mockData';
import { collection, getDoc, getDocs, where } from 'firebase/firestore';
import { db } from '../../firebase';



const Home = () => {
  const user = getAuthUser();

  
  // TODO: have a state here to hold the total cals of each meal

  return (
    <>
      <p>Hello, {user.email}</p>
      <MealCard mealName={"Breakfast"} mealItems={mealItem.foodItems}/>
      <MealCard mealName={"Lunch"} mealItems={mealItem.foodItems}/>
      <MealCard mealName={"Dinner"} mealItems={mealItem.foodItems}/>
    </>
    
  )
}

export default Home;