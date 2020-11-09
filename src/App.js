import {
  Switch,
  Route
} from "react-router-dom";
import MainPage from './components/Main';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Histoire from './components/Histoire';
import Regles from './components/Regles';
import Cartes from './components/Cartes';
import Booster from './components/Booster';
import Creation from './components/Creation';
import styled from "styled-components";

const Page = styled.div`
  margin: -8px;
`

function App() {
  return (
    <Page>
      <Navbar />
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/histoire" component={Histoire}/>
        <Route path="/regles" component={Regles} />
        <Route path="/creation" component={Creation}/>
        <Route path="/carte" component={Cartes}/>
        <Route path="/booster" component={Booster}/>
      </Switch>
      <div className="container">
      </div>
      <Footer />
    </Page>
  );
}

export default App;
