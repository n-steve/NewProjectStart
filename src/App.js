import { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    fetch(`http://localhost:3000/Forex`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((r) => r.json())
      .then((data) => console.log(data));
  }, []);
  return (
    <div className="App">
      <header className="App-header">HELLOHELLO!</header>
      <h1>TEST TEST</h1>
    </div>
  );
}

export default App;

//https://exchangerate.host/#/docs
//https://v5.reactrouter.com/web/api/Route/route-render-methods
//https://www.forextime.com/trading-tools/currency-converter
//https://github.com/CarlosEscat/forex-app
//https://codepen.io/DeLeon/pen/kyGMRm
//https://stackoverflow.com/questions/60814704/flags-inside-a-react-bootstrap-select-option-renders-as-object-object
//https://mdbootstrap.com/docs/b5/react/content-styles/flags/
