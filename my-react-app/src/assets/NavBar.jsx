function NavBar({CheckSize,setDisplayNavBar,displayNavBar,NavigateToMainPage,NavigateToExpensesPage,NaviagteToBudgetPage,NaviagetToChartsPage,LogOut}){
    function setDisplayNone(){
        if(!displayNavBar){
            setDisplayNavBar(false)
        }
    }
    return(<>
      <nav  style={{display:displayNavBar?"flex":"none"}}>
        
<ul onClick={() => (setDisplayNavBar(false), CheckSize())}>
        <li id="X"onClick={()=>setDisplayNavBar(false)}>X</li>
        <li id="BudgetMe">BudgetMe</li>
        <li onClick={NavigateToMainPage}>Strona główna</li>
        <li onClick={NavigateToExpensesPage}>Wydatki</li>
        <li onClick={NaviagteToBudgetPage}>Budżet</li>
        <li onClick={NaviagetToChartsPage}>Statystyki</li>
        <li onClick={LogOut}>Wyloguj</li>
      </ul>
    </nav>
    </>)
}
export default NavBar