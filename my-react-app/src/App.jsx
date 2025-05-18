// src/App.jsx
import { useState, useEffect } from "react";
import { auth, db } from "./firebase";
import "./App.css"
import { onAuthStateChanged, signOut } from "firebase/auth";
import { collection, query, where, getDocs, deleteDoc,doc } from "firebase/firestore";
import SignUp from "./assets/SignUp";
import LogIn from "./assets/LogIn";
import AddExpense from "./assets/NewExpense";
import DisplayExpense from "./assets/DisplayExpense";
import Summary from "./assets/Summary";
import Budget from "./assets/Budget";
import GoalBudget from "./assets/GoalBudget";
function App() {
  const [isRegistered, setIsRegistered] = useState(true)
  const [isLogged, setIsLogged]=useState(false)
  const [expensesList, setExpensesList] = useState([])
  const [user,setUser] = useState(null)
  const [expenseSum, setExpenseSum] = useState(0);
  const [collectedMoney, setCollectedMoney] = useState(0)
  const [displayedExpensesList, setDisplayedExpensesList] = useState(expensesList)


  const [budget, setBudget] = useState(0)

  function LogOut(){
    signOut(auth)
    setIsLogged(false)
    
  }

  async function DeleteExpense(expenseID){
    try{
      const expenseDocRef = doc(db, "expenses", expenseID)
      await deleteDoc(expenseDocRef)
      setExpensesList(expensesList.filter((element)=>element.id!==expenseID))
    }
    catch(error){
      console.log("Nie udało sie usunąć")
    }

  }
  

  useEffect(()=>{
    onAuthStateChanged(auth, (u)=>{
      setUser(u)
    })
  }, [])

  async function fetchExpenses(){
    const q = query(
      collection(db, "expenses"),
      where("userID", "==", user.uid));
    const querySnapshot = await getDocs(q);
    const expensesList = querySnapshot.docs.map(doc=>({
      id:doc.id,
      ...doc.data()
    }));
    setExpensesList(expensesList)

  };

  useEffect(()=>{
    if(user){
      fetchExpenses();
      
    }
  },[user])

  // useEffect(()=>{
  // const Options = document.getElementById("Options");
  // const nav = document.querySelector("nav");
  // Options.addEventListener('mouseenter', ()=>{
  //   nav.style.display = "flex";

  // });
  // if(nav.style.)
  //   nav.addEventListener('mouseout', ()=>{
  //   nav.style.display = "none";

  // }),[]})


  


  return (
    <>

      {
        !isLogged ? (
          <>
            {
              isRegistered ?
                <LogIn setIsLogged={setIsLogged} setIsRegistered={setIsRegistered} />
                :
                <SignUp setIsRegistered={setIsRegistered} />
            }
          </>
        ) : (
          <>
            {
              user && (
                <>
  <nav>
      <ul>
        <li id="BudgetMe">BudgetMe</li>
        <li>Strona główna</li>
        <li>Wydatki</li>
        <li>Budżet</li>
        <li>Cele</li>
        <li>Statystyki</li>
        <li>Ustawienia</li>
        <li>Profil</li>
        <li onClick={LogOut}>Wyloguj</li>
      </ul>
    </nav>
    <h1 id="Options">...</h1>
                
                  <AddExpense isLogged={isLogged} fetchExpenses={fetchExpenses} />
                  <DisplayExpense setDisplayedExpensesList={setDisplayedExpensesList} displayedExpensesList={displayedExpensesList} DeleteExpense={DeleteExpense} setExpensesList={setExpensesList} expensesList={expensesList} />
                  <Summary displayedExpensesList={displayedExpensesList} expensesList={expensesList} setExpenseSum={setExpenseSum} expenseSum={expenseSum}/>
                  <GoalBudget collectedMoney={collectedMoney} setCollectedMoney={setCollectedMoney}user = {user}/>
                  <Budget collectedMoney={collectedMoney}user = {user}budget={budget} setBudget={setBudget} expenseSum={expenseSum}/>
                </>
              )
            }
          </>
        )
      }
    </>
  );
  
}

export default App;
