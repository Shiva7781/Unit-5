import React from "react";
import "./counter.css"

const Counter = () => {
    const [counter,setCounter] = React.useState("[Please enter number]");

    const userInput = (e) => {
        if (e.key === "Enter") {
            setCounter(Number(document.getElementById("user-input").value));
            document.getElementById("user-input").value = "";
        }
    }

    const handleChange = (val,op="add") => {
        if (op === "mult") {
            setCounter(counter * val);
        } else {
            setCounter(counter + val);
        }
    }

    return (
        <>
            Enter the number where you want to start from ? <br></br>
            <input onKeyPress={userInput} id="user-input" placeholder="Enter number"></input>
            <br></br>

            <div id="counter" className={counter % 2 === 0 ? "even" : "odd"}>Counter : {counter}</div>
            
            <button onClick={() => {handleChange(1)}}>+</button>
            <button onClick={() => {handleChange(-1)}}>-</button>
            <button onClick={() => {handleChange(2,"mult")}}>Double</button>
    </>
    )
}

export {Counter}