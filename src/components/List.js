import { useSelector } from "react-redux";
import ListItem from "./ListItem";

export default function List() {
  const todos = useSelector((state) => state.todos);
  return (
    <div className="list">
      {todos.map((item) => (
        <ListItem item={item} key={item.id} />
      ))}
    </div>
  );
}
