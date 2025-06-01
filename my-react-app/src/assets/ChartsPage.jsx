import './ChartsPage.css'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

function ChartsPage({categoriesExpenses}){
    console.log(categoriesExpenses)

    const categoriesExpensesChart = Object.entries(categoriesExpenses).map(([expenseCategory, expenseAmount])=>({
        expenseCategory:expenseCategory,
        expenseAmount:expenseAmount
    }))
    console.log(categoriesExpensesChart)

    return(
        <>
        <div className='CategoryExpensesChart'>
            <ResponsiveContainer>
                <BarChart data={categoriesExpensesChart}>
                <CartesianGrid strokeDasharray="3 3"/>
                <XAxis dataKey="expenseCategory"/>
                <YAxis/>
                <Tooltip/>
                <Bar dataKey="expenseAmount" fill="#d49725"/>
                </BarChart>
            </ResponsiveContainer>





        </div>

    </>
    )
}
export default ChartsPage