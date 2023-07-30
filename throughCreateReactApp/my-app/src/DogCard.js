// this file is dog card component 
import Image,{CatCard} from "./Image"


//------------for the default export--------------

// function Image2(){
//     return <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgv4FNo9bLwI295oa4V6JPiS0TALEE-IZECQ&usqp=CAU" alt="img" />
// }

// function DogCard(){
//     // return  <div>dog</div>
//     return(
//         <div>
//             <h3>Bruno</h3>
//             <Image2/>
//             <Image2/>
//             {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgv4FNo9bLwI295oa4V6JPiS0TALEE-IZECQ&usqp=CAU" alt="img"/> */}
//         </div>
//     )
// }

//  export default DogCard


//------------for the named export----------------
// export function Image(){
//     return <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgv4FNo9bLwI295oa4V6JPiS0TALEE-IZECQ&usqp=CAU" alt="img" />
// }

export function DogCard(){
    // return  <div>dog</div>
    return(
        <div>
            <h3>Bruno</h3>
            <Image/>
            <Image/>
            {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgv4FNo9bLwI295oa4V6JPiS0TALEE-IZECQ&usqp=CAU" alt="img"/> */}
        </div>
    )
}

// --------React Fragment----------
// React Fragment is a feature in React that allows you to return 
// multiple elements from a React component by allowing you to group 
// a list of children without adding extra nodes to the DOM. 
// To return multiple elements from a React component, 
// you'll need to wrap the element in a root element.

export function DogCard2(props){
    return(
        <>
            <h3>{props.name}</h3>
            <CatCard image={props.image}/>
        </>
    )
}
