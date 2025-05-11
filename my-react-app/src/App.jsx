// src/App.jsx
import { useState, useEffect } from "react";
import { auth, db } from "./firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { collection, query, where, getDocs, deleteDoc,doc } from "firebase/firestore";
import SignUp from "./assets/SignUp";
import LogIn from "./assets/LogIn";
import AddExpense from "./assets/NewExpense";
import DisplayExpense from "./assets/DisplayExpense";

function App() {
  const [isRegistered, setIsRegistered] = useState(true)
  const [isLogged, setIsLogged]=useState(false)
  const [expensesList, setExpensesList] = useState([])
  const [user,setUser] = useState(null)

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
          <button onClick={LogOut}>Wyloguj</button>
            {
              user && (
                <>
                  <AddExpense isLogged={isLogged} fetchExpenses={fetchExpenses} />
                  <DisplayExpense DeleteExpense={DeleteExpense} setExpensesList={setExpensesList} expensesList={expensesList} />
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
