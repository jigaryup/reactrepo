import logo from './logo.svg';
import './App.css';
import User from './User'
import Student from './Student'
import Employee from './Employee';
import Yyo from './Yyo'
import Form from './Form'

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
      <Student/>
      <Employee name = {"kem cho"}/>
      <Yyo name="yooy yoo"/>
      <Form/>
    </div>
  );
}

export default App;
