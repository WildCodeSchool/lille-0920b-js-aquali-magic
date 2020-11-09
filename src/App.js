import MainPage from './components/Main';
import Navbar from './components/Navbar';
import SearchBarRapid from './components/search-rapid/search-bar-rapid';
import Footer from './components/Footer';
import Story from './components/Story';
import {Route, Switch} from "react-router-dom";
import styled from 'styled-components';

const Page = styled.div`
 color : white;
 margin : -8px;
`

function App() {
  return (
    <Page>
      <Navbar />
      <div className="container">
        <SearchBarRapid />
      </div>
      <Switch>
        <Route exact path="/" component={MainPage}/>
        <Route path="/Story" component={Story} />
      </Switch>
      
      <Footer />
    </Page>
  );
}

export default App;
