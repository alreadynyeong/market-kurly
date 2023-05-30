import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo } from './store';

interface TodoItemProps {
  id: number;
  text: string;
}

const TodoItem: React.FC<TodoItemProps> = ({ id, text }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTodo(id));
  };

  return (
    <li>
      <span>{text}</span>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default TodoItem;
