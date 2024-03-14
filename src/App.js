import "./App.css";
import Left from "./components/Left/Left";
import Right from "./components/Right/Right";
import Card from "./components/Card/Card";

function App() {
  return (
    <div className="container">
      <Left>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Left>
      <Right />
    </div>
  );
}

export default App;
