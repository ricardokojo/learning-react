import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Menu from "./components/Menu";

function App() {
  return (
    <BrowserRouter>
      <Menu/>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="about" element={<AboutMe/>}/>
        <Route path="*" element={<div>Página não encontrada</div>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
