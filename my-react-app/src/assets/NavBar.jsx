function NavBar({setDisplayNavBar,displayNavBar,NavigateToMainPage,NavigateToExpensesPage,NaviagteToBudgetPage,NaviagetToChartsPage,LogOut}){
    return(<>
      <nav  style={{display:displayNavBar?"flex":"none"}}>
        
      <ul onClick={()=>setDisplayNavBar(false)}>
        <li id="X"onClick={()=>setDisplayNavBar(false)}>X</li>
        <li id="BudgetMe">BudgetMe</li>
        <li onClick={NavigateToMainPage}>Strona główna</li>
        <li onClick={NavigateToExpensesPage}>Wydatki</li>
        <li onClick={NaviagteToBudgetPage}>Budżet</li>
        <li>Cele</li>
        <li onClick={NaviagetToChartsPage}>Statystyki</li>
        <li>Ustawienia</li>
        <li>Profil</li>
        <li onClick={LogOut}>Wyloguj</li>
      </ul>
    </nav>
    </>)
}
export default NavBar