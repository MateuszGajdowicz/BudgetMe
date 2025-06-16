import { useEffect, useState } from 'react';
import './DateCharts.css'
import {PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import { use } from 'react';

function DateCharts({categoriesExpenses,expensesList}){
    const [ExpensesArrayWithZeros, setExpensesArrayWithZeros] = useState([])
    const [ExpensesArrayWithoutZeros, setExpensesArrayWithoutZeros] = useState([])
    const [ExpensesArray, setExpensesArray] = useState(ExpensesArrayWithZeros)


    const [inputValue, setInputValue] = useState("Ten rok")
    const [maxMonthInfo, setMaxMonthInfo] = useState({Month:"", Value:""});
    const [minMonthInfo, setMinMonthInfo] = useState({Month:"", Value:""})
    const [dailyExpenseAllMonths, setDailyExpenseAllMonths] = useState([]);
    const [monthIndex, setMonthIndex] = useState(new Date().getMonth())
    const [monthName, setMonthname] = useState("maj")
    const [year, setYear]  = useState(new Date().getFullYear())
    const [averageMonthlyExpense, setAverageMonthlyExpense] = useState()
    const [selected, setSelected] = useState("withZeros")

    const [maxDayInfo, setMaxDayinfo] = useState({Day:"", Value:''})
    const [minDayInfo, setMinDayinfo] = useState({Day:"", Value:''})

    const [AverageEverydayExpenseDisplay,setAverageEverydayExpenseDisplay] = useState(0)

    const [yearDate, setYearDate] = useState(new Date().getFullYear())

    const [prevMonthIndex, setPrevMonthIndex] = useState(new Date().getMonth()-1)
    const [prevMonthSumState, setPrevMonthSumState] = useState(0)

    const [DiffResult, setDiffResult] = useState(0)
    



        const monthNames = [
    "styczeń", "luty", "marzec", "kwiecień", "maj", "czerwiec",
    "lipiec", "sierpień", "wrzesień", "październik", "listopad", "grudzień"
  ];

  const weekNames = ['poniedziałek','wtorek', 'środa', 'czwartek','piątek','sobota','niedziela']
function handlePeriodYearChange(event){
    const inputValue = event.target.value;
    switch(inputValue){
        case "Cały rok":
            setYearDate(new Date().getFullYear())
            console.log(yearDate)
            break;
        case "Poprzedni rok":
            setYearDate(new Date().getFullYear()-1)
            console.log(yearDate)
            break
    }




}
useEffect(()=>{
    getYearData()
},[yearDate])


    function handleMonthChange(event){
        let inputValue = event.target.value
        for(let i =0;i<monthNames.length;i++){
            if(monthNames[i]===inputValue){
                setMonthIndex(i)
                setMonthname(monthNames[i])
            }

        }


    }
    useEffect(()=>{
        if(filtered.length>0){
        getDayData()


        }

    },[monthIndex])
let filtered=[];
function getYearData(){
    filtered = [];
    filtered = expensesList.filter(element=>{
        const expenseDate = new Date(element.date.seconds*1000);
        return expenseDate.getFullYear() === yearDate;
})
    const monthsExpenses = filtered.map(element=>{
        const timestamp = element.date.seconds*1000;
        const date = new Date(Number(timestamp));
        const monthNumber = date.getMonth();
        return {monthName: monthNames[monthNumber],amount: Number(element.amount)}
    })

    const TemporaryExpensesArray = []
    for(let i = 0;i<monthNames.length;i++){
        let CurrentMonth = monthsExpenses.filter(element=>element.monthName === monthNames[i])
        let summedExpenses = CurrentMonth.reduce((prev, next)=>prev + next.amount, 0)
        TemporaryExpensesArray.push({Month:monthNames[i], MonthlyExpenses:summedExpenses})
    }

    setExpensesArrayWithZeros(TemporaryExpensesArray)
    setExpensesArrayWithoutZeros(TemporaryExpensesArray.filter(element=>element.MonthlyExpenses!==0))
    setExpensesArray(TemporaryExpensesArray)
    // if(selected==="withZeros"){
    //     setExpensesArray(TemporaryExpensesArray)
    // }

  }

useEffect(()=>{
    CalculateInfo();

},[ExpensesArray])


function getDayData(){
    let displaydata = []


    for(let i=0; i<monthNames.length;i++){
        let dailyExpensesSingleMonthArray = []
        for(let j = 1;j<31;j++){
            let dayFilteredExpenses = filtered.filter(element=>{
                const expenseDate = new Date(Number(element.date.seconds*1000));
                return expenseDate.getMonth() === i && expenseDate.getDate() === j
            });
        let summedDayFilteredExpenses =  dayFilteredExpenses.reduce((prev, next)=>prev+Number(next.amount), 0)
        let newDate =  new Date(yearDate,i,j)
        let weekday  =newDate.getDay();
                        
        dailyExpensesSingleMonthArray.push({day:j,expenses: summedDayFilteredExpenses, date:weekday})



        }
        displaydata.push({month:monthNames[i], daysExpenses: dailyExpensesSingleMonthArray})
        
    }
    setDailyExpenseAllMonths(displaydata)


}

useEffect(()=>{
console.log(dailyExpenseAllMonths)},[dailyExpenseAllMonths,monthIndex])



      function CalculateInfo(){
        let MaxValue = 0;
        let MaxMonth = "";
        let MinValue = Infinity; 
        let MinMonth = "";
        for(let i=0; i<ExpensesArray.length;i++){
            if(ExpensesArray[i].MonthlyExpenses>MaxValue){
                MaxValue = ExpensesArray[i].MonthlyExpenses;
                MaxMonth = ExpensesArray[i].Month;

            }
        
            else if(ExpensesArray[i].MonthlyExpenses<MinValue){
                MinValue = ExpensesArray[i].MonthlyExpenses;
                MinMonth = ExpensesArray[i].Month;

            }


        }
        setMaxMonthInfo({Month:MaxMonth, Value:MaxValue})
        setMinMonthInfo({Month:MinMonth, Value:MinValue})

        let summedMonthlyExpenses = ExpensesArray.reduce((prev,next)=>prev+Number(next.MonthlyExpenses),0);
        let averageMonthlyExpenseTemporary = Number(summedMonthlyExpenses/ExpensesArray.length);
        setAverageMonthlyExpense(averageMonthlyExpenseTemporary)



        
    }
function CalculateDayData(){
        let MaxDayValue = 0;
        let MaxDay = 0;
        let MinDayValue = Infinity;
        let MinDay = 0;


        for(let i=0; i<dailyExpenseAllMonths[monthIndex].daysExpenses.length;i++){
            if(dailyExpenseAllMonths[monthIndex].daysExpenses[i].expenses>MaxDayValue){
                MaxDayValue=dailyExpenseAllMonths[monthIndex].daysExpenses[i].expenses;
                MaxDay = dailyExpenseAllMonths[monthIndex].daysExpenses[i].day;

            }
            else if(dailyExpenseAllMonths[monthIndex].daysExpenses[i].expenses<MinDayValue){
                MinDayValue=dailyExpenseAllMonths[monthIndex].daysExpenses[i].expenses;
                MinDay = dailyExpenseAllMonths[monthIndex].daysExpenses[i].day;

            }

        }
        setMaxDayinfo({Day:MaxDay, Value:MaxDayValue});
        setMinDayinfo({Day:MinDay, Value:MinDayValue})


        let SummedEverydayExpenses = dailyExpenseAllMonths[monthIndex].daysExpenses.reduce((prev,next)=>prev+Number(next.expenses),0);
        let AverageEverydayExpense = SummedEverydayExpenses/31;
        let prevMonthIndex = monthIndex-1;
        setPrevMonthIndex(prevMonthIndex)

        let ThisMonthSum = ExpensesArray[monthIndex].MonthlyExpenses;
        let PrevMonthSum = ExpensesArray[prevMonthIndex].MonthlyExpenses;
        let Result = 100*(Math.abs(ThisMonthSum))/(PrevMonthSum===0?100:PrevMonthSum);
        setDiffResult(Result)

        let weekExpensesAll =[];


        let filteredByMonth = expensesList.filter(element=>{
            let month = new Date(element.date.seconds*1000).getMonth();
            let year = new Date(element.date.seconds*1000).getFullYear()
            return month === monthIndex && year === new Date().getFullYear()
        }
        )
        for(let i=0;i<weekNames.length;i++){
            const weekExpenses = filteredByMonth.filter(element=>{
                let newWeekDay = new Date(element.date.seconds*1000).getDay();
                return newWeekDay===i
            })
            let summed = weekExpenses.reduce((prev,next)=>prev+Number(next.amount),0)

            weekExpensesAll.push({NameDay:weekNames[i], ExpensesSummed:summed })

        }
        console.log(weekExpensesAll)

        


        setAverageEverydayExpenseDisplay(AverageEverydayExpense)
}


      const COLORS = [
        "#8884d8", "#82ca9d", "#ffc658", "#ff7f50", "#87cefa", "#da70d6",
        "#32cd32", "#ff69b4", "#ba55d3", "#cd5c5c", "#ffa07a", "#20b2aa"
    ];



  useEffect(()=>{
    getYearData();

  },[expensesList])
  
useEffect(() => {
  if (dailyExpenseAllMonths.length > 0) {
    CalculateInfo();
    CalculateDayData()
  }
}, [dailyExpenseAllMonths, ExpensesArray, monthIndex]);



    return(
        <>
        <div className='DateExpensesCharts'>
            <div className='ChartsContainer'></div>
            <div className='DateExpenses'>
                <select name="" id="" onChange={event=>handlePeriodYearChange(event)}  className='YearSelect'>
                    <option value="Cały rok" selected>Ten rok</option>
                    <option value="Poprzedni rok">Poprzedni rok</option>

                </select>
            <h1 className='year'>{yearDate}</h1>


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
            <div className='DateChart' style={{top:"50%"}}>
                    {dailyExpenseAllMonths[monthIndex] && (
            <div className='StickChart' style={{top:"60%"}}>
                <ResponsiveContainer>
                <BarChart data={dailyExpenseAllMonths[monthIndex].daysExpenses}>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis dataKey="day"/>
                    <YAxis/>
                    <Tooltip/>
                    <Bar dataKey="expenses">
                    {dailyExpenseAllMonths[monthIndex]?.daysExpenses?.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                    </Bar>
                </BarChart>
                </ResponsiveContainer>
            </div>
)}

            </div>
            <select name="" id="" onChange={event=>handleMonthChange(event)} className="monthSelect">
                    <option value="">Wybierz okres</option>
                    <option value="styczeń">Styczeń</option>
                    <option value="luty">Luty</option>
                    <option value="marzec">Marzec</option>                    
                    <option value="kwiecień">Kwiecień</option>
                    <option value="maj">Maj</option>
                    <option value="czerwiec">Czerwiec</option>
                    <option value="lipiec">Lipiec</option>
                    <option value="sierpień">Sierpień</option>
                    <option value="wrzesień">Wrzesień</option>
                    <option value="październik">Październik</option>
                    <option value="listopad">Listopad</option>
                    <option value="grudzień">Grudzień</option>
            </select>
            </div>
            <div className='InfoContainer'>
                <div className='radioContainer'>
                    <div>
                        <input
                            type="radio"
                            id="firstRadio"
                            name="radio"
                            checked={selected === "withZeros"}
                            onChange={() => {
                                setSelected("withZeros");
                                setExpensesArray(ExpensesArrayWithZeros);

                            }}
                            />
                            <label htmlFor="firstRadio">Uwzględniaj okresy bez wydatków</label>

                    </div>
                    <div>
                        <input
                            type="radio"
                            id="secondRadio"
                            name="radio"
                            checked={selected === "withoutZeros"}
                            onChange={() => {
                                setSelected("withoutZeros");
                                setExpensesArray(ExpensesArrayWithoutZeros);

       

                            }}
                            />
                            <label htmlFor="secondRadio">Nie uwzględniaj okresów bez wydatków</label>

                    </div>


                </div>

                
                <h2>Najwięcej wydałeś w {maxMonthInfo.Month} - {maxMonthInfo.Value} zł</h2>
                <h2>Najmniej wydałeś w {minMonthInfo.Month} - {minMonthInfo.Value} zł</h2>
                <h2>Średnio miesięcznie wydajesz: {averageMonthlyExpense?averageMonthlyExpense.toFixed(2):"none"} zł</h2>

            </div>
            <div className='SecondInfoContainer'>
                <h2>Najwięcej wydałeś: {maxDayInfo.Day} {monthNames[monthIndex]} - {maxDayInfo.Value} zł</h2>
                <h2>Najmniej wydałeś : {minDayInfo.Day} {monthNames[monthIndex]} - {minDayInfo.Value} zł</h2>
                <h2>Średnio dziennie wydajesz {AverageEverydayExpenseDisplay?.toFixed(2)} zł</h2>
                <h2>To {DiffResult.toFixed(2)} % tego co wydałeś w miesiącu {monthNames[prevMonthIndex]}</h2>
                <h2>Najwięcej wydajesz w </h2>
                <h2>Najmniej wydajesz w </h2>
            </div>

            <h1 className='monthName'>{monthName}</h1>


        </div>
        
 

    </>
    )
}
export default DateCharts