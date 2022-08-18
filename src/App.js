import logo from './thyme.png';
import './App.css';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
Thymer        </p>

        <Footer/>
      </header>
    </div>
  );
}

export default App;
