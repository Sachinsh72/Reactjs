// Problem 1

export function Person(props){
  return(
    <>
      <p>{props.name}'s age is {props.age}</p>
    </>
  )
}

// Problem 2

export function Button(props){
  return( 
    <>
      <button onClick={props.onClick}>
        {props.text}
      </button>
    </>
  )
}

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
  return <li>{props.item}</li> 
}