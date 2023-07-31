// import default export
// import DogCard from "./DogCard";
// import named export
import {DogCard, DogCard2} from "./DogCard";
import Image,{CatCard,DestructureProps} from "./Image";

function App() {
  return (
    <> 
      {/* div1 */}
      <div className="App">
        <DogCard/> 
        <Image/>
        <button id="btn">
          <span>
           Submit
          </span>
        </button>
      </div>
      {/* div2 */}

      {/* //props call */}
      <DogCard2 name="KITI" image="https://images.unsplash.com/photo-1615789591457-74a63395c990?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9tZXN0aWMlMjBjYXR8ZW58MHx8MHx8fDA%3D&w=1000&q=80"/>

      
      {/* props call  */}
      <CatCard image="https://t4.ftcdn.net/jpg/02/66/72/41/360_F_266724172_Iy8gdKgMa7XmrhYYxLCxyhx6J7070Pr8.jpg"/>

      <DestructureProps name="Tommy" age="15"/>
    </>
  );
}

export default App;
