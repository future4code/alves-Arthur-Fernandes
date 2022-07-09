import Header from "./Components/Header";
import TelaMatch from "./Screen/TelaMatch"
import TelaInicial from "./Screen/TelaInicial"
import React,{useState, useEffect} from "react";

function App() {
  const [tela, setTela] = useState(2)
  
const switchScreen = (x) => {
  setTela(x)
}  

let screen 
  switch (tela) {
    case 2:
     screen = <>
      <Header change={switchScreen}/>
      <TelaMatch/>
      </>
      break;
  
    default:
     screen = <>
      <Header change={switchScreen}/>
      <TelaInicial/>
      </>
      break;
  }
  
  return (
    <div>
      {screen}
    </div>
  );
}

export default App;
