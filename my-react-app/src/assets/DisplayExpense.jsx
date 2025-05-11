function DisplayExpense({expensesList, setExpensesList,DeleteExpense}){


    return(
        <>
        {expensesList.map((element, index)=>(
            <div key={index}>
                <h1>{element.name}</h1>
                <h2>
  {`${element.amount} - ${element.category} - ${new Date(element.date).toLocaleDateString("pl-PL")} ${new Date(element.date).toLocaleTimeString("pl-PL", { hour: '2-digit', minute: '2-digit' })}`}
</h2>
            <button onClick={()=>{DeleteExpense(element.id)}}>Usuń</button>
            </div>


        ))}
        </>
        
    );

}
export default DisplayExpense