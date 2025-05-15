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
  const [isLogged, setIsLogged]=useState(true)
  const [expensesList, setExpensesList] = useState([])
  const [user,setUser] = useState(null)
  const [expenseSum, setExpenseSum] = useState(0);
  const [collectedMoney, setCollectedMoney] = useState(0)

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
  


  return (
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
                  <AddExpense isLogged={isLogged} fetchExpenses={fetchExpenses} />
                  <DisplayExpense DeleteExpense={DeleteExpense} setExpensesList={setExpensesList} expensesList={expensesList} />
                  <Summary expensesList={expensesList} setExpenseSum={setExpenseSum} expenseSum={expenseSum}/>
                  <Budget collectedMoney={collectedMoney}user = {user}budget={budget} setBudget={setBudget} expenseSum={expenseSum}/>
                  <GoalBudget collectedMoney={collectedMoney} setCollectedMoney={setCollectedMoney}user = {user}/>
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
