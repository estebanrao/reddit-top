import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  drawerPaper: {
    width: '100vw',
    [theme.breakpoints.up('md')]: {
      width: '50vw',
    },
  },
}));

function App() {
  const classes = useStyles();

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  console.log('Render: Drawer');
  return (
    <>
      <Button onClick={toggleDrawer}>Open Drawer</Button>
      <Drawer
        open={isDrawerOpen}
        anchor="right"
        onClose={toggleDrawer}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        This is a drawer
      </Drawer>
    </>
  );
}

export default App;
