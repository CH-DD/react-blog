import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.js";
import Home from "./components/Home.js";


function App() {

  return (
    // Wrap everything in 'Router' tag to define routes ('pages')
    <BrowserRouter>
      <>
        <header>
          <Navbar />
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>

      </>
    </BrowserRouter>
  );
}

export default App;
