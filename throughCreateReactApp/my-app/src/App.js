// import default export
// import DogCard from "./DogCard";
// import named export
import {DogCard, DogCard2} from "./DogCard";
import Image from "./Image";

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
      <DogCard2/>
    </>
  );
}

export default App;
