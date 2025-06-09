import { useEffect, useState } from 'react';
import './ChartsPage.css'
import {PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';

function ChartsPage({categoriesExpenses,expensesList}){
    console.log(categoriesExpenses)

    const [ maxData, setMaxData] = useState({maxValue : 0, maxCategory:''})
    const [percentage, setPercentage] = useState(0)
    const [averageExpense, setAverageExpense] = useState(0)
    const [noExpenseCategories, setNoExpenseCategories] = useState([])
    const [averageAllExpense, setAverageAllExpense] = useState(null)

    const categoriesExpensesChart = Object.entries(categoriesExpenses).map(([expenseCategory, expenseAmount])=>({
        expenseCategory:expenseCategory,
        AmountSpent:expenseAmount
    }))

;


    function FindNoExpenses(array){
        setNoExpenseCategories(array.filter(element=> element.AmountSpent===0).map(element=>element.expenseCategory));
    }
    

    function CaluclateAllAverageExpense(array){
        let ExpensesSummed = array.reduce((prev, next)=> prev+Number(next.amount), 0);
        let Result = Number(ExpensesSummed/array.length);
        return Result
    }

    

    function CalculateMaxAverageExpense(array, category){
        let MaxCategoryExpenses = array.filter(element=> element.category===category)
        let Sum = 0;
        for(let i=0; i<MaxCategoryExpenses.length;i++){
            Sum+= Number(MaxCategoryExpenses[i].amount);


        }
        let Result  = Sum/MaxCategoryExpenses.length;
        return Result

    }

    function CountMaxExpense(array){
        let maxValue = 0;
        let maxCategory = '';
        for(let i=0; i<array.length;i++){
            if(Number(array[i].AmountSpent)>maxValue){
               maxValue= array[i].AmountSpent;
                maxCategory= array[i].expenseCategory;

        }
    }
        return {maxValue:maxValue,
                maxCategory:maxCategory

        }
    }
    useEffect(()=>{
        const Max = CountMaxExpense(categoriesExpensesChart)
        const SUM = SumUp(categoriesExpensesChart)
        const percentage=((Max.maxValue/SUM)*100);
        const AverageExpense = CalculateMaxAverageExpense(expensesList, Max.maxCategory)
        const AverageAllExpense = CaluclateAllAverageExpense(expensesList)

        setMaxData(Max)
        setPercentage(percentage)
        setAverageExpense(AverageExpense)
        setAverageAllExpense(AverageAllExpense)

        FindNoExpenses(categoriesExpensesChart)
        


    },[categoriesExpenses])

    function SumUp(array){
        let Sum = 0;
        for(let i=0; i<array.length;i++){
            Sum+=array[i].AmountSpent;
        }
        return Sum;

    }

    
    console.log(categoriesExpensesChart)
const COLORS = [
  '#8884d8', '#82ca9d', '#ffc658', '#ff8042',
  '#00C49F', '#4FC3F7', '#FF6666', '#AA66CC',
  '#0099CC', '#FF4444', '#00C851', '#33b5e5'
];



    return(
        <>
        <div className='CategoryExpensesChart'>
            <div className='ChartsContainer'>
            <h2>Kategorie Wydatki</h2>
            <div className='StickChart'>
                <ResponsiveContainer>
                    <BarChart data={categoriesExpensesChart}>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis dataKey="expenseCategory"/>
                    <YAxis/>
                    <Tooltip/>
                    <Bar dataKey="AmountSpent" >
                    {categoriesExpensesChart.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                    </Bar>
                    </BarChart>
                </ResponsiveContainer>

            </div>
            <div className='PieChart'>
                <PieChart width={500} height={250} >
                <Pie
                    data={categoriesExpensesChart}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    dataKey="AmountSpent"
                    nameKey="expenseCategory"
                    label
                >
                    {categoriesExpensesChart.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Tooltip />
                </PieChart>


            </div>
            <div className='SpiderChart'>
                <ResponsiveContainer width={600} >
                    <RadarChart cx="50%" cy="50%" outerRadius="50%" data={categoriesExpensesChart}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="expenseCategory" />
                    <PolarRadiusAxis />
                    <Radar name="Wydatki" dataKey="AmountSpent" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                    <Tooltip />
                    </RadarChart>
                </ResponsiveContainer>
                </div>
                
            </div>
           
            <div className='statsContainer'>
                <h2>Najwięcej wydajesz na: {maxData.maxCategory}</h2>
                <h2>Na {maxData.maxCategory} wydałeś {maxData.maxValue} zł</h2>
                <h2>To {percentage.toFixed(2)}% twoich wszystkich wydatków</h2>
                <h2>W kategorii {maxData.maxCategory} twój wydatek średnio wynosi {averageExpense.toFixed(2)} zł</h2>

                <h2>Twój wydatek ma średnio wartość {averageAllExpense}zł</h2>
                <h2>Nie wydałeś nic na {...noExpenseCategories.join(', ')}</h2>


            </div>






        </div>

    </>
    )
}
export default ChartsPage