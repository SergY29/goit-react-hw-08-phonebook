import AppBar from '@mui/material/AppBar';
import { Navigation } from 'components/Navigation';
import { UserMenu } from 'components/UserMenu';
import { AuthNav } from 'components/AuthNav';
import { useAuth } from 'hooks';

export const AppBarHeader = () => {
  const { isLoggedIn } = useAuth();

  return (
    <AppBar position="static" color="secondary" sx={{ flexDirection: 'row' }}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </AppBar>
  );
};
