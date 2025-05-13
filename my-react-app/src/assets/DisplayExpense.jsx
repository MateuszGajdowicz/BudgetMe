import { sum } from "firebase/firestore";
import { useEffect, useState } from "react";
import './DisplayExpense.css'

function DisplayExpense({expensesList, setExpensesList,DeleteExpense}){

    return(
        <>

        <div className="ExpensesContainer">
        {expensesList.map((element, index)=>(
            <>

            <div className="SingleExpenseContainer"key={index}>
                <h1>{`${element.name} - ${element.number}`}</h1>
                <h2>
                {`${element.amount} zł - ${element.category}  `}
                </h2>
                <h2>{`${new Date(element.date.seconds * 1000)
            .toLocaleDateString("pl-PL")} ${new Date(element.date.seconds * 1000)
            .toLocaleTimeString("pl-PL", { hour: '2-digit', minute: '2-digit' })}`}</h2>
            <button onClick={()=>{DeleteExpense(element.id)}}>Usuń</button>
            </div>
            </>


        ))}

        </div>

        
        </>
        
    );

}
export default DisplayExpense