import './BudgetPage.css'
import Budget from './Budget'
import { useEffect, useState } from 'react';
import { db, auth } from "../firebase";

import { addDoc, collection, collectionGroup, doc, getDoc, getDocs, query,updateDoc,where  } from "firebase/firestore";
function BudgetPage({setCategoriesExpenses,categoriesExpenses,fetchExpenses, collectedMoney, user, budget, setBudget, expenseSum }) {
  let SingleBudget = budget/12

 const budgets = {
  Jedzenie: SingleBudget,
  Rozrywka: SingleBudget,
  Sport: SingleBudget,
  Pojazdy: SingleBudget,
  Rachunki: SingleBudget,
  KosmetykiIUroda: SingleBudget,
  Ubrania: SingleBudget,
  Edukacja: SingleBudget,
  Zdrowie: SingleBudget,
  Wyjazdy: SingleBudget,
  Zwierzęta: SingleBudget,
  Inne: SingleBudget,
}; 

  const categoryNames = [
    "Jedzenie", "Rozrywka", "Sport", "Pojazdy", "Rachunki",
    "KosmetykiIUroda", "Ubrania", "Edukacja", "Zdrowie",
    "Wyjazdy", "Zwierzęta", "Inne"
  ];

const [inputValues, setInputValues] =useState({})

const [existingDocID, setExistingDocID] = useState(null)

async function handleSingleBudgetChange(index){
  if(existingDocID){
const category = SingleBudgetInfo[index].name;
const newBudget = Number(inputValues[category]);
    const docRef = doc(collection(db, "singleBudgets"), existingDocID)
      const updatedBudget = SingleBudgetInfo.map((item, i) =>
        i === index ? { ...item, budget: newBudget } : item
      );

      await updateDoc(docRef, { budget: updatedBudget });
      setSingleBudgetInfo(updatedBudget);


  }
  else{
const newBudgetInfo = {
  userID: auth.currentUser.uid,
  budget: SingleBudgetInfo.map((item, i) =>
    i === index ? { ...item, budget: newBudget } : item
  ),
}; 
const docRef = await addDoc(collection(db, "singleBudgets"), newBudgetInfo);
setExistingDocID(docRef.id);


  }
  fetchSingleBudgets();

}

async function fetchSingleBudgets(){
  const q = query(collection(db,"singleBudgets"),
where("userID","==", user.uid));
const querySnapshot = await getDocs(q);
if(!querySnapshot.empty){
  const docData = querySnapshot.docs[0].data();
  const DocID = querySnapshot.docs[0].id
  setExistingDocID(DocID)
  setSingleBudgetInfo(docData.budget)

}
else{
   const defaultBudgets = categoryNames.map(element=>({
  element,
  budget: SingleBudget,
  expense: categoriesExpenses[element]
}))
setCategoriesExpenses(defaultBudgets)

} 

}
useEffect(() => {
  fetchSingleBudgets();
}, []);


const [SingleBudgetInfo, setSingleBudgetInfo] = useState([]) 

  return (
    <>
      <div className="BudgetPage">
        <Budget
        setCategoriesExpenses={setCategoriesExpenses}
          collectedMoney={collectedMoney}
          user={user}
          budget={budget}
          setBudget={setBudget}
          expenseSum={expenseSum}
        />

        <div className="CategoriesBudgetContainer">
          {SingleBudgetInfo.map((element,index) => (
            <div key={index} className="SingleCategoryBudgetContainer">
              <h2>{element.name}</h2>
              <h3>Twój budżet to: {element.budget.toFixed(2)} zł</h3>
              <p>Edytuj</p>
              <input
                  type="number"
                  value={inputValues[element.name] || ""}
                  onChange={e =>
                    setInputValues(prev => ({
                      ...prev,
                      [element.name]: e.target.value
                    }))
                  }
                />
              <button onClick={()=>handleSingleBudgetChange(index)}>Dodaj</button>
              <h3>Pozostało ci jeszcze: {(element.budget-element.expense).toFixed(2)}  zł</h3>
            </div>
          ))}
        </div>
        <button className='SplitButton'>Podziel równo</button>

      </div>
    </>
  );
}

export default BudgetPage;
