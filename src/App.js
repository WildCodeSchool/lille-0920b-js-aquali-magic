import './App.css';
import MainPage from './components/Main';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
      </div>
      <MainPage />
      <Footer />
    </div>
  );
}

export default App;
