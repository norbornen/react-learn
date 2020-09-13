// @ts-check
import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const styles = {
  ul: {
    listStyle: 'none',
    margin: 0,
    padding: 0
  }
};

function TodoList(props) {
  return (
    <ul style={styles.ul}>
      { (props.todos || []).map((todo, idx) => (
        <TodoItem
          todo={todo}
          index={idx + 1}
          key={todo.id}
          onChange={props.onToggle}
        ></TodoItem>
      )) }
    </ul>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  onToggle: PropTypes.func.isRequired
};

export default TodoList;
