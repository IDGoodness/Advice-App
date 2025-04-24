import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
// import adviceResp from "./AdviceResp"; // Removed unused import
import AdviceResp from "./adviceResp"; // Corrected import path

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/advice" element={<AdviceResp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
