import { useSelector } from 'react-redux';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { selectUser } from 'redux/auth/selectors';

export const UserMenu = () => {
  const user = useSelector(selectUser);

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', mr: 3 }}>
      <Typography variant="h6" component="p" sx={{ mr: 2 }}>
        Welcome, {user.name}
      </Typography>
      <Button
        variant="contained"
        color="primary"
        sx={{ boxSizing: 'border-box' }}
      >
        Logout
      </Button>
    </Box>
  );
};
