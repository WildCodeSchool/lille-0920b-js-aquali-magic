import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import MainPage from "./components/Main";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="container"></div>
        <Switch>
          <Route exact path="/" component={MainPage} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
