import React, { useState } from "react";
function Counter(){
   

    const [count , setCount ] = useState(0);

    function counterPlus(){
        setCount(count+1);
    }

    function counterMinus(){
        setCount(count-1)
    }

    function reset(){
        setCount(0);
    }

    const pageStyle = {

    }

    return(
        <div>
            <button onClick={counterPlus}>Count+</button>
            <button onClick={counterMinus}>Count-</button>
            <button onClick={reset}>Reset</button>
            <h3>You have clicked {count} times</h3>
        </div>
    );

}

export default Counter;