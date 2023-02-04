import './App.css';
import { Container, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import MealCard from './Components/MealCard/MealCard';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Login from './Components/Home/Login/Login';

// mock services
const serviceList = ["service 1", "service 2", "service 3"];

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
    <Container>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/home" element={<Home/>}/>

      </Routes>
    </Container>
    

  );
}

export default App;
