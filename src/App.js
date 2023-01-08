import Weather from "./Weather";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
    <Weather defaultCity="Istanbul" />
      </div>
    </div>
  );
}

export default App;
