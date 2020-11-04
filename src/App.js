import MainPage from './components/Main';
import Navbar from './components/Navbar';
import SearchBarRapid from './components/search-rapid/search-bar-rapid';
import Footer from './components/Footer';
import styled from 'styled-components'
import {device} from "./components/Device.jsx";

const Page = styled.div`
 color : white;
 margin : -8px;
`

const Responsive = styled.div`

  @media ${device.mobile}{
    display: none;

  }
`

function App() {
  return (
    <Page>
      <Navbar />
      <Responsive className="container">
        <SearchBarRapid />
      </Responsive>
      <MainPage />
      <Footer />
    </Page>
  );
}

export default App;
