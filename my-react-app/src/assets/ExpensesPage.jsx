import "./ExpensesPage.css"
import DisplayExpense from "./DisplayExpense";
import AddExpense from "./NewExpense";
import Summary from "./Summary";
import { useEffect, useState } from "react";
function ExpensesPage({isLogged,user, fetchExpenses,expensesList, setExpensesList,DeleteExpense,displayedExpensesList,setDisplayedExpensesList,setExpenseSum,expenseSum}){

    const [category, setCategory] = useState("")
    function SearchByName(event){
        const searchedName = event.target.value

        console.log(searchedName)
        if(searchedName===""){
            setDisplayedExpensesList(expensesList)
        }
        else{
        const FilteredDisplayList = expensesList.filter(element=>element.name.toLowerCase().includes(searchedName))
        setDisplayedExpensesList(FilteredDisplayList)
        console.log(searchedName)

        }


    }
    function FilterByCategory(event){
        const searchedCategory = event.target.value
        if(category==="Wszystkie"){
            setDisplayedExpensesList(expensesList);

        }
        else{
            const FilteredDisplayList = expensesList.filter(element=>element.category ===searchedCategory);
            setDisplayedExpensesList(FilteredDisplayList)


        }

    }
    function FilterByPrice(event){
        const searchedPrice = parseFloat(event.target.value)
        console.log(searchedPrice)
        if(searchedPrice==="" || isNaN(searchedPrice)){
            setDisplayedExpensesList(expensesList)
        }
        else{
            const FilteredDisplayList = expensesList.filter(element=>element.amount>searchedPrice)
            setDisplayedExpensesList(FilteredDisplayList)

        }

    }
    const [data1, setData1] = useState(null)
    const [data2, setData2] = useState(null)

    function FilterByData(){
        if(data1!==null && data2!==null){
        const selectedDate1 = new Date(data1)
        const selectedDate2 = new Date(data2)
        selectedDate1.setHours(0, 0, 0, 0);
        selectedDate2.setHours(23, 59, 59, 999);
        const FilteredDisplayList = expensesList.filter(element=>new Date(element.date.seconds*1000)>selectedDate1 && new Date(element.date.seconds*1000)<selectedDate2)
        setDisplayedExpensesList(FilteredDisplayList)

        }
        else{
            setDisplayedExpensesList(expensesList)
        }

    }
    useEffect(()=>{
        FilterByData();
    }, [data1,data2])

    
    return(<>
    <div className="expensesPage">
    <DisplayExpense setDisplayedExpensesList={setDisplayedExpensesList} displayedExpensesList={displayedExpensesList} DeleteExpense={DeleteExpense} setExpensesList={setExpensesList} expensesList={expensesList}/>
    <AddExpense user={user}isLogged={isLogged} fetchExpenses={fetchExpenses}/>
    <Summary  displayedExpensesList={displayedExpensesList} expensesList={expensesList} setExpenseSum={setExpenseSum} expenseSum={expenseSum}/>
    <div className="FilterExpensesContainer">
        <input type="text" placeholder="Wyszukaj po nazwie" onChange={event=>SearchByName(event)} />
            <select name="Kategoria" id="" onChange={event=>FilterByCategory(event)}>
                <option value="Wszystkie">Wszystkie</option>
                <option value="Jedzenie">Jedzenie</option>
                <option value="Rozrywka">Rozrywka</option>
                <option value="Sport">Sport</option>
                <option value="Pojazdy">Pojazdy</option>
                <option value="Rachunki">Rachunki</option>
                <option value="Kosmetyki i Uroda">Kosmetyki i Uroda</option>
                <option value="Ubrania">Ubrania</option>
                <option value="Edukacja">Edukacja</option>
                <option value="Zdrowie">Zdrowie</option>
                <option value="Wyjazdy">Wyjazdy</option>
                <option value="Zwierzęta">Zwierzęta</option>
                <option value="Inne">Inne</option>
            </select>
            <input type="date"  onChange={event=>setData1(event.target.value)}/>
            <input type="date" onChange={event=>setData2(event.target.value)}/>
            <input type="number" placeholder="Kwota większa niż..." onChange={event=>FilterByPrice(event)}/>


    </div>
    </div>
    </>);
}
export default ExpensesPage    