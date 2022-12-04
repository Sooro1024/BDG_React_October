import { todoSelector } from "./selectors";
import { SET_TODOS } from "./type";

const setTodosAction = (todo) => ({ type: SET_TODOS, payload: todo });

const handelDeleteAction = (id) => async (dispatch, getState, extraArgs) => {
  try {
    await extraArgs.networkProvider.delete(`/todos/${id}`);
    const todos = todoSelector(getState()).filter((todo) => {
      return todo._id !== id;
    });
    dispatch(setTodosAction(todos));

    // setTodos((prevTodos) => prevTodos.filter((el) => el._id !== id));
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
};

export const getTodosAction = () => async (dispatch, getState, extraArgs) => {
  try {
    const { data } = await extraArgs.networkProvider.get("/todos");
    dispatch(setTodosAction(data));
  } catch (error) {
    console.log(error);
  }
};

export { handelDeleteAction };
