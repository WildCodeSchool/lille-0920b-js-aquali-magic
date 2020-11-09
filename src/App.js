import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import MainPage from './components/Main';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App() {
  return (
    <Router>
    <div>
      <Navbar />
      <Route path="/" component={MainPage} />
      <div className="container">
      </div>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
