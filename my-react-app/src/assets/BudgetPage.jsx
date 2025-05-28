import './BudgetPage.css'
import Budget from './Budget'
import { useEffect, useState } from 'react';
import { db, auth } from "../firebase";

import { addDoc, collection, doc, getDoc, getDocs, query,updateDoc,where  } from "firebase/firestore";
function BudgetPage({fetchExpenses, categoriesExpenses, collectedMoney, user, budget, setBudget, expenseSum }) {

    const [singlebudget, setSingleBudget] = useState(budget/12)
    useEffect(()=>{
            console.log( "categpries "+categoriesExpenses)
            fetchExpenses();


    },[])

    const [docId, setDocID] = useState(null)
    const [selectedIndex, setSelectedIndex] = useState(null)
    const [singleBudgetsCategories, setSingleBudgetsCategories] = useState({})

    const categoryKeys = [
  "Jedzenie",
  "Rozrywka",
  "Sport",
  "Pojazdy",
  "Rachunki",
  "KosmetykiIUroda",
  "Ubrania",
  "Edukacja",
  "Zdrowie",
  "Wyjazdy",
  "Zwierzęta",
  "Inne"
];

    const [singleBudgetValue, setSingleBudgetValue] = useState(null)
    async function handleSingleBudgetAdd(event, index){
      setSingleBudgetValue(event.target.value)
      setSelectedIndex(index)
        if(docId){
          const selectedCategory = categoryKeys[selectedIndex]
          const DocRef = doc(collection(db,"SingleBudgets"), docId)
          await updateDoc(DocRef, {[`${selectedCategory}Budget`]:singleBudgetValue})
        }
        else{
            setSingleBudgetsCategories({
            userID: auth.currentUser.uid,
            JedzenieBudget:budget/12,
            RozrywkaBudget:budget/12,
            SportBudget:budget/12,
            Pojazdybudget:budget/12,
            RachunkiBudget:budget/12,
            KosmetykiIUrodaBudget:budget/12,
            UbraniaBudget:budget/12,
            EdukacjaBudget:budget/12,
            ZdrowieBudget:budget/12,
            WyjazdyBudget:budget/12,
            ZwierzętaBudget:budget/12,
            InneBudget:budget/12,

        })
        const DocRef =await addDoc(collection(db,"SingleBudgets"),singleBudgetsCategories);
        setDocID(DocRef.id)

        }

        }

        function fetchSingleBudgets(){
          const q =query(
            collection(db,"SingleBudgets"),
            where("userID","===",user.uid)
          );
          const querySnapshot = await getDocs(q);
          const single 
          

        }

  return (
    <>
      <div className="BudgetPage">
        <Budget
        setSingleBudget={setSingleBudget}
          collectedMoney={collectedMoney}
          user={user}
          budget={budget}
          setBudget={setBudget}
          expenseSum={expenseSum}
        />

        <div className="CategoriesBudgetContainer">
          {Object.entries(categoriesExpenses).map(([category, expense], index) => (
            <div key={index} className="SingleCategoryBudgetContainer">
              <h2>{category}</h2>
              <h3>Twój budżet to: {singlebudget.toFixed(2,0)} zł</h3>
              <p>Edytuj</p>
              <input type="text" placeholder='Edytuj Budzet' />
              <h3>Pozostało ci jeszcze: {(singlebudget-expense).toFixed(2,0)} zł</h3>
            </div>
          ))}
        </div>

        <div className="SplitBudgetContainer">
            <button onClick={()=>setSingleBudget(budget/12)}>Rozłóż budżet</button>
            <h2>Zmień budżet</h2>
            <select name="Kategoria" id="" onChange={event=>setCategoryName(event.target.value)}>
                <option value="Wybierz kategorię">Wybierz kategorię</option>
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
            <button onClick={handleSingleBudgetAdd}>Dodaj</button>
        </div>
      </div>
    </>
  );
}

export default BudgetPage;
