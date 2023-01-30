import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export const Navigation = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <AppBar position="static" color="secondary" sx={{ flexDirection: 'row' }}>
      <Toolbar component="nav" sx={{ flexGrow: 1 }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Home" to="/" component={Link} />
          <Tab
            label="Register"
            to="/register"
            component={Link}
            {...a11yProps(0)}
          />
          <Tab label="Login" to="/login" component={Link} {...a11yProps(1)} />
          <Tab
            label="Contacts"
            to="/contacts"
            component={Link}
            {...a11yProps(2)}
          />
        </Tabs>
      </Toolbar>
      <Box sx={{ display: 'flex', alignItems: 'center', mr: 3 }}>
        <Typography variant="h6" component="p" sx={{ mr: 2 }}>
          Newsddd
        </Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{ boxSizing: 'border-box' }}
        >
          Logout
        </Button>
      </Box>
    </AppBar>
  );
};
