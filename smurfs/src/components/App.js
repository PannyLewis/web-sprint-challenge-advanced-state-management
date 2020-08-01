import React from "react";
import "./App.css";

//components
import SmurfsList from "./PlayersList";
import SmurfsForm from "./PlayersForm";

function App() {
  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>
      <div>Welcome to your state management version of Smurfs!</div>
      <div>Start inside of your `src/index.js` file!</div>
      <div>Have fun!</div>

      <SmurfsForm />
      <SmurfsList />
    </div>
  );
}

export default App;
