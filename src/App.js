import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import MainPage from "./components/Main";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Card from "./components/carte-description/carte-description";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/card/:name" component={Card} />
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
