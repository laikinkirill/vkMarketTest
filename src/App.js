import "./App.css";
import Left from "./components/Left/Left";
import Right from "./components/Right/Right";
import Products from "./components/Products/Products";

function App() {
  return (
    <div className="container">
      <Left>
        <Products />
      </Left>
      <Right />
    </div>
  );
}

export default App;
