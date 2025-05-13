import { useState } from "react";
import { db, auth } from "../firebase";

import { addDoc, collection } from "firebase/firestore";


function AddExpense({isLogged, fetchExpenses}){
    const [name, setName] = useState("")
    const [amount, setAmount] = useState("")
    const [category, setCategory]= useState("")
    const [number, setNumber] = useState("")

     async function handleExpenseAdd(){
        if(isLogged){
            if(name && amount && category!==""){
                const newExpense = {
                    userID:auth.currentUser.uid,
                    name:name,
                    number:number,
                    amount: amount,
                    category: category,
                    date: new Date(),
                }
                console.log(newExpense)
                const docRef = await addDoc(collection(db,"expenses"),newExpense)
                fetchExpenses();
                alert("Dodano wydatek!")
                setName("")
                setNumber("")
                setAmount("")

            }
            else{
                alert("Uzupełnij wszystkie dane")
            }



        }
        else{
            alert("Musisz być zalogowany żeby dodać wydatek")
        }


    }
    return(
        <div className="AddExpenseContainer">
            <h2>Dodaj wydatek</h2>
            <input value={name} type="text" placeholder="Nazwa" onChange={event=>setName(event.target.value)}/>
            <input value={number} type="number" placeholder="Liczba" onChange={event=>setNumber(event.target.value)}/>
            <input value={amount} type="number" placeholder="Kwota"  onChange={event=>setAmount(event.target.value)}/>
            <select name="Kategoria" id=""  onChange={event=>setCategory(event.target.value)}>
                <option value="Wybierz kategorię">Wybierz kategorię</option>
                <option value="Jedzenie">Jedzenie</option>
                <option value="Rozrywka">Rozrywka</option>
                <option value="Sport">Sport</option>
                <option value="Pojazdy">Pojazdy</option>
                <option value="Rachunki">Rachunki</option>
                <option value="Inne">Inne</option>
            </select>
            <button onClick={handleExpenseAdd}>Dodaj</button>

        </div>
    );

}
export default AddExpense