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

export const AppBarHeader = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="secondary">
        <Toolbar component="nav">
          <Tabs
            sx={{ display: { xs: 'none', md: 'flex' }, flexGrow: 1 }}
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
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Typography variant="h6" component="div" sx={{ mr: 2 }}>
              Newsddd
            </Typography>
            <Button variant="contained" color="primary">
              Logout
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
