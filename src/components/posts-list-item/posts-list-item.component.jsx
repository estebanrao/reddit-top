import React, { useState } from 'react';

import ReactTimeAgo from 'react-time-ago';

import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Badge from '@material-ui/core/Badge';
import CommentIcon from '@material-ui/icons/Comment';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

const useStyles = makeStyles((theme) => ({
  AppBarTitle: {
    marginRight: '60px',
  },
}));

function PostsListItem({
  thumbnailImgUrl,
  title,
  author,
  commentsCount,
  unread,
  createdAt,
}) {
  const classes = useStyles();

  const [isSelected, setIsSelected] = useState(false);

  const handleListItemClick = () => {
    setIsSelected(!isSelected);
  };

  console.log('Render: ListItem');
  return (
    <ListItem
      button
      divider
      selected={isSelected}
      onClick={handleListItemClick}
    >
      <ListItemAvatar>
        <Avatar alt="Profile Picture" src={thumbnailImgUrl} />
      </ListItemAvatar>
      <ListItemText
        className={classes.AppBarTitle}
        primary={
          <Badge color="secondary" variant="dot" invisible={!unread}>
            {title}
          </Badge>
        }
        secondary={
          <>
            Created by <strong>{author} </strong>
            <ReactTimeAgo
              // Convert UNIX timestamp
              date={new Date(createdAt * 1000)}
              locale="en-US"
              timeStyle="round"
            />
          </>
        }
      />
      <ListItemSecondaryAction>
        <Tooltip title="Delete" arrow>
          <IconButton aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Comments" aria-label="ammount of comments" arrow>
          <IconButton aria-label="open full article">
            <Badge badgeContent={commentsCount} color="primary" showZero>
              <CommentIcon />
            </Badge>
          </IconButton>
        </Tooltip>
      </ListItemSecondaryAction>
      {/* TODO: Add ListItemSecondaryAction for mobile with Menu */}
    </ListItem>
  );
}

export default PostsListItem;
