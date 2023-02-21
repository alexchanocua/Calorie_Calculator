import { CardMembershipSharp } from '@mui/icons-material';
import { Box, Button, Paper, TextField, Typography } from '@mui/material';
import { addDoc, arrayUnion, collection, doc, documentId, getDoc, query, setDoc, updateDoc, where, } from 'firebase/firestore';
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import getAuthUser from '../../CustomHooks/CustomHooks';
import { db } from '../../firebase';


const AddItem = () => {
    const [name, setName] = useState('');
    const [protein, setProtein] = useState('');
    const [carbs, setCarbs] = useState('');
    const [fat, setFat] = useState('');
    const [calories, setCalories] = useState('');
    const [servingSize, setServingSize] = useState('');
    const navigate = useNavigate();
    // userId and setItems function passed as props
    const location = useLocation();
    const user = getAuthUser();
    
    
    const handleSubmit = async () => {
        // buidling mealItem
        const mealItem = {
            name: name,
            protein: parseInt(calories),
            carbs: parseInt(carbs),
            fat: parseInt(fat),
            calories: parseInt(calories),
            servingSize: parseInt(servingSize),
        }
        // adding the new mealItem doc to foodItems collection
        try {
            // adding item to the foodItems collection
            await addDoc(collection(db, "foodItems"), mealItem);
            const docRef = doc(db, "userItems", user.uid);
            // check if the user has items already
            const docSnap = await getDoc(docRef);
            if(docSnap.exists()) {
            // updating the meals new item with old items
            await updateDoc(docRef, {"mealItems": arrayUnion(mealItem)}, {merge: true});
            } else {
                // add the new document to the user items
                await setDoc(doc(db, "userItems", `${user.uid}`), {mealItems: [mealItem]});
            }
            // const docSnap = await getDoc(docRef);
            navigate('/home');
            
        } catch (error) {
            console.log(error);
        }
    };

  return (
    <Box
        sx={{height: "100vh", display: "flex", flexDirection: "column", alignItems: "center",
                justifyContent: "center", }}  
    >
            <Typography style={{ fontStyle: 'italic',}}>Add your item</Typography>
        <Paper
            elevation={6}
            sx={{ p: "2", display: "flex", flexDirection: "column",
                alignItems: "center", justifyContent: "center", width: "80%"}}
        >
                <TextField
                    variant='standard'
                    label="Name"
                    size="small"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    fullWidth
                    required
                />
                <TextField
                    variant='standard'
                    label="Protein"
                    size="small"
                    value={protein}
                    onChange={(e) => setProtein(e.target.value)}
                    fullWidth
                    required
                />
                <TextField
                    variant='standard'
                    label="Carbs"
                    size="small"
                    value={carbs}
                    onChange={(e) => setCarbs(e.target.value)}
                    fullWidth
                    required
                />
                <TextField
                    variant='standard'
                    label="Fat"
                    size="small"
                    value={fat}
                    onChange={(e) => setFat(e.target.value)}
                    fullWidth
                    required
                />
                <TextField
                    variant='standard'
                    label="Calories per serving"
                    size="small"
                    value={calories}
                    onChange={(e) => setCalories(e.target.value)}
                    fullWidth
                    required
                />
                <TextField
                    variant='standard'
                    label="Serving Size"
                    size="small"
                    value={servingSize}
                    onChange={(e) => setServingSize(e.target.value)}
                    fullWidth
                    required
                />
                <Box display="flex"  justifyContent="center">
                    <Button
                        sx={{m: 3,}}
                        onClick={handleSubmit}
                        variant='contained'
                        color='primary'
                        fullWidth
                        
                    > Add item </Button>
                </Box>
        </Paper>
    </Box>
  )
}

export default AddItem