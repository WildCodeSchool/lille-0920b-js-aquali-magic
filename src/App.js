import './App.css';
import MainPage from './components/Main';
import Navbar from './components/Navbar';
import SearchBarRapid from './components/search-rapid/search-bar-rapid';
import Footer from './components/Footer';
import styled from 'styled-components'

const Page = styled.div`
 color : white;
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
