import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectSelectedPost } from '../../redux/posts/posts.selectors';
import { togglePostSelected } from '../../redux/posts/posts.actions';

import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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

  const toggleDrawer = () => {
    togglePostSelected();
  };

  console.log('Render: Drawer');
  return (
    <>
      {/* TODO: Add Desktop Version always opened to the right (same Drawer different styles?) */}

      <Drawer
        open={Boolean(selectedPost)}
        anchor="right"
        onClose={toggleDrawer}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        {selectedPost ? (
          <Typography variant="body1" gutterBottom>
            This is a drawer that shows data for post {selectedPost.id}.
          </Typography>
        ) : null}
        <Button onClick={toggleDrawer}>Close Drawer</Button>
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
