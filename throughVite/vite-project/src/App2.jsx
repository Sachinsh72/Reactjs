 import { useState } from "react";
import { Avatar, DestructuredAvatar } from "./Avatar";

 function App2(){
    const obj = {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-aBDBxegoNFLLcyAuqXtCKFOdtjJ7p_3m0g&usqp=CAU",
        width: "100px",
        height: "100px"
    }

    const [todos] = useState(['todo1','todo2'])

    return(
        <>
            <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiLb_qkQXM8c8k3qDD64ORSvy58e8IgYICtA&usqp=CAU"
            width="100px"
            height="100px"/>

            <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToUS82iQK12BirjePRcpBO-rtyceGSjNY2dA&usqp=CAU"
            width="100px"
            height="100px"/>

            <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOYYFN0rxjKORERXc3AuyUzVm7Ro4ixTJzZA&usqp=CAU"
            width="100px"
            height="100px"/>
            <br/>

            <DestructuredAvatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAnI33utT_AfatFvwqr9LLt599wJoIriqyIw&usqp=CAU"
            width="100px"
            height="100px"
            >
            <span>Child tag</span>
            </DestructuredAvatar>
        
            <Avatar
                {...obj}
            />

            {todos.map((v,idx) => <li key={idx}>{v}</li>)}


        </>
    )
 }

export default App2