import { useDispatch } from "react-redux";
import { changeStatus } from "../store/actions/todo";

export default function ListItem({ item }) {
  const dispatch = useDispatch();

  function clickHandler(id) {
    dispatch(changeStatus(id));
  }

  return (
    <div
      className={`item-list ${item.isDone ? "item-done" : ""}`}
      onClick={() => clickHandler(item.id)}
    >
      {item.title}
    </div>
  );
}
