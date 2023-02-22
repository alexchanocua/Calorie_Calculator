import { addDoc, arrayUnion, collection, doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase';

const AddItemAPI = async ({ mealItem, user }) => {
    // response object, fields mutated depending on whether document updates and addition were sucessful
    let res = {success: false, error: ""};
    try {
        // adding item to the foodItems collection
        // await addDoc(collection(db, "foodItems"), mealItem);
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
        // API calls to Firestore were successful
        res.success = true;
    } catch (error) {
        // update the error field
        res.error = error;
    }
    return res;
};

export default AddItemAPI;