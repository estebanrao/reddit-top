import React from 'react';

import PostsListItem from '../posts-list-item/posts-list-item.component';

import List from '@material-ui/core/List';

import { POSTS_DATA } from './posts-data';

function PostsList() {
  console.log('Render: List');
  return (
    <List>
      {POSTS_DATA.data.children.map(
        ({
          data: { id, thumbnail, title, author, num_comments, created_utc },
        }) => (
          <PostsListItem
            author={author}
            commentsCount={num_comments}
            id={id}
            key={id}
            // selected={}
            createdAt={created_utc}
            thumbnailImgUrl={thumbnail}
            title={title}
            unread={true}
          />
        )
      )}
    </List>
  );
}

export default PostsList;
