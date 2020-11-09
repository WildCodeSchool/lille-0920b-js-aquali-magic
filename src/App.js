import './App.css';
import MainPage from './components/Main';
import Navbar from './components/Navbar';
import SearchBarRapid from './components/search-rapid/search-bar-rapid';
import Footer from './components/Footer';
import Story from './components/Story';
import {Route, Switch} from "react-router-dom";



function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <SearchBarRapid />
      </div>
      <Switch>
        <Route exact path="/" component={MainPage}/>
        <Route path="/Story" component={Story} />
      </Switch>
      
      <Footer />
    </div>
  );
}

export default App;
