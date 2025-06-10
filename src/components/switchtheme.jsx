import React , {useState} from "react";
function SwitchTheme(){
    const [isDark, setIsDark] = useState(false);



    function toggleTheme(){
    setIsDark(!isDark);
    }

    const pageStyle = {
    backgroundColor: isDark ? "Black" : "White" ,
    color: isDark ? "White" : "Black" ,
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'

    };

    return(
    <div style={pageStyle}>
        <button onClick = {toggleTheme}>Switch Theme</button>
    </div>
    );

}

export default SwitchTheme();