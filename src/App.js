import './App.css';
import { Container,} from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import NavBar from './Components/NavBar/NavBar';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { auth } from './firebase';
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute';
import getAuthUser from './CustomHooks/CustomHooks';
import AddItem from './Components/AddItem/AddItem';


function App() {

  return (
    // <Container>
    //   <Typography
    //     variant="h1"
    //     sx={{ my: 4, textAlign: "center", color: "primary.main"}}
    //   >
    //     Services
    //   </Typography>
    //   {/* mock services */}
    //   <Typography variant="h2">Overview</Typography>
    //   <Box sx={{
    //     pt: 4,
    //     display: "flex",
    //     flexDirection: "row",
    //     justifyContent: "space-between",
    //     gap: 4

    //   }}>
    //     {serviceList.map((service) => (
    //       <Paper elevation={3}>
    //         <Box sx={{ m: 3}}> 
    //           <Typography variant="h3">{service}</Typography>
    //           <Typography sx={{ mt: 2}}>
    //             Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    //           </Typography>
    //         </Box>
    //       </Paper>
    //     ))}
    //   </Box>
    // </Container>
    <>
    
    <Container>
      <NavBar />
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/home" element={<Home/>} />
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/addItem" element={<AddItem />}/>
      </Routes>
    </Container>
    </>

  );
}

export default App;
