import { Routes, Route } from "react-router-dom";
import Home from "../src/Pages/Home/Home"
import Atividade01 from "../src/Pages/Atividade01/Atividade01"
import Atividade02 from "../src/Components/Atividade02"
import Atividade03 from "./Pages/Atividade03/Atividade03";
function App() {
  return (
    <div className="App">
   
        <Routes>
          <Route exact path="/" element={< Home/>} />
          <Route path="/atividade01" element={<Atividade01/>}/>
          <Route path="/atividade02" element={<Atividade02/>}/>
          <Route path="/atividade03" element={<Atividade03/>}/>
        </Routes>
      
    </div>
  );
}

export default App;
