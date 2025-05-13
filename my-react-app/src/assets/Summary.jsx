import { useEffect, useState } from "react";

function Summary({expensesList}){
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

        for(let i=0;i<expensesList.length;i++){
            let amount = parseFloat(expensesList[i].amount);
            switch(expensesList[i].category){
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
    useEffect(()=>{
        CalculateExpenses();
    },[expensesList])
    return(
        <>
        <h1>Na jedzenie wydałeś {SummaryExpenses.Food} zł</h1>
        <h1>Na rozrywkę wydałeś {SummaryExpenses.Attractions} zł</h1>
        <h1>Na sport wydałeś {SummaryExpenses.Sport} zł</h1>
        <h1>Na pojazdy wydałeś {SummaryExpenses.Vehicles} zł</h1>
        <h1>Na rachunki wydałeś {SummaryExpenses.Bills} zł</h1>
        <h1>Na inne wydałeś {SummaryExpenses.Others} zł</h1>
        </>
    );
}
export default Summary