import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import ReactTimeAgo from 'react-time-ago';

import { selectConfigSavedItemsIds } from '../../redux/config/config.selectors';
import { togglePostSelected } from '../../redux/posts/posts.actions';
import {
  addSavedItem,
  removeSavedItem,
} from '../../redux/config/config.actions';

import CommentsIcon from '../comments-icon/comments-icon.component';

import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles((theme) => ({
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
}));

function PostDetails({
  selectedPost: {
    imgUrl,
    thumbnailImgUrl,
    id,
    title,
    author,
    createdAt,
    permalink,
    commentsCount,
  },
  addSavedItem,
  savedItemsIds,
  removeSavedItem,
}) {
  const classes = useStyles();

  const handleSaveWallpaper = () => {
    addSavedItem({
      imgUrl,
      thumbnailImgUrl,
      id,
    });
  };

  const handleRemoveSavedWallpaper = () => {
    removeSavedItem(id);
  };

  console.log('Render: Post Details');
  return (
    <Box m={2}>
      <Card raised>
        <CardHeader
          title={title}
          subheader={
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
        <CardMedia
          className={classes.media}
          image={imgUrl}
          title="Wallpaper image"
        />
        <CardActions disableSpacing>
          <CommentsIcon permalink={permalink} commentsCount={commentsCount} />
          <Tooltip
            title={
              savedItemsIds.includes(id)
                ? 'Remove from favorites'
                : 'Add to favorites'
            }
            arrow
          >
            <IconButton
              aria-label="add or remove favorite"
              onClick={
                savedItemsIds.includes(id)
                  ? handleRemoveSavedWallpaper
                  : handleSaveWallpaper
              }
            >
              <FavoriteIcon
                color={savedItemsIds.includes(id) ? 'secondary' : 'inherit'}
              />
            </IconButton>
          </Tooltip>
          <Tooltip title="View full size image" arrow>
            <IconButton aria-label="download" target="_blank" href={imgUrl}>
              <ArrowDownwardIcon />
            </IconButton>
          </Tooltip>
        </CardActions>
      </Card>
    </Box>
  );
}

const mapStateToProps = createStructuredSelector({
  savedItemsIds: selectConfigSavedItemsIds,
});

const mapDispatchToProps = (dispatch) => ({
  togglePostSelected: () => dispatch(togglePostSelected(null)),
  addSavedItem: (item) => dispatch(addSavedItem(item)),
  removeSavedItem: (id) => dispatch(removeSavedItem(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostDetails);
