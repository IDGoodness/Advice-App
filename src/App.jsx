import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import "./App.css";
import Home from "./Pages/Home";
import Search from "./Pages/Search";


function App() {

  useEffect(() => {
    console.log("App mounted");
  }, []);


  return (
    <>
      <BrowserRouter>
      <div className='flex items-center justify-center h-[100vh] bg-[#191d23] '>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
        </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App
