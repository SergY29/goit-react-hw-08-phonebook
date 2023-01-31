import { useSelector } from 'react-redux';

import AppBar from '@mui/material/AppBar';
import { Navigation } from 'components/Navigation';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { UserMenu } from 'components/UserMenu';
import { AuthNav } from 'components/AuthNav';

export const AppBarHeader = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <AppBar position="static" color="secondary" sx={{ flexDirection: 'row' }}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </AppBar>
  );
};
