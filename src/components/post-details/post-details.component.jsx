import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectSelectedPost } from '../../redux/posts/posts.selectors';
import { togglePostSelected } from '../../redux/posts/posts.actions';

import PostDetailsContent from '../post-details-content/post-details-content.component';

import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  drawerPaper: {
    width: '100vw',
    [theme.breakpoints.up('md')]: {
      width: '50vw',
    },
  },
}));

function PostDetails({ selectedPost, togglePostSelected }) {
  const classes = useStyles();

  const handleDrawerClose = () => {
    togglePostSelected();
  };

  console.log('Render: Drawer');
  return (
    <>
      {/* TODO: Add Desktop Version always opened to the right (same Drawer different styles?) */}
      <Drawer
        open={Boolean(selectedPost)}
        anchor="right"
        onClose={handleDrawerClose}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Box m={2}>
          <IconButton
            aria-label="close post details"
            onClick={handleDrawerClose}
          >
            <CloseIcon />
          </IconButton>
        </Box>
        {selectedPost ? (
          <PostDetailsContent selectedPost={selectedPost} />
        ) : null}
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
