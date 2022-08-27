import { Routes, Route } from "react-router-dom";
import Home from "../src/Pages/Home/Home"
import Atividade01 from "../src/Pages/Atividade01/Atividade01"

function App() {
  return (
    <div className="App">
   
        <Routes>
          <Route exact path="/" element={< Home/>} />
          <Route path="/atividade01" element={<Atividade01/>}/>
          </Routes>
      
    </div>
  );
}

export default App;
