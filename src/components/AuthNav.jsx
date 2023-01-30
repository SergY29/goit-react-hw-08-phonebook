import Tab from '@mui/material/Tab';
import { Link } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <>
      <Tab label="Register" to="/register" component={Link} />
      <Tab label="Login" to="/login" component={Link} />
    </>
  );
};
