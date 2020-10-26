import React from 'react';
import { connect } from 'react-redux';

import ReactTimeAgo from 'react-time-ago';

import { markPostRead } from '../../redux/config/config.actions';
import {
  togglePostSelected,
  dismissPost,
} from '../../redux/posts/posts.actions';

import CommentsIcon from '../comments-icon/comments-icon.component';

import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Badge from '@material-ui/core/Badge';
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
  id,
  thumbnailImgUrl,
  title,
  author,
  commentsCount,
  unread,
  createdAt,
  selected,
  permalink,
  imgUrl,
  markPostRead,
  togglePostSelected,
  dismissPost,
}) {
  const classes = useStyles();

  const handleListItemClick = () => {
    if (unread) markPostRead(id);
    togglePostSelected({
      id,
      title,
      author,
      commentsCount,
      createdAt,
      permalink,
      imgUrl,
      thumbnailImgUrl,
    });
  };

  const handleDismissIconClick = () => {
    dismissPost(id);
  };

  console.log('Render: ListItem');
  return (
    <ListItem button divider selected={selected} onClick={handleListItemClick}>
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
          <IconButton aria-label="dismiss" onClick={handleDismissIconClick}>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
        <CommentsIcon permalink={permalink} commentsCount={commentsCount} />
      </ListItemSecondaryAction>
      {/* TODO: Add ListItemSecondaryAction for mobile with Menu */}
    </ListItem>
  );
}

const mapDispatchToProps = (dispatch) => ({
  markPostRead: (postId) => dispatch(markPostRead(postId)),
  togglePostSelected: (postData) => dispatch(togglePostSelected(postData)),
  dismissPost: (postId) => dispatch(dismissPost(postId)),
});

export default connect(null, mapDispatchToProps)(PostsListItem);
