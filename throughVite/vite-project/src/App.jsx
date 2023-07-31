// Problem 1

export function Person(props){
  return(
    <>
      <h2>Problem 1</h2>
      <p>Name = {props.name}</p>
      <p>Age = {props.age}</p>
    </>
  )
}

// Problem 2

// export function Button(props){
//   return( 
//     <>
//       const btn = document.getElementById("btn");
//       if(btn.innerText === "Click to chenge"){
//             x.innerText = "The most affordable learning platform"
//             }else{
//                 x.innerText = "PW Skills"
//             }
//       <p>Click below</p>
//       <button id="btn">{props.text}</button>
//       {/* <button>{props.text}</button> */}
//     </>)
// }

// Problem 3
export function Header(props){
  return(
    <>
      <h1>Title: {props.title}</h1>
    </>
  )
}

//Problem 4
export function List(props){
  
  return(
    <>
      <li>{props.item}</li>
    </>
  ) 
}