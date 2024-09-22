import logo from './logo.svg';
import './App.css';

function App() {
  function payment() {
    console.log("Testing")
  }
  return (
    <div>
      <button onClick={() => {
        payment()
      }}>Click Me</button>
    </div>
  );
}

export default App;
