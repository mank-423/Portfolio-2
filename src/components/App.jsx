import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Projects from "../Pages/Projects";
import Nav from "./Nav";
import Connect from "../Pages/Connect";

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
            <Route exact path="/connect" element={<Connect />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
