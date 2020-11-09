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
import Regles from './Regles';
import Cartes from './components/Cartes';
import Booster from './components/Booster';


function App() {
  return (
    <Router>
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/histoire" component={Histoire}/>
        <Route exact path="/regles" component={Regles} />
        <Route path="/creation" component={Cartes}/>
        <Route path="/booster" component={Booster}/>
      </Switch>
      <div className="container">
      </div>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
