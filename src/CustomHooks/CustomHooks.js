import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { auth } from '../firebase';


const getAuthUser = () => {
    const user = auth.currentUser;
    return user;
}

export default getAuthUser;