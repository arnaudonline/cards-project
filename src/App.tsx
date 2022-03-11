import React from "react";
import logo from "./logo.svg";
import * as Device from 'expo-device';
import "./App.css";

import Cards from "./components/Cards";

function App() {
  return (
    <div className="App">
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <Cards />
    </div>
  );
}

export default App;
