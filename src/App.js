import logo from "./thyme.png";
import "./App.css";
import Footer from "./components/Footer";
import { NavLink, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Thymer </p>
        <br />
        <nav>
          <NavLink className="links" to="/stopwatch">
            Stopwatch
          </NavLink>{" "}
          |{" "}
          <NavLink className="links" to="/timer">
            Timer
          </NavLink>
        </nav>
        <Outlet />
        <Footer />
      </header>
    </div>
  );
}

export default App;
