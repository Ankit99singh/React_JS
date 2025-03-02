import { useState } from "react";

function CounterReact(){
    //let counter=10; // update value but does not refect in  UI
let [counter,setCounter]=useState(0);


    const addValue=()=>{
        console.log("add ",counter);
        setCounter(counter+=1);
        setCounter(counter+=1);
        setCounter(counter+=1);
    }
    const SubValue=()=>{
        console.log("Sub ",counter);
        if(counter>0)
        {setCounter(counter-=1);}
        else(
            alert("value less than 0")
        )
    }

    return(
        <>
        <h1>counter {counter}</h1>
            <button onClick={addValue}>add value</button>
            <button onClick={SubValue}>Sub value</button>
        </>
    )
}

export default CounterReact;