import { db, auth } from "../firebase";

import { useEffect, useState } from 'react';
import './Budget.css'
import { addDoc, collection, doc, getDoc, getDocs, query,updateDoc,where  } from "firebase/firestore";
function Budget({setSingleBudget, budget,setBudget,expenseSum,user,collectedMoney, fetchBudget}){
    const [budgetInputValue, setBudgetInputValue]= useState(0)
    const [BudgetLeft, setBudgetLeft] = useState(null)
    const [existingDocID, setExistingDocID] = useState(null)
    const [isChangeVisible, setIsChangeVisible] = useState(false)
    const [budgetMessage, setbudgetMessage] = useState("")

    async function handlebudgetAdd(){
        if(budgetInputValue!==0){
            if(existingDocID){
                const DocRef = doc(collection(db, "budget"), existingDocID)
                await updateDoc(DocRef, {budget: parseFloat(budgetInputValue)})

            }
            else{
                const newBudget ={
                    userID: auth.currentUser.uid,
                    budget: parseFloat(budgetInputValue)
                }
            const docRef = await addDoc(collection(db,"budget"), newBudget)
            setExistingDocID(docRef.id)
            }

            alert("Zmieniono budżet")
            fetchBudget()
            setIsChangeVisible(false)

            
        }


    }
          async function fetchBudget(){
        const q = query(
            collection(db, "budget"),
            where("userID", "==", user.uid));
        const querySnapshot = await getDocs(q);
        if(!querySnapshot.empty){
            const doc = querySnapshot.docs[querySnapshot.docs.length-1];
            const data = doc.data();
            setBudget(data.budget)
            setExistingDocID(doc.id);

        }
    }  
    


    useEffect(()=>{
        fetchBudget();
    },[user])

    let budgetLeftValue=0;

    useEffect(()=>{
        budgetLeftValue = budget-expenseSum-collectedMoney;
        setBudgetLeft(budgetLeftValue)
        CheckBudgetLeft();

    }, [expenseSum, budget, collectedMoney])

    function CheckBudgetLeft(){
        if(budgetLeftValue>=0.8*budget ){
            setbudgetMessage("Super ci idzie!");
        }
        else if(budgetLeftValue>=0.5 * budget && budgetLeftValue<0.8*budget){
            setbudgetMessage("Jeszcze jest okej")
        }
        else if(budgetLeftValue>=0.3*budget && budgetLeftValue<0.5*budget){
            setbudgetMessage("Może zaczniemy oszczędzać?")

        }
        else if(budgetLeftValue>=0*budget && budgetLeftValue<0.3*budget){
            setbudgetMessage("Klepiemy biede :((")
        }
        else if(budgetLeftValue<=0 ){
            setbudgetMessage("Nie masz już środków do wydania!!!")

        

    }
}
useEffect(()=>{
    console.log("Budget props:", { collectedMoney, budget, expenseSum });

},[])
    return(
        <div className="BudgetContainer">
            <h1>Twój budżet to: {budget} zł</h1>
            <h2>Pozostało ci jeszcze {BudgetLeft} zł</h2>
            <p onClick={()=>setIsChangeVisible(prev=>!prev)}>Zmień</p>
            {isChangeVisible &&
            <>
                <input type="number" placeholder='Wpisz swój budżet' onChange={event=>setBudgetInputValue(parseFloat(event.target.value))}/>
                <button onClick={handlebudgetAdd}>Zmień</button>
            </>
            
            }
            <h1>{budgetMessage}</h1>




        </div>
    );

}
export default Budget