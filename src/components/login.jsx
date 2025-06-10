import { useState } from "react";

function Log(){
    const [logged , isLogged]= useState(false);

    function login(){
        isLogged(!logged);
    }

    return(
        <div>
            <button onClick={login}>{logged ? "LogOut" : "LogIn"}</button>
        </div>
    )


}

export default Log;