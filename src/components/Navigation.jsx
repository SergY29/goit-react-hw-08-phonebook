import Toolbar from '@mui/material/Toolbar';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export const Navigation = () => {
  const [value, setValue] = useState(0);

  const handleChange = (_, newValue) => {
    setValue(newValue);
  };

  return (
    <Toolbar component="nav" sx={{ flexGrow: 1 }}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="basic tabs example"
      >
        <Tab label="Home" to="/" component={Link} />
        <Tab label="Contacts" to="/contacts" component={Link} />
      </Tabs>
    </Toolbar>
  );
};
