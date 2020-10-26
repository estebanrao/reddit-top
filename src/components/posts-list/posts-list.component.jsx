import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { AnimatedList } from 'react-animated-list';

import PostsListItem from '../posts-list-item/posts-list-item.component';

import { selectUserPosts } from '../../redux/posts/posts.selectors';
import { selectSelectedPost } from '../../redux/posts/posts.selectors';
import {
  togglePostSelected,
  dismissAll,
} from '../../redux/posts/posts.actions';

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Button from '@material-ui/core/Button';
import ListItem from '@material-ui/core/ListItem';
import DeleteIcon from '@material-ui/icons/Delete';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';

const useStyles = makeStyles((theme) => ({
  list: {
    [theme.breakpoints.up('md')]: {
      width: '50vw',
    },
  },
}));

function PostsList({
  userPosts,
  selectedPost,
  dismissAll,
  togglePostSelected,
}) {
  const classes = useStyles();

  const handleDismissAllClick = () => {
    if (selectedPost?.id) togglePostSelected();
    dismissAll();
  };

  console.log('Render: List');
  return (
    <div className={classes.list}>
      <Toolbar />
      <List>
        {/* <AnimatedList animation="collapse"> */}
        {userPosts.map(
          ({
            data: {
              id,
              thumbnail,
              title,
              author,
              num_comments,
              created_utc,
              unread,
              permalink,
              url,
            },
          }) => (
            <PostsListItem
              key={id}
              author={author}
              commentsCount={num_comments}
              id={id}
              createdAt={created_utc}
              thumbnailImgUrl={thumbnail}
              title={title}
              unread={unread}
              selected={id === selectedPost?.id}
              disabled={id === selectedPost?.id}
              permalink={permalink}
              imgUrl={url}
            />
          )
        )}
        {/* </AnimatedList> */}
        {userPosts.length >= 1 ? (
          <ListItem onClick={handleDismissAllClick}>
            <Button
              color="secondary"
              size="large"
              fullWidth
              startIcon={<DeleteIcon />}
            >
              Dismiss All
            </Button>
          </ListItem>
        ) : (
          <Box m={2}>
            <Typography variant="h6" component="span">
              <span role="img" aria-label="eyes">
                👀
              </span>{' '}
              Nothing to see here.
            </Typography>
          </Box>
        )}
      </List>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  userPosts: selectUserPosts,
  selectedPost: selectSelectedPost,
});

const mapDispatchToProps = (dispatch) => ({
  dismissAll: () => dispatch(dismissAll()),
  togglePostSelected: () => dispatch(togglePostSelected(null)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostsList);
