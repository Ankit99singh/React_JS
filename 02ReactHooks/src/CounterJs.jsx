
function CounterJs(){
    let counter=10; // update value but does not refect in  UI

    const addValue=()=>{
        console.log("add ",counter);
        counter+=1;
    }
    const SubValue=()=>{
        console.log("Sub ",counter);
        counter-=1;
    }

    return(
        <>
        <h1>counter {counter}</h1>
            <button onClick={addValue}>add value</button>
            <button onClick={SubValue}>Sub value</button>
        </>
    )
}

export default CounterJs;