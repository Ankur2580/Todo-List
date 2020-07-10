import React from 'react';
import './App.css';

const App = () => {
  return (
   <>
     <div className = "main_div">
       <div className ="center_div">
         {/* <br></br> */}
         <h1> To Do List</h1>
         {/* <br></br> */}
         <input type="text"  placeholder="Add Items"></input>
         <button> + </button>

         <ol>
            <li>  Laptop  <button className = "btn" >x</button> </li>
            
         </ol>
       </div>
     </div>
   </>
    
  );
}

export default App;
