

import Expense from "./Expense"
import "./App.css"
import { createContext, useState } from "react"



export const expenseContext = createContext();
function App() {
  const [userName,setUserName] = useState("");
  const [cost,setCost] = useState(0);
  const [data,setData] = useState([])
  const [budget,setBudget] = useState(0);
  const [remainingBudget,setRemainingBudget] = useState(0);
  const [spend,setSpend]= useState(0);
  
  return (
   <>
   <expenseContext.Provider value={{userName , setUserName , setBudget , setCost ,setRemainingBudget,setSpend , cost , budget , remainingBudget , spend , setData , data}}> 
   <Expense />
   </expenseContext.Provider>

   </>
  )
}

export default App