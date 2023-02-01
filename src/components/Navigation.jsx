import { Link } from 'react-router-dom';
import Toolbar from '@mui/material/Toolbar';
import Tab from '@mui/material/Tab';

import { useAuth } from 'hooks';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Toolbar component="nav" sx={{ flexGrow: 1 }}>
      <Tab label="Home" to="/" component={Link} />
      {isLoggedIn && <Tab label="Contacts" to="/contacts" component={Link} />}
    </Toolbar>
  );
};
