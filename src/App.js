import logo from './indoLogo.jpg';
import './App.css';
import NavBar from './componenents/NavBar';
import Info from './componenents/Info';

function App() {
  return (
    <><NavBar /><div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
    <Info />
    </>
  );
}

export default App;
