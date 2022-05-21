import {
  ADD_TODO,
  DELETE_TODO,
  TOGGLE_TODO,
  TOGGLEUPDATE_TODO,
  EDIT_TODO,
  SORT_TODO
} from "./action";

export const allReducers = (store, { type, payload }) => {
  switch (type) {
    case ADD_TODO:
      return { ...store, todo: [...store.todo, payload] };
    case DELETE_TODO:
      return { ...store, todo: store.todo.filter((e) => e.id != payload) };

    case TOGGLE_TODO:
      return {
        ...store,
        todo: store.todo.map((e) => {
          return e.id === payload ? { ...e, status: !e.status } : e;
        }),
      };
    case TOGGLEUPDATE_TODO:
      return {
        ...store,
        todo: store.todo.map((e) => {
          return e.id === payload ? { ...e, update: !e.update } : e;
        }),
      };
    case EDIT_TODO:
      return {
        ...store,
        todo: store.todo.map((e) =>
          e.id === payload.id ? { ...e, name: payload.text } : e
        ),
      };

    case SORT_TODO:
      return {
        ...store,
        todo: [...store.todo].sort((a, b) =>
          a[payload] > b[payload] ? 1 : a[payload] < b[payload] ? -1 : 0
        ),
      };
    default:
      return store;
  }
};
