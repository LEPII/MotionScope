import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <h1>MotionScope</h1>
      <div id="main">
        <Outlet />
      </div>
    </>
  );
}

export default App;
