import { Avatar, Button } from '@mui/material';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';

const AuthDetails = () => {
    const [authUser, setAuthUser] = useState(null);
    const navigate = useNavigate();

    // on mount check if the user is signed in
    useEffect(() => {
        // check if we have a user signed in
        const listen = onAuthStateChanged(auth, (user) => {
            if(user) {
                setAuthUser(user);
            } else {
                setAuthUser(null);
            }
        })
        // if the user wants to sign out then sign it out
        return () => {
            listen();
        }
    }, []);

    // handles sign out
    const handleSignOut = () => {
        signOut(auth).then(() => {console.log('signed out succesfull')
        navigate("/");
        })
        .catch(error => console.log(error));
    }
  return (
        <>  
          {authUser ? 
            <>
                <Avatar sx={{mx: 3}} />
                <Button variant={'contained'} size={'small'} onClick={handleSignOut}>Sign Out</Button>
            </> 
            : <p>Signed Out</p>}
        </>
  );
}

export default AuthDetails;

