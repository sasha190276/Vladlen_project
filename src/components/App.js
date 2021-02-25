// First REACT application
import React, { useEffect } from 'react';
// import logo from '../img/dog.jpg';
// import im2 from '../img/dogsad.jpg';
import './styles/App.scss';
import TodoList from './Todo/TodoList';
import Context from './context';
// import AddTodo from './Todo/AddTodo';
import Loader from './Loader';
import Modal from './Modal/Modal';

const AddTodo = React.lazy(() => import('./Todo/AddTodo'));

function App() {
  const [todos, setTodos] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const emptyTodo = loading ? null : <p>No todos</p>;

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then((response) => response.json())
      .then((todosServer) => {
        setTimeout(() => {
          setTodos(todosServer);
          setLoading(false);
        }, 2000);
      });
  }, []);

  function toggleTodo(id) {
    setTodos(
      todos.map((todo) => {
        const localTodo = { ...todo };
        if (localTodo.id === id) {
          localTodo.completed = !localTodo.completed;
        }
        return localTodo;
      })
    );
  }

  function removeTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function addTodo(title) {
    setTodos(
      todos.concat([
        {
          title,
          id: Date.now(),
          completed: false,
        },
      ])
    );
  }
  return (
    <Context.Provider value={{ removeTodo }}>
      <div className="wrapper">
        <h1>React tutorial</h1>
        <Modal />
        <React.Suspense fallback={<p>Loading...</p>}>
          <AddTodo onCreate={addTodo} />
        </React.Suspense>
        {loading && <Loader />}
        {todos.length ? <TodoList todos={todos} onToggle={toggleTodo} /> : emptyTodo}
      </div>
    </Context.Provider>
  );
}

export default App;
