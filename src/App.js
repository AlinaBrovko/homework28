import "./App.css";
import Form from "./components/Form";
import List from "./components/List";

export default function App() {
  return (
    <div>
      <div className="header">
        <h3>TODO List</h3>
      </div>
      <div className="container">
        <Form />
        <List />
      </div>
    </div>
  );
}
