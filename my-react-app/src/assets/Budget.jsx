import { db, auth } from "../firebase";

import { useEffect, useState } from 'react';
import './Budget.css'
import { addDoc, collection } from "firebase/firestore";
function Budget({budget,setBudget,expenseSum}){
    const [budgetInputValue, setBudgetInputValue]= useState(0)
    const [BudgetLeft, setBudgetLeft] = useState(null)

    async function handlebudgetAdd(){
        if(budgetInputValue!==""){
            const newBudget = {
                budget:budget
            }
            const DocRef = await addDoc(collection(db, "budget"), newBudget)
            alert("Zmieniono budżet")
            setBudget(parseFloat(budgetInputValue))
            
        }


    }
    
    useEffect(()=>{
        setBudgetLeft(budget-expenseSum)

    }, [expenseSum, budget])
    return(
        <div className="BudgetContainer">
            <h1>Twój budżet to: {budget} zł</h1>
            <p>Zmień</p>
            <h2>Pozostało ci jeszcze {BudgetLeft} zł</h2>
            <input type="number" placeholder='Wpisz swój budżet' onChange={event=>setBudgetInputValue(event.target.value)}/>
            <button onClick={handlebudgetAdd}>Zmień</button>


        </div>
    );

}
export default Budget