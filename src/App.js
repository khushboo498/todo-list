import logo from "./logo.svg";
import "./App.css";
import Input from "./Input";
import Items from "./Items";

function App() {
  return (
    <div className="App">
      <h1>My Todo List</h1>
      <div className="container">
        <div className="in_app">
          <Input />
          <Items />
        </div>
      </div>
    </div>
  );
}

export default App;
