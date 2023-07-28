function Image(){
    return <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgv4FNo9bLwI295oa4V6JPiS0TALEE-IZECQ&usqp=CAU" alt="img" />
}

function DogCard(){
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

export default DogCard