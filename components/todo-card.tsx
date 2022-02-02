import React from 'react';
import styled from 'styled-components';
import { TodoCardProps } from '../shared/props';
import Link from 'next/link';
import { Card } from './styled-components';

const StyledTodoCard = styled(Card)<TodoCardProps>`
  ${(props) => props.todo.completed && (`
    text-decoration: line-through;
    p { color: violet }
  `)}
`;

const TodoCard: React.FC<TodoCardProps> = ({ todo }) => {
  return (
    <StyledTodoCard todo={todo}>
      <Link href={`/todos/${todo.id}`}>
        <a>
          <h4>#{todo.id}: {todo.title}</h4>
        </a>
      </Link>
    </StyledTodoCard>
  );
};

export default TodoCard;
