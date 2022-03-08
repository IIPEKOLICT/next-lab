import React from 'react';
import styled from 'styled-components';
import { PostCardProps } from '../shared/props';
import Link from 'next/link';
import { Card } from './styled-components';

const StyledPostCard = styled(Card)<PostCardProps>`
  ${({ post }) => post.title.length > 50 && 'text-decoration: uppercase;'}
`;

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <StyledPostCard post={post}>
      <Link href={`/posts/${post.id}`}>
        <a>
          <h4>#{post.id}: {post.title}</h4>
        </a>
      </Link>
    </StyledPostCard>
  );
};

export default PostCard;
