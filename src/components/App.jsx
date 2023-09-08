import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Projects from "../Pages/Projects";
import Nav from "./Nav";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/projects" element={<Projects />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
