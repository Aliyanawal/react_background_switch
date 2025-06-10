function Mybutton(){
    const user = {
        name: "aliya",
        class: "A",
        rollno: "21",
        age: "21"  
    }

    return(
        <div>
    <input type="text" placeholder="enter name"></input>
    <button>This is a button</button>
    <Mybutton2 data={user} />
    </div>
    )
}






function Mybutton2({data}){
    return(
        <div>
    <input type="text" placeholder="enter name"></input>
    <button>This is a button</button>
    <p>Name:{data.name}</p>
    </div>
    )
}





// One default export
export default Mybutton;

// One named export
export { Mybutton2 };