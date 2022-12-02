import Matchs from "./components/Matchs";
import NavbarHead from "./components/NavbarHead";
import "./styles/index.scss";

function App() {
  return (
    <div className="App">
      <NavbarHead />
      <Matchs name="foot" />
    </div>
  );
}

export default App;
