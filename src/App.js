import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Nayok></Nayok>
      <Nayok></Nayok><Nayok></Nayok><Nayok></Nayok><Nayok></Nayok>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />        
      </header>
    </div>
  );
}

function Nayok(){
  return <h1>I am the hero</h1>
}

export default App;
