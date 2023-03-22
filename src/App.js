import './App.css';
import { Container,} from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import NavBar from './Components/NavBar/NavBar';
import AddItem from './Components/AddItem/AddItem';
import getAuthUser from './CustomHooks/CustomHooks';

function App() {
  return (
    <Container>
      <NavBar />
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
