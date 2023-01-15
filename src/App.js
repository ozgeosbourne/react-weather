import Weather from "./Weather";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
    <Weather defaultCity="Istanbul" />
      </div>
      <footer>
      <p className="footer">
        <a href="https://github.com/ozgeosbourne/react-weather">
          Open source-code </a
        >by Özge Yaşar 🌱
      </p>
    </footer>
    </div>
  );
}

export default App;
