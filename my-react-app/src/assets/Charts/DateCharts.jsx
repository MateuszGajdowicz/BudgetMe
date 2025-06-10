import { useEffect, useState } from 'react';
import './DateCharts.css'
import {PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import { use } from 'react';

function DateCharts({categoriesExpenses,expensesList}){
    const [ExpensesArray, setExpensesArray] = useState([])
    const [inputValue, setInputValue] = useState("Cały rok")
    const [maxMonthInfo, setMaxMonthInfo] = useState({Month:"", Value:""});
    const [minMonthInfo, setMinMonthInfo] = useState({Month:"", Value:""})

    console.log(expensesList)
        const monthNames = [
    "styczeń", "luty", "marzec", "kwiecień", "maj", "czerwiec",
    "lipiec", "sierpień", "wrzesień", "październik", "listopad", "grudzień"
  ];
let YearDate = new Date().getFullYear();
let CurrentDate = new Date();

function handlePeriodYearChange(event){
    const inputValue = event.target.value;
    switch(inputValue){
        case "Cały rok":
            YearDate = new Date().getFullYear();
            console.log(YearDate)
            getYearData();
            break;
        case "Poprzedni rok":
            YearDate =  new Date().getFullYear()-1;
            console.log(YearDate)
            getYearData();
            break;
    }
    CalculateInfo();


}


function getDayData(month){

}

function getYearData(){
    let filteredThisYearExpenses = expensesList.filter(element=>{
        const expenseDate = new Date(element.date.seconds*1000);
        return expenseDate.getFullYear() === YearDate
})
      const monthsExpenses = filteredThisYearExpenses.map(element=>{
        const timestamp = element.date.seconds*1000;
        const date = new Date(Number(timestamp));
        const monthNumber = date.getMonth();
        return {monthName: monthNames[monthNumber],amount: Number(element.amount)}
    })

    const TemporaryExpensesArray = []
    console.log(monthsExpenses)
    for(let i = 0;i<monthNames.length;i++){
        let CurrentMonth = monthsExpenses.filter(element=>element.monthName === monthNames[i])
        let summedExpenses = CurrentMonth.reduce((prev, next)=>prev + next.amount, 0)
        TemporaryExpensesArray.push({Month:monthNames[i], MonthlyExpenses:summedExpenses})
    }

    console.log(ExpensesArray)
    setExpensesArray(TemporaryExpensesArray)

  }
      function CalculateInfo(){
        let MaxValue = 0;
        let MaxMonth = "";
        let MinValue = Infinity; 
        let MinMonth = "";
        for(let i=0; i<ExpensesArray.length;i++){
            if(ExpensesArray[i].MonthlyExpenses>MaxValue){
                MaxValue = ExpensesArray[i].MonthlyExpenses;
                MaxMonth = ExpensesArray[i].Month;
                setMaxMonthInfo({Month:MaxMonth, Value:MaxValue})

            }
            else if(ExpensesArray[i].MonthlyExpenses<MinValue){
                MinValue = ExpensesArray[i].MonthlyExpenses;
                MinMonth = ExpensesArray[i].Month;
                setMinMonthInfo({Month:MinMonth, Value:MinValue})
                console.log(minMonthInfo)

            }
                            console.log(maxMonthInfo)


        }
        
    }


      const COLORS = [
        "#8884d8", "#82ca9d", "#ffc658", "#ff7f50", "#87cefa", "#da70d6",
        "#32cd32", "#ff69b4", "#ba55d3", "#cd5c5c", "#ffa07a", "#20b2aa"
    ];



  useEffect(()=>{
    getYearData();
  },[expensesList])
  
  useEffect(()=>{
    CalculateInfo()
  },[ExpensesArray])


    return(
        <>
        <div className='DateExpensesCharts'>
            <div className='ChartsContainer'></div>
            <div className='DateExpenses'>
                <select name="" id="" onChange={event=>handlePeriodYearChange(event)}>
                    <option value="">Wybierz okres</option>
                    <option value="Cały rok">Cały rok</option>
                    <option value="Poprzedni rok">Poprzedni rok</option>

                </select>


            <div className='StickChart'>
                <ResponsiveContainer>
                    <BarChart data={ExpensesArray}>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis dataKey="Month"/>
                    <YAxis/>
                    <Tooltip/>
                    <Bar dataKey="MonthlyExpenses" >
                    {ExpensesArray.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                    </Bar>
                    </BarChart>
                </ResponsiveContainer>

            </div>
            </div>
            <div className='InfoContainer'>
                <h2>Najwięcej wydałeś w {maxMonthInfo.Month} - {maxMonthInfo.Value} zł</h2>
                <h2>Najmniej wydałeś w {minMonthInfo.Month} - {minMonthInfo.Value} zł</h2>
                <h2>Średnio miesięcznie wydajesz:</h2>

            </div>
            {/* <select name="" id="">
                    <option value="">Wybierz okres</option>
                    <option value="Styczeń">Styczeń</option>
                    <option value="Luty">Luty</option>
                    <option value="Marzec">Marzec</option>                    
                    <option value="Kwiecień">Kwiecień</option>
                    <option value="Maj">Maj</option>
                    <option value="Czerwiec">Czerwiec</option>
                    <option value="Lipiec">Lipiec</option>
                    <option value="Sierpień">Sierpień</option>
                    <option value="Wrzesień">Wrzesień</option>
                    <option value="Październik">Październik</option>
                    <option value="Listopad">Listopad</option>
                    <option value="Grudzień">Grudzień</option>
            </select> */}

        </div>
        
 

    </>
    )
}
export default DateCharts