import React from 'react';
import { connect } from 'react-redux';

import ReactTimeAgo from 'react-time-ago';

import { markPostRead } from '../../redux/config/config.actions';
import { togglePostSelected } from '../../redux/posts/posts.actions';

import CommentsIcon from '../comments-icon/comments-icon.component';
import DismissIcon from '../dismiss-icon/dismiss-icon.component';

import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Badge from '@material-ui/core/Badge';
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
  disabled,
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

  // console.log('Render: ListItem');
  return (
    <ListItem
      button
      divider
      selected={selected}
      disabled={disabled}
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
        <DismissIcon selected={selected} itemId={id} />
        <CommentsIcon permalink={permalink} commentsCount={commentsCount} />
      </ListItemSecondaryAction>
    </ListItem>
  );
}

const mapDispatchToProps = (dispatch) => ({
  markPostRead: (postId) => dispatch(markPostRead(postId)),
  togglePostSelected: (postData) => dispatch(togglePostSelected(postData)),
});

export default connect(null, mapDispatchToProps)(PostsListItem);
