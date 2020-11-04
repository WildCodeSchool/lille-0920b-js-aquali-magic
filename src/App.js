import MainPage from './components/Main';
import Navbar from './components/Navbar';
import SearchBarRapid from './components/search-rapid/search-bar-rapid';
import Footer from './components/Footer2';
import styled from 'styled-components'

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
      <MainPage />
      <Footer />
    </Page>
  );
}

export default App;
