import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import fakeData from'./fakeData/products.json';

function App() {
  console.log(fakeData);
  return (
    <div>
      <Header></Header>
      <Shop></Shop>
    </div>
  );
}


export default App;
