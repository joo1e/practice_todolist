import TodoItem from "./TodoItem";

/* eslint-disable react/prop-types */
const TodoList = ({ todos, onDeleteTodoItem, onToggleTodoItem }) => {
  return (
    <section>
      <h2>Working!</h2>
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onDeleteTodoItem={onDeleteTodoItem}
            onToggleTodoItem={onToggleTodoItem}
          />
        ))}
      </ul>
    </section>
  );
};

export default TodoList;
