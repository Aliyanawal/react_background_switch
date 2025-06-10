import { useState } from "react";
function Toggle(){
    const [para , setPara] = useState(true);

    function hidePara(){
        setPara(!para) ;
    }

    
        
   



    return(
        <div>
            <button onClick={hidePara}>Hide the paragraph</button>
            <p> {para ? "this para will be hidden" : ""}</p>
        </div>
    );

}
export default Toggle;