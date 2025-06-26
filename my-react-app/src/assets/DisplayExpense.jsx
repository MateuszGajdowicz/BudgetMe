import { sum } from "firebase/firestore";
import { useEffect, useState } from "react";
import './DisplayExpense.css'

function DisplayExpense({expensesList, setExpensesList,DeleteExpense,displayedExpensesList,setDisplayedExpensesList}){

    const [isListDisplayed, setIsListDisplayed] = useState(true)

    useEffect(()=>{
        if(displayedExpensesList.length===0){
        setIsListDisplayed(false)
        }
        else{
            setIsListDisplayed(true)
        }

    },[displayedExpensesList])
    useEffect(()=>{
        setDisplayedExpensesList(expensesList.sort((a,b)=>b.date-a.date))
    },[expensesList])

    const CurrentTime = new Date()
    const LastWeekDate = new Date();
    LastWeekDate.setDate(CurrentTime.getDate()-7);

    const LastMonthDate = new Date();
    LastMonthDate.setMonth(CurrentTime.getMonth()-1);

    const LastYearDate = new Date();
    LastYearDate.setFullYear(CurrentTime.getFullYear()-1);

    function FilterLastWeek(){
        const LastWeekExpenses = expensesList.filter(element=> element.date.seconds*1000>=LastWeekDate && element.date.seconds*1000<=CurrentTime)
        setDisplayedExpensesList(LastWeekExpenses)
    }

    function FilterLastMonth(){
        const LastMonthExpenses = expensesList.filter(element=>element.date.seconds*1000>=LastMonthDate && element.date.seconds*1000<=CurrentTime)
        setDisplayedExpensesList(LastMonthExpenses)
    }

    function FilterLastYear(){
        const LastYearExpenses = expensesList.filter(element=>element.date.seconds*1000>=LastYearDate && element.date.seconds*1000<=LastYearDate)
        setDisplayedExpensesList(LastYearExpenses)
    }


    function handleDateFilter(event){
        switch(event.target.value){
            case "All":
                setDisplayedExpensesList(expensesList)
                break;
            case "LastWeek":
                FilterLastWeek();
                break;
            case "LastMonth":
                FilterLastMonth();
                break;
            case "LastYear":
                FilterLastYear;
                break;
            
        }

    }

    useEffect(()=>{
        setDisplayedExpensesList(expensesList)
        console.log(expensesList)
    },[expensesList])

    return(
        <>
        <select onChange={handleDateFilter} name="" id="filterSelect">
            <option value="All">Wszystkie</option>
            <option value="LastWeek">Ostatni tydzień</option>
            <option value="LastMonth">Ostatni miesiąc</option>
            <option value="LastYear">Ostatni rok</option>


        </select>

        <div className="ExpensesContainer">

    

        {isListDisplayed?
        
        (displayedExpensesList.map((element, index)=>(

            <div className="SingleExpenseContainer"key={index}>
                <h1>{`${element.name} - ${element.number}`}</h1>
                <h2>
                {`${element.amount} zł - ${element.category}  `}
                </h2>
                <h2>{`${new Date(element.date.seconds * 1000)
            .toLocaleDateString("pl-PL")} ${new Date(element.date.seconds * 1000)
            .toLocaleTimeString("pl-PL", { hour: '2-digit', minute: '2-digit' })}`}</h2>
            <button onClick={()=>{DeleteExpense(element.id)}}>Usuń</button>
            </div>)))
            :
            (
                <h1>Nie udało się znaleźć żadnych wydatków</h1>
            )
        
            
    



}

        </div>

        
        </>
        
    );

}
export default DisplayExpense