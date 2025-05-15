import { db, auth } from "../firebase";
import { addDoc, collection, doc, getDoc, getDocs, query,updateDoc,where  } from "firebase/firestore";


import { useEffect, useState } from 'react'
import './GoalBudget.css'
function GoalBudget({user}){
    const [goalNameValue, setGoalNameValue] = useState("")
    const [goalName, setGoalName] = useState("Gówno")
    const [goalPriceValue, setGoalPriceValue] = useState("")
    const [goalPrice, setGoalPrice] = useState("")
    const [existingDocID, setExistingDocID] = useState(null)

    async function handleGoalAdd(){
        if(goalNameValue!==""&& goalPriceValue!==0){
            if(existingDocID){
                const docRef = doc(collection(db, "Goal"), existingDocID)
                await updateDoc(docRef, {name:goalNameValue,price: parseFloat(goalPriceValue)} )
            }
            else{
                const newGoal = {
                    userID: auth.currentUser.uid,
                    name: goalNameValue,
                    price: parseFloat(goalPriceValue)
                }
            const docRef =await addDoc(collection(db,"Goal"), newGoal)
            setExistingDocID(docRef.id)
            }
            alert("Zmieniono cel!")
            fetchGoal();
            setGoalName(goalNameValue)
            setGoalPrice(goalPriceValue)


        }
        else{
            alert("Podaj wszystkie informacje")
        }

    }
    async function fetchGoal(){
        const q = query(
            collection(db, "Goal"),
            where("userID","==", user.uid));
        const querySnapshot = await getDocs(q);
        if(!querySnapshot.empty){
            const doc = querySnapshot.docs[querySnapshot.docs.length-1];
            const data = doc.data();
            setGoalName(data.name);
            setGoalPrice(data.price)
            setExistingDocID(doc.id);

        }

        
    }
    useEffect(()=>{
        fetchGoal()
    },[user])
    return(
        <div className='GoalBudgetContainer'>
            <h1>Twój cel to: {goalName}</h1>
            <h1>Zebrałeś już ... na {goalPrice}</h1>
            <h2>Procentowo to ....</h2>
            <p>Dodaj na swój cel</p>
            <input type="text" placeholder='Podaj kwotę'/>
            <button>Dodaj</button>

            <p>Zmień cel</p>
            <input type="text" placeholder='Podaj nazwę' onChange={event=>setGoalNameValue(event.target.value)}/>
            <input type="number" placeholder='Podaj cenę' onChange={event=>setGoalPriceValue(event.target.value)}/>
            <button onClick={handleGoalAdd}>Zmień</button>
        </div>
    )
}
export default GoalBudget