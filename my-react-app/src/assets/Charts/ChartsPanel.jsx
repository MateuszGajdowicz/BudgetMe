import DateCharts from "./DateCharts"
import CategoriesCharts from "./CategoriesCharts"
function ChartsPanel({expensesList,categoriesExpenses}){
    return (
        <>
        <CategoriesCharts expensesList={expensesList} categoriesExpenses={categoriesExpenses}/>
        <DateCharts expensesList={expensesList} categoriesExpenses={categoriesExpenses}/>
        </>
    )
}
export default ChartsPanel