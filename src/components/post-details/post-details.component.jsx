import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectSelectedPost } from '../../redux/posts/posts.selectors';
import { togglePostSelected } from '../../redux/posts/posts.actions';

import PostDetailsContent from '../post-details-content/post-details-content.component';

import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  drawer: {
    [theme.breakpoints.up('md')]: {
      width: '50vw',
      flexShrink: 0,
    },
  },
  drawerPaper: {
    width: '100vw',
    [theme.breakpoints.up('md')]: {
      width: '50vw',
    },
  },
}));

function PostDetails({ selectedPost, togglePostSelected }) {
  const classes = useStyles();

  const matches = useMediaQuery((theme) => theme.breakpoints.up('md'));

  const handleDrawerClose = () => {
    togglePostSelected();
  };

  // console.log('Render: Drawer');
  return (
    <>
      {/* TODO: Scroll top when selected post changes */}
      <Drawer // TODO: SwipeableDrawer?
        className={classes.drawer}
        open={Boolean(selectedPost)}
        anchor="right"
        variant={matches ? 'permanent' : 'temporary'}
        onClose={handleDrawerClose}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        {matches ? (
          <Toolbar />
        ) : (
          <Box m={2}>
            <IconButton
              aria-label="close post details"
              onClick={handleDrawerClose}
            >
              <CloseIcon />
            </IconButton>
          </Box>
        )}

        {selectedPost ? (
          <PostDetailsContent selectedPost={selectedPost} />
        ) : (
          <Box m={2}>
            <Typography variant="h6" component="span">
              <span role="img" aria-label="waving hand">
                👋
              </span>{' '}
              Hi! Please select a post from the list.
            </Typography>
          </Box>
        )}
      </Drawer>
    </>
  );
}

const mapStateToProps = createStructuredSelector({
  selectedPost: selectSelectedPost,
});

const mapDispatchToProps = (dispatch) => ({
  togglePostSelected: () => dispatch(togglePostSelected(null)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostDetails);
