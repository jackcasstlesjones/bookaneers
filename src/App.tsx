import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import CardsContainer from "./Components/CardsContainer/CardsContainer";

function App() {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <CardsContainer />
      </div>
    </>
  );
}

export default App;
