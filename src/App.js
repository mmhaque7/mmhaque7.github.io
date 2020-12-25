import Navbar from "./components/Navbar";
import "./App.css";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      
      <Router>
      <Navbar />
        <Switch>
          <Route exact path="/" render={() => <About  />} />
          <Route exact path="/Project" render={() => <Project />} />
          <Route exact path="/Contact" render={() => <Contact />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
