import Toolbar from '@mui/material/Toolbar';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export const Navigation = () => {
  return (
    <Toolbar component="nav" sx={{ flexGrow: 1 }}>
      <Tab label="Home" to="/" component={Link} />
      <Tab label="Contacts" to="/contacts" component={Link} />
    </Toolbar>
  );
};
