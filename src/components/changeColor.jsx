import { useState } from "react";

function Colour(){
    const [col , applyCol] = useState("");
    const [appliedColor, setAppliedColor] = useState("black")
    function handleInputChange(e){
        applyCol(e.target.value);

    }

    function applyColor(){
        setAppliedColor(col)

    }

    return(
        <div style = {{backgroundColor : appliedColor,
            height:"100px",
            display:'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <input type="text" id="inputColor"
            placeholder="Enter a Color"
            value={col}
            onChange={handleInputChange}

            />
            <button onClick={applyColor}>apply color</button>
        </div>
    )
}

export default Colour;