import { auth } from '../firebase';


const getAuthUser = () => {
    const user = auth.currentUser;
    return user;
}

export default getAuthUser;