import React , {useState} from "react";

import Counter from "./components/counter";
import Toggle from "./components/toggle";
import Log from "./components/login";
import Colour from "./components/changeColor";



function App(){
  const PStyle= {
    textAlign:'center',
    alignItems: 'center',
    justifyContent: 'center',
    

  };

  return(

    <div style = {PStyle}>
      
       <Toggle/>
       <Counter/>
       <Log/>
       <br></br>
       <Colour/>
    </div>
  );
  
 

}

export default App;