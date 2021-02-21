import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  li: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '.5rem 1rem',
    border: '1px solid #ccc',
    borderRadius: '4px',
    marginBottom: '.5rem',
  },
};

function TodoItem({ todo, index }) {
  return (
    <li style={styles.li}>
      <span>
        <input type="checkbox" />
        <strong>{index + 1}</strong>
        {todo.title}
      </span>
      <button type="button">&times;</button>
    </li>
  );
}

TodoItem.defaultProps = {
  index: null,
};

TodoItem.propTypes = {
  todo: PropTypes.shape({}).isRequired,
  index: PropTypes.number,
};

export default TodoItem;
