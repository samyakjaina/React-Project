import { useState } from "react";
function Home() {

    const [count , setCount] = useState(0);
    const [display, setDisplay] = useState("");

  function callFunction() {
    alert("Main  called!");
} 

function callFuncs(name) {
  setCount(count + 1);
  
}
  return (
    <div>
      <h1>Home</h1>
      <p>Welcome to my React application.</p>
      <p>Name: {display}</p>
      <input type="text" placeholder="Enter your name " value = {display} onChange={(e) => setDisplay(e.target.value)} />
      <button onClick = {() =>setDisplay("")}> clear </button>
      {/* <button onClick={callFunc}>Call Function</button> */}
      
      {/* <button onClick = {() =>callFuncs("name")}> increment count </button> */}
      {/* {display && <p>Count: {count} </p>}
      {count == 0 ? <p>Count is zero</p>
       : count == 1 ? <p>Count is one</p> : null} */}
    </div>
  );
}
const callFunc = ()=>{
  alert("Fucntion  called!");
}
function callFunction() {
    alert("Function called!");
}
export default Home;