import { useState } from "react";

let z = 10;

function Counter(){
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    // let z = 10; 

    return(
        <>
            Count Z: {z}
            <button onClick={() => z+=1}>Inc</button> <br/>
            Count X: {x}
            <button onClick={() => setX(x+1)}>Inc</button>
            <button onClick={() => setX(x-1)}>Dec</button>
            <br/>
            Count Y: {y}
            <button onClick={() => setY(y+1)}>Inc</button>
            <button onClick={() => setY(y-1)}>Dec</button>
        </>
    )

}

export default Counter;