import { sum } from "firebase/firestore";
import { useEffect, useState } from "react";
import './DisplayExpense.css'

function DisplayExpense({expensesList, setExpensesList,DeleteExpense}){


    const CurrentTime = new Date()
    const LastWeekDate = new Date();
    LastWeekDate.setDate(CurrentTime.getDate()-1);

    const LastMonthDate = new Date();
    LastMonthDate.setDate(CurrentTime.getDate()-2);

    const LastYearDate = new Date();
    LastYearDate.setDate(CurrentTime.getFullYear()-1);

    function FilterLastWeek(){
        const LastWeekExpenses = expensesList.filter(element=> element.date.seconds*1000>=LastWeekDate && element.date.seconds*1000<=CurrentTime)
        setExpensesList(LastWeekExpenses)
    }

    function FilterLastMonth(){
        const LastMonthExpenses = expensesList.filter(element=>element.date.seconds*1000>=LastMonthDate && element.date.seconds*1000<=CurrentTime)
        setExpensesList(LastMonthExpenses)
    }

    function FilterLastYear(){
        const LastYearExpenses = expensesList.filter(element=>element.date.seconds*1000>=LastYearDate && element.date.seconds*1000<=LastYearDate)
        setExpensesList(LastYearExpenses)
    }

    useEffect(()=>{
        setExpensesList(expensesList)
    },[expensesList])

    return(
        <>

        <div className="ExpensesContainer">
        <button onClick={FilterLastWeek}>Ostatni tydzień</button>
        <button onClick={FilterLastMonth}>Ostatni miesiąć</button>
        <button>Ostatni rok</button>
    

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