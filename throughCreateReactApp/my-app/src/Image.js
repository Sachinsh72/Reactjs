//Image component

function Image(){
    return <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgv4FNo9bLwI295oa4V6JPiS0TALEE-IZECQ&usqp=CAU" alt="img" />
}

// --------------props ------------
// catcard has a props where we can assign any image at component call:

export function CatCard(props){
    return <img src={props.image} alt="catimage"/>
}

// like- <CatCard src="https://t4.ftcdn.net/jpg/02/66/72/41/360_F_266724172_Iy8gdKgMa7XmrhYYxLCxyhx6J7070Pr8.jpg"/>
export default Image