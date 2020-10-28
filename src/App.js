import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectConfigIsDarkModeActive } from './redux/config/config.selectors';

import {
  unstable_createMuiStrictModeTheme as createMuiTheme,
  ThemeProvider,
} from '@material-ui/core/styles';

import TopBar from './components/top-bar/top-bar.component';
import PostsList from './components/posts-list/posts-list.component';
import PostDetails from './components/post-details/post-details.component';

import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  drawerPaper: {
    width: '100vw',
    [theme.breakpoints.up('md')]: {
      width: '50vw',
    },
  },
}));

export const App = ({ isDarkModeActive }) => {
  const classes = useStyles();

  const palletType = isDarkModeActive ? 'dark' : 'light';
  const darkTheme = createMuiTheme({
    palette: {
      type: palletType,
    },
  });

  // console.log('Render: App');
  return (
    <ThemeProvider theme={darkTheme}>
      <div className={classes.root}>
        <CssBaseline />
        <TopBar />
        <PostsList />
        <PostDetails />
      </div>
    </ThemeProvider>
  );
};

const mapStateToProps = createStructuredSelector({
  isDarkModeActive: selectConfigIsDarkModeActive,
});

export default connect(mapStateToProps)(App);
