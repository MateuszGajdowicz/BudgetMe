import { useEffect, useState } from "react";
import "./Summary.css"

function Summary({expensesList,setExpenseSum,expenseSum,displayedExpensesList}){

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
        Food:0,
        Attractions:0,
        Sport:0,
        Vehicles:0,
        Bills:0,
        Others:0,
    })

    function CalculateExpenses(){
        let food= 0;
        let attractions = 0;
        let sport = 0;
        let vehicles = 0;
        let bills=0;
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
                case "Inne":
                    others+=amount
                    break

            }

        }
        setSummaryExpenses({Food:food,
                            Attractions:attractions,
                            Sport:sport,
                            Vehicles:vehicles,
                            Bills:bills,
                            Others:others
        })
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

    },[displayedExpensesList])
    const biggest = BiggestExpenses();


    return(
        <>
        
        <div className="SummaryContainer">
        <h3>Łącznie wydałeś <strong>{expenseSum} zł</strong></h3>
        <h3>🍕 Jedzenie: {SummaryExpenses.Food} zł</h3>
        <h3>🎉 Rozrywka: {SummaryExpenses.Attractions} zł</h3>
        <h3>🤾 Sport: {SummaryExpenses.Sport} zł</h3>
        <h3>🚗 Pojazdy: {SummaryExpenses.Vehicles} zł</h3>
        <h3>💴 Rachunki: {SummaryExpenses.Bills} zł</h3>
        <h3>➕ Inne: {SummaryExpenses.Others} zł</h3>
        <h3>Najwięcej wydajesz na {biggest.maxCategory} - {biggest.maxAmount} zł</h3>
            
        </div>

        </>
    );
}
export default Summary