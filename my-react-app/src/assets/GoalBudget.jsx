import { db, auth } from "../firebase";
import { addDoc, collection, doc, getDoc, getDocs, query,updateDoc,where  } from "firebase/firestore";


import { useEffect, useState } from 'react'
import './GoalBudget.css'
function GoalBudget({user,collectedMoney,setCollectedMoney}){
    const [goalNameValue, setGoalNameValue] = useState("")
    const [goalName, setGoalName] = useState("Brak Celu")
    const [goalPriceValue, setGoalPriceValue] = useState("")
    const [goalPrice, setGoalPrice] = useState(0)
    const [existingDocID, setExistingDocID] = useState(null)
    const [PercentageGoal, setPercentageGoal] = useState(0)
    const [isChangeGoalVisible, setIsChangeGoalVisible] = useState(false)
    const [goalMessage,setGoalMessage] = useState(null)


    const [addedMoney, setAddedMoney] = useState(0)


        async function fetchGoal(){
        const q = query(
            collection(db, "Goal"),
            where("userID","==", user.uid));
        const querySnapshot = await getDocs(q);
        if(!querySnapshot.empty){
            const doc = querySnapshot.docs[querySnapshot.docs.length-1];
            const data = doc.data();
            setGoalName(data.name);
            setGoalPrice(parseFloat(data.price))
            setCollectedMoney(parseFloat(data.collectedMoney))
            setExistingDocID(doc.id);

            }


        }

    async function DeleteCollectedMoney() {
        const docRef = doc(collection(db,"Goal"), existingDocID)
        await updateDoc(docRef, {collectedMoney:0})
        await fetchGoal();
        setGoalMessage("")

    }

    async function handleGoalAdd(){
        if(goalNameValue!==""&& goalPriceValue>0 ){
            if(existingDocID){
                const docRef = doc(collection(db, "Goal"), existingDocID)
                await updateDoc(docRef, {name:goalNameValue,price: parseFloat(goalPriceValue)} )
            }
            else{
                const newGoal = {
                    userID: auth.currentUser.uid,
                    name: goalNameValue,
                    price: parseFloat(goalPriceValue),
                    collectedMoney:0
                }
            const docRef =await addDoc(collection(db,"Goal"), newGoal)
            setExistingDocID(docRef.id)
            }
            alert("Zmieniono cel!")
            fetchGoal();
            setGoalName(goalNameValue)
            setGoalPrice(goalPriceValue)
            setGoalMessage("")
            setGoalNameValue("")
            setGoalPriceValue("")
            


        }
        else{
            alert("Podaj wszystkie informacje")
        }

    }
    
    async function handleMoneyGoalAdd() {
        if(addedMoney!==0){
            let newAmount = collectedMoney+addedMoney
            if(existingDocID){
                const docRef = doc(collection(db, "Goal"), existingDocID);
                await updateDoc(docRef, {collectedMoney: newAmount})
                await fetchGoal()
                alert("Dodano kwotę")
                setAddedMoney("")
 

            }

        }
        else{
            alert("Podaj poprawną kwotę")
        }
        
    }
    useEffect(()=>{
        fetchGoal()
        DeleteCollectedMoney()
    },[user])

    useEffect(()=>{
        setPercentageGoal((collectedMoney/goalPrice)*100)
        if(collectedMoney>=goalPrice){
            setGoalMessage("Gratulacje! Uzbierałeś całą sumę!")
            
    }},[collectedMoney, goalPrice])
    return(
        <div className='GoalBudgetContainer'>
            <h1>Twój cel to: {goalName}</h1>
            <h1>Zebrałeś już {collectedMoney}/{goalPrice} zł</h1>
            <progress value={PercentageGoal} max={100} id="myProgress"></progress>
            <h2>Procentowo to {PercentageGoal.toFixed(2,0)}%</h2>
            <h2>{goalMessage}</h2>
            <p>Dodaj na swój cel</p>
            <input value={addedMoney} type="number" placeholder='Podaj kwotę' onChange={event=>setAddedMoney(parseFloat(event.target.value))}/>
            <button onClick={handleMoneyGoalAdd} >Dodaj</button>
            <br />
            <br />
            <button onClick={DeleteCollectedMoney}>Usuń zebrane pieniądze</button>


            <p onClick={()=>setIsChangeGoalVisible(prev=>!prev)}>Zmień cel</p>
            {isChangeGoalVisible &&
                <>
            <input value={goalNameValue} type="text" placeholder='Podaj nazwę' onChange={event=>setGoalNameValue(event.target.value)}/>
            <input value={goalPriceValue} type="number" placeholder='Podaj cenę' onChange={event=>setGoalPriceValue(parseFloat(event.target.value))}/>
            <button onClick={handleGoalAdd}>Zmień</button>
            </>

            }

        </div>
    )
}

export default GoalBudget