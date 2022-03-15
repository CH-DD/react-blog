import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.js";
import Home from "./components/Home.js";
import CreateArticle from "./components/CreateArticle.js";
import Article from "./components/Article.js";


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
          <Route path="/articles" element={<Home />} />
          <Route path="/create-article" element={<CreateArticle />} />
          <Route path="/articles/:id" element={<Article />} />
        </Routes>

      </>
    </BrowserRouter>
  );
}

export default App;
