import "./App.css";
import Cart from "./Component/Cart";
import Item from "./Component/Item";

function App() {
  return (
    <div className="App">
      <Item name="MacBook Pro" price={100000} />
      <Item name="PenDrive" price={4000} />
      <Item name="Mobile" price={10000} />
      <Cart />
    </div>
  );
}

export default App;
