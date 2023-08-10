import { useState } from "react";

export function Todos(){

    const [isEditting, setIseditting] = useState(false);
    return(
        <>
            {
                (isEditting) ? <input/> : <p>some todos</p>
            }
            <br/>
            <button onClick={()=>setIseditting(!isEditting)}>Click</button>
        
        </>
    )
}

export function ArrayTodos(){
    const [todos, setTodos] = useState(['todo 1', 'todo 2']);

    return(
        <ul>
            {todos.map((todos)=><li>{todos}</li>)}
            <button onClick={()=> setTodos([...todos,'another 1'])}>Click</button>
        </ul>
    )
}
