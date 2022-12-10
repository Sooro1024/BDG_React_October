import { todoSelector } from "./selectors";
import { SET_TODOS } from "./type";

const setTodosAction = (todo) => ({ type: SET_TODOS, payload: todo });

const handelEditAction =
  (inputTitle, inputName, inputDec, id) =>
  async (dispatch, getState, extraArgs) => {
    const newElement = {
      _id: id,
      title: inputTitle,
      userName: inputName,
      description: inputDec,
    };
    try {
      await extraArgs.networkProvider.put(
        `/todos/${newElement._id}`,
        newElement
      );

      const todos = todoSelector(getState()).map((el) => {
        if (el._id === newElement._id) {
          return { ...el, ...newElement };
        }
        return el;
      });
      dispatch(setTodosAction(todos));
    } catch (error) {
      console.log(error);
    }
  };

const handelDeleteAction = (id) => async (dispatch, getState, extraArgs) => {
  try {
    await extraArgs.networkProvider.delete(`/todos/${id}`);
    const todos = todoSelector(getState()).filter((todo) => {
      return todo._id !== id;
    });
    // dispatch(setTodosAction(todos));

    // setTodos((prevTodos) => prevTodos.filter((el) => el._id !== id));
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
};

const handelCreateTodoAction =
  (newTodoData) =>
  async (dispatch, getState, { networkProvider }) => {
    try {
      const newTodo = await networkProvider.post("/todos", newTodoData);
      const currentTodos = todoSelector(getState());

      dispatch(setTodosAction([...currentTodos, newTodo]));
    } catch (error) {
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

export { handelDeleteAction, handelEditAction, handelCreateTodoAction };
