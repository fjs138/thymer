import logo from "./thyme.png";
import "./App.css";
import Footer from "./components/Footer";
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Thymer </p>
        <br/>
        <nav
          style={{
            alignContent: "center",
            borderBottom: "solid 1px",
            paddingBottom: "1rem",
          }}
        >
          <Link className="links" to="/stopwatch">
            Stopwatch
          </Link>{" "}
          |{" "}
          <Link className="links" to="/timer">
            Timer
          </Link>
        </nav>
        <Outlet />
        <Footer />
      </header>
    </div>
  );
}

export default App;
