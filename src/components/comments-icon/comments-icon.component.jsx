import React from 'react';

import Badge from '@material-ui/core/Badge';
import CommentIcon from '@material-ui/icons/Comment';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';

function CommentsIcon({ commentsCount, permalink }) {
  return (
    <Tooltip title="Comments" aria-label="ammount of comments" arrow>
      <IconButton
        target="_blank"
        href={`https://reddit.com${permalink}`}
        aria-label="open full article"
      >
        <Badge badgeContent={commentsCount} color="primary" showZero>
          <CommentIcon />
        </Badge>
      </IconButton>
    </Tooltip>
  );
}

export default CommentsIcon;
