import { useEffect, useState } from "react";
import "./Summary.css"

function Summary({user, setCategoriesExpenses, expensesList,setExpenseSum,expenseSum,displayedExpensesList}){

    function SumExpenses(array){
        let Sum=0;
        for(let i =0;i<array.length;i++){
            Sum+= parseFloat(array[i].amount);

        }
        return Sum

    }
    useEffect(()=>{
        const sum = SumExpenses(displayedExpensesList)
        setExpenseSum(sum);
    },[displayedExpensesList])


    const [SummaryExpenses, setSummaryExpenses] = useState( {
        Jedzenie:0,
        Rozrywka:0,
        Sport:0,
        Pojazdy:0,
        Rachunki:0,
        KosmetykiIUroda:0,
        Ubrania:0,
        Edukacja:0,
        Zdrowie:0,
        Wyjazdy:0,
        Zwierzęta:0,
        Inne:0,
    })


    function CalculateExpenses(){
        let food= 0;
        let attractions = 0;
        let sport = 0;
        let vehicles = 0;
        let bills=0;
        let Beauty = 0;
        let Clothes =0;
        let Education = 0;
        let Health = 0;
        let Trips = 0;
        let Pets = 0;
        let others=0;

        for(let i=0;i<displayedExpensesList.length;i++){
            let amount = parseFloat(displayedExpensesList[i].amount);
            switch(displayedExpensesList[i].category){
                case "Jedzenie":
                    food+=amount;
                    break;
                case "Rozrywka":
                    attractions+=amount;
                    break
                case "Sport":
                    sport+=amount;
                    break
                case "Pojazdy":
                    vehicles+=amount;
                    break
                case "Rachunki":
                    bills+=amount;
                    break
                case "Kosmetyki i Uroda":
                    Beauty+=amount
                    break;
                case "Ubrania":
                    Clothes+=amount;
                    break
                case "Edukacja":
                    Education+=amount;
                    break
                case "Zdrowie":
                    Health+=amount;
                    break
                case "Wyjazdy":
                    Trips+=amount;
                    break
                case "Zwierzęta":
                    Pets+=amount
                    break
                case "Inne":
                    others+=amount
                    break

            }

        }
        setSummaryExpenses({Jedzenie:food,
                            Rozrywka:attractions,
                            Sport:sport,
                            Pojazdy:vehicles,
                            Rachunki:bills,
                            KosmetykiIUroda:Beauty,
                            Ubrania: Clothes,
                            Edukacja:Education,
                            Zdrowie:Health,
                            Wyjazdy: Trips,
                            Zwierzęta:Pets,
                            Inne:others
        })
        setCategoriesExpenses(SummaryExpenses)


    }

    function BiggestExpenses(){
        let maxCategory='';
        let maxAmount = 0;
        for(let sums in SummaryExpenses){
            if(SummaryExpenses[sums]>maxAmount){
                maxAmount=SummaryExpenses[sums]
                maxCategory=sums;
            }
        }
        return{maxCategory:maxCategory, maxAmount:maxAmount }

    }
    useEffect(()=>{
        CalculateExpenses();

    },[displayedExpensesList, user, SummaryExpenses])
    const biggest = BiggestExpenses();


    return(
        <>
        
        <div className="SummaryContainer">
        <h3>Łącznie wydałeś <strong>{expenseSum} zł</strong></h3>
        <h3>🍕 Jedzenie: {SummaryExpenses.Jedzenie} zł</h3>
        <h3>🎉 Rozrywka: {SummaryExpenses.Rozrywka} zł</h3>
        <h3>🤾 Sport: {SummaryExpenses.Sport} zł</h3>
        <h3>🚗 Pojazdy: {SummaryExpenses.Pojazdy} zł</h3>
        <h3>💴 Rachunki: {SummaryExpenses.Rachunki} zł</h3>
        <h3>💅 Kosmetyki i uroda: {SummaryExpenses.KosmetykiIUroda} zł</h3>
        <h3>📙 Edukacja: {SummaryExpenses.Edukacja} zł</h3>
        <h3>🏥 Zdrowie: {SummaryExpenses.Zdrowie} zł</h3>
        <h3>🛬 Wyjazdy: {SummaryExpenses.Wyjazdy} zł</h3>
        <h3>🐶 Zwierzęta : {SummaryExpenses.Zwierzęta} zł        </h3>
        <h3>👖 Ubrania: {SummaryExpenses.Ubrania} zł</h3>
        <h3>➕ Inne: {SummaryExpenses.Inne} zł</h3>
        <h3>Najwięcej wydajesz na {biggest.maxCategory} - {biggest.maxAmount} zł</h3>
            
        </div>

        </>
    );
}
export default Summary