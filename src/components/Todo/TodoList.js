import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const styles = {
  ul: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
};

function TodoList(props) {
  const { todos } = props;
  return (
    <ul style={styles.ul}>
      {todos.map((todo, index) => (
        <TodoItem todo={todo} key={todo.id} index={index} />
      ))}
    </ul>
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default TodoList;
