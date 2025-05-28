import "./ExpensesPage.css"
import DisplayExpense from "./DisplayExpense";
import AddExpense from "./NewExpense";
import Summary from "./Summary";
import { useEffect, useState, useRef } from "react";
function ExpensesPage({isLogged,user, fetchExpenses,expensesList, setExpensesList,DeleteExpense,displayedExpensesList,setDisplayedExpensesList,setExpenseSum,expenseSum}){
    const nameRef = useRef();
    const categoryRef = useRef();
    const priceRef = useRef();
    const date1Ref = useRef();
    const date2Ref = useRef();


    function SearchByName(event){
        const searchedName = event.target.value

        console.log(searchedName)
        if(searchedName===""){
            setDisplayedExpensesList(expensesList)
        }
        else{
        const FilteredDisplayList = displayedExpensesList.filter(element=>element.name.toLowerCase().includes(searchedName))
        setDisplayedExpensesList(FilteredDisplayList)
        console.log(searchedName)

        }


    }
    function FilterByCategory(event){
        const searchedCategory = event.target.value
        if(searchedCategory==="Wszystkie"){
            setDisplayedExpensesList(expensesList);

        }
        else{
            const FilteredDisplayList = displayedExpensesList.filter(element=>element.category ===searchedCategory);
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
            const FilteredDisplayList = displayedExpensesList.filter(element=>element.amount>searchedPrice)
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
        const FilteredDisplayList = displayedExpensesList.filter(element=>new Date(element.date.seconds*1000)>selectedDate1 && new Date(element.date.seconds*1000)<selectedDate2)
        setDisplayedExpensesList(FilteredDisplayList)

        }
        else{
            setDisplayedExpensesList(expensesList)
        }

    }
    useEffect(()=>{
        FilterByData();
    }, [data1,data2])

    function DeleteAllFilters(){
        setDisplayedExpensesList(expensesList)
        nameRef.current.value = ""
        categoryRef.current.value="Wszystkie"
        priceRef.current.value = "";
        date1Ref.current.value=null;
        date2Ref.current.value = null
    }

    
    return(<>
    <div className="expensesPage">
    <AddExpense user={user}isLogged={isLogged} fetchExpenses={fetchExpenses}/>
    <div className="FilterExpensesContainer">
        <div className="date1container">
            <label htmlFor="name">Co chesz wyszukać?</label>
            <input  ref={nameRef} type="text" placeholder="Wyszukaj po nazwie" id="name" onChange={event=>SearchByName(event)} />
        </div>
        <div className="date1container">
            <label htmlFor="select">Wybierz kategorię</label>
                <select name="Kategoria" id="select" onChange={event=>FilterByCategory(event)} ref={categoryRef}>
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

        </div>

            <div className="date1container">
                <label htmlFor="date1">Wybierz początkową datę</label>
                <input type="date" id="date1" onChange={event=>setData1(event.target.value)} ref={date1Ref}/>
            </div>
            <div className="date1container">
                <label htmlFor="date2">Wybierz końcową datę</label>
                <input type="date" id="date2"onChange={event=>setData2(event.target.value)} ref={date2Ref}/> 
            </div>

            <div className="date1container">
                <label htmlFor="price">Wybierz cenę</label>
                <input type="number" placeholder="Kwota większa niż..." id="price" ref={priceRef} onChange={event=>FilterByPrice(event)}/>
            </div>
            <button onClick={DeleteAllFilters}>Wyczyść wszystkie filtry</button>


    </div>
<DisplayExpense setDisplayedExpensesList={setDisplayedExpensesList} displayedExpensesList={displayedExpensesList} DeleteExpense={DeleteExpense} setExpensesList={setExpensesList} expensesList={expensesList}/>
    <Summary  displayedExpensesList={displayedExpensesList} expensesList={expensesList} setExpenseSum={setExpenseSum} expenseSum={expenseSum}/>
    </div>
    </>);
}
export default ExpensesPage    