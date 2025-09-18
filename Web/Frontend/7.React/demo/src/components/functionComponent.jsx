import { useState } from 'react'
import SecondComp from './comp';
import './Fun.css'

function FnComponent(){

    const myStyle = {
        fontSize: "18px",
        color: "white",
        paddingLeft: "22px",
        backgroundColor: "red"
    }

    // const cars = ['Ford', 'BMW', 'Audi'];
    const persons = [
        {id:1,name:"Collins",age: 20},
        {id:2,name:"Collo",age: 22},
        {id:3,name:"KipCollo",age: 25},
        {id:2,name:"Collo",age: 22},
        {id:2,name:"Collo",age: 22},
        {id:2,name:"Collo",age: 22},
        {id:2,name:"Collo",age: 22},
        {id:2,name:"Collo",age: 22},
        {id:2,name:"Collo",age: 22},
        {id:2,name:"Collo",age: 22},
        {id:2,name:"Collo",age: 22},
        {id:2,name:"Collo",age: 22}]
    const person = persons.map(
        p => {
            return  <SecondComp name={p.name} age={p.age}/>
        }
    )
    console.log(person)

    const [name, setName] = useState("Collins");

    function update(){
        setName("Kosgei");
        console.log(name)
    }
    
    return (
    <div style={myStyle}>
    <h1>Function Component</h1>
    <b>This is a function component</b>
    <p>{name}</p>
    <button type="submit" onClick={update}>Change</button>
    <div className='container'>{person}</div>
    </div>)
}

export default FnComponent;