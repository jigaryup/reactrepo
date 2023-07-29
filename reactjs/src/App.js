import logo from './logo.svg';
import './App.css';
import User from './User'

function App() {

  
   function Apple() {
    return (
      <div>Apple </div>
    )
  }
  
  return (
    <div className="App">
      <h1>Hello world</h1>
      <User />
      <Apple />
    </div>
  );
}

export default App;
