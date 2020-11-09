import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import MainPage from './components/Main';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Histoire from './components/Histoire';


function App() {
  return (
    <Router>
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/histoire" component={Histoire}/>
      </Switch>
      <div className="container">
      </div>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
