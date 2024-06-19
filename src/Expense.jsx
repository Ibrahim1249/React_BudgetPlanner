


import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Item from "./Item"
import { useContext , useEffect } from 'react';
import { expenseContext } from './App';


function Expense() {
    const {budget , remainingBudget , spend , setBudget , setUserName , setCost , data , setData , userName , cost ,setSpend , setRemainingBudget} = useContext(expenseContext);
    
    function handleSave(){
        if(userName.length > 0 && cost > 0){
            const obj ={};
            obj.name = userName;
            obj.cost = cost;
            obj.id = Date.now();
            
            setData([...data , obj ])
            setCost(0);
            setUserName("")
        }else{
            alert("Please write name and cost !!!! empty field not allowed ");
            return;
        }
   
    }

    function handleDelete(e,id){
       let copyArray = [...data];
       setData(copyArray.filter((item,index)=>{
           return item.id !== id;
       }))
    }
    

    useEffect(() => {
          const userInput = prompt('Please enter a Budget Amount:');
          if (!isNaN(userInput) && userInput !== null) {
            setBudget(userInput);
            setRemainingBudget(userInput)
          }else{
            setBudget(10000)
            setRemainingBudget(10000)
          }
      }, []);

      useEffect(()=>{
        
            let copyArray = [...data];
            
            let totalCost = 0;
            copyArray.map((item,index)=>{
                totalCost += Number(item.cost);
            })
           
            setSpend(totalCost)
         
      
      },[data])

  return (
    <>
     <div className="container">
        <h1>My Budget Planner</h1>

        <div className="display-container">
          <h4>Budget: {budget} Rs</h4>
          <h4 className='remain'>Remaining: {remainingBudget - spend  } Rs</h4>
          <h4 className='spend'>Spend so far : {spend} Rs</h4>
        </div>
         
        <h3>Add Expenses</h3>
        <div className="detail">
        <TextField id="outlined-basic" label="Name" variant="outlined" style={{width:"50%"}} 
          value={userName} onChange={(e)=>setUserName(e.target.value) }
        />
        <TextField id="outlined-basic" label="Cost" variant="outlined" type="number"
         value={cost} onChange={(e)=>setCost(e.target.value)} min={1} max={Number(remainingBudget)}
        />
        <Button variant="outlined" onClick={handleSave} style={{ color: "#000000"}}>Save</Button>
        </div>

        <h3>Expenses : </h3>
        <div className="expense-container">
           {data.map((item,index)=>{
             return <Item key={index} data={item} handleDelete={handleDelete}/>
           })}
        </div>
     </div>
    </>
  )
}

export default Expense