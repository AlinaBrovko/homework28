import { useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "../store/actions/todo";

export default function Form() {
  const [form, setForm] = useState({ title: "" });
  const dispatch = useDispatch();

  function changeHandler(e) {
    setForm({ title: e.target.value });
  }
  function submitHandler(e) {
    e.preventDefault();
    dispatch(add(form.title));
    setForm({ title: "" });
  }
  return (
    <form onSubmit={submitHandler} className="add-list">
      <input type="text" value={form.title} onChange={changeHandler} />
      <button type="submit">+</button>
    </form>
  );
}
