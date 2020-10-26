import React from 'react';
import { connect } from 'react-redux';

import {
  togglePostSelected,
  dismissPost,
} from '../../redux/posts/posts.actions';

import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

function DismissIcon({ selected, itemId, togglePostSelected, dismissPost }) {
  const handleDismissIconClick = () => {
    if (selected) togglePostSelected();
    dismissPost(itemId);
  };

  return (
    <Tooltip title="Delete" arrow>
      <IconButton aria-label="dismiss" onClick={handleDismissIconClick}>
        <DeleteIcon />
      </IconButton>
    </Tooltip>
  );
}

const mapDispatchToProps = (dispatch) => ({
  togglePostSelected: () => dispatch(togglePostSelected(null)),
  dismissPost: (postId) => dispatch(dismissPost(postId)),
});

export default connect(null, mapDispatchToProps)(DismissIcon);
