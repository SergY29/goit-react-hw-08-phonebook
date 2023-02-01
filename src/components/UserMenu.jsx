import { useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';

export const UserMenu = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logOut());
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', mr: 3 }}>
      <Typography variant="h6" component="p" sx={{ mr: 2 }}>
        Welcome, {user.name}
      </Typography>
      <Button
        type="button"
        variant="contained"
        color="primary"
        sx={{ boxSizing: 'border-box' }}
        onClick={handleLogout}
      >
        Logout
      </Button>
    </Box>
  );
};
