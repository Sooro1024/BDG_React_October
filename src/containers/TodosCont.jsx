import React from "react";
import { connect } from "react-redux";
import { Todo } from "../components/Todo";
import {
  getTodosAction,
  handelDeleteAction,
  handelEditAction,
} from "../store/todo/actions";
import { CreateTodoCont } from "./CreateTodoCont";
import { TodoColoum } from "./TodoColoum";
import { todoSelector } from "../store/todo/selectors";

class TodosComp extends React.Component {
  componentDidMount() {
    this.props.getTodosOnMount();
  }

  render() {
    // eslint-disable-next-line react/destructuring-assignment

    return (
      <>
        <div className="app">
          <TodoColoum title="Todo">
            {this.props.lists.todo.map((todo) => (
              <Todo
                key={todo._id}
                color="danger"
                id={todo._id}
                title={todo.title}
                description={todo.description}
                createdAt={todo.createdAt}
                updatedAt={todo.updatedAt}
                handelDelete={this.props.handelDelete}
                handelEdit={this.props.handelEdit}
              />
            ))}
          </TodoColoum>
          <TodoColoum title="In progress">
            {this.props.lists.inProgress.map((todo) => (
              <Todo
                key={todo._id}
                color="warning"
                id={todo._id}
                title={todo.title}
                description={todo.description}
                createdAt={todo.createdAt}
                updatedAt={todo.updatedAt}
                handelDelete={this.props.handelDelete}
                handelEdit={this.props.handelEdit}
              />
            ))}
          </TodoColoum>
          <TodoColoum title="Done">
            {this.props.lists.done.map((todo) => (
              <Todo
                key={todo._id}
                color="success"
                id={todo._id}
                title={todo.title}
                description={todo.description}
                createdAt={todo.createdAt}
                updatedAt={todo.updatedAt}
                handelDelete={this.props.handelDelete}
                handelEdit={this.props.handelEdit}
              />
            ))}
          </TodoColoum>
        </div>
        <CreateTodoCont />
      </>
    );
  }
}

const mapsStateToProps = (state, ownProps) => {
  const todos = todoSelector(state);

  const lists = todos.reduce(
    (acc, el) => {
      if (el.status === "in progress") {
        acc.inProgress.push(el);
      } else if (el.status === "done") {
        acc.done.push(el);
      } else {
        acc.todo.push(el);
      }

      return acc;
    },
    {
      done: [],
      inProgress: [],
      todo: [],
    }
  );
  return {
    lists,
  };
};
const mapDispatchToProps = {
  handelDelete: (id) => {
    handelDeleteAction(id);
  },
  handelEdit: (inputTitle, inputName, inputDec, id) => {
    handelEditAction(inputTitle, inputName, inputDec, id);
  },
  getTodosOnMount: () => getTodosAction(),
};
export const TodosCont = connect(
  mapsStateToProps,
  mapDispatchToProps
)(TodosComp);
