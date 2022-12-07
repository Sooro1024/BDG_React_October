import { todoSelector } from "./selectors";
import { SET_TODOS } from "./type";
import {
  Button,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";

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
const handelEditAction = (id) => async (dispatch, getState, extraArgs) => {
  try {
    await extraArgs.networkProvider.delete(`/todos/${id}`);
    const [isOpen, setIsOpen] = useState(false);
    const todos = todoSelector(getState());
    const editTodo = todos.find(todo => todo.id == id);
    setIsOpen(true);
    return(
    <Modal isOpen={isOpen} toggle={() => setIsOpen(false)}>
        <ModalHeader toggle={() => setIsOpen(false)}>
          Create new Todo
        </ModalHeader>
        <ModalBody>
          <FormGroup floating>
            <Input
              id="userName"
              placeholder="Username"
              disabled={!!userName}
              name="userName"
              onChange={handelChangeValues}
              value={editTodo.userName}
            />
            <Label for="userName">Username</Label>
          </FormGroup>
          <FormGroup floating>
            <Input
              id="description"
              placeholder="Description"
              name="description"
              onChange={handelChangeValues}
              value={editTodo.description}
            />
            <Label for="description">Description</Label>
          </FormGroup>
          <FormGroup floating>
            <Input
              id="title"
              placeholder="Title"
              name="title"
              onChange={handelChangeValues}
              value={editTodo.title}
            />
            <Label for="title">Title</Label>
          </FormGroup>

          <FormGroup floating>
            <Input
              id="exampleSelect"
              type="select"
              name="status"
              onChange={handelChangeValues}
              value={editTodo.status}
            >
              <option value="todo">Todo</option>
              <option value="in progress">In progress</option>
              <option value="done">Done</option>
            </Input>
            <Label for="exampleSelect">Todo status</Label>
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={handelCancel}>
            Cancel
          </Button>
          <Button color="success" onClick={handelSave}>
            Save
          </Button>
        </ModalFooter>
      </Modal>
      );
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
