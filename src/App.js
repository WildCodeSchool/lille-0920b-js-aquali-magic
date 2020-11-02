import './App.css';
import MainPage from './components/Main';
import Navbar from './components/Navbar';
import SearchBarRapid from './components/search-rapid/search-bar-rapid';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <SearchBarRapid />
      </div>
      <MainPage />
      <Footer />
    </div>
  );
}

export default App;
