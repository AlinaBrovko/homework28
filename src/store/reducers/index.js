import { ACTION_ADD_TODO, ACTION_CHANGE_STATUS } from "../actions/todo";

const initialState = {
  todos: [
    { id: 1, title: "some", isDone: false },
    { id: 2, title: "some done", isDone: true },
  ],
};
const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ACTION_ADD_TODO:
      const todos = payload
        ? [
            ...state.todos,
            { id: new Date().getTime(), title: payload, isDone: false },
          ]
        : state.todos;
      return { ...state, todos: todos };
    case ACTION_CHANGE_STATUS:
      const changedList = state.todos.map((item) => {
        return item.id === payload ? { ...item, isDone: !item.isDone } : item;
      });
      return { ...state, todos: changedList };
    default:
      return state;
  }
};

export default rootReducer;
