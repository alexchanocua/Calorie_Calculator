import './App.css';
import { Container,} from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import NavBar from './Components/NavBar/NavBar';
import AddItem from './Components/AddItem/AddItem';
import getAuthUser from './CustomHooks/CustomHooks';
import { useState } from 'react';
import { getAuth } from 'firebase/auth';

function App() {
  // getting the signed in user
  const auth = getAuth();
  const user = auth.currentUser;

  return (
    <Container sx={{ height: '100vh', width: '100vw',}}>
      {/* <NavBar /> */}
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/home" element={<Home  />} />
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/addItem" element={<AddItem />}/>
      </Routes>
    </Container>
  );
}

export default App;
