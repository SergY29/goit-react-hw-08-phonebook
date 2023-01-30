import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Toolbar from '@mui/material/Toolbar';
import Tab from '@mui/material/Tab';

import { selectIsLoggedIn } from 'redux/authUser/selectors';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <Toolbar component="nav" sx={{ flexGrow: 1 }}>
      <Tab label="Home" to="/" component={Link} />
      {isLoggedIn && <Tab label="Contacts" to="/contacts" component={Link} />}
    </Toolbar>
  );
};
