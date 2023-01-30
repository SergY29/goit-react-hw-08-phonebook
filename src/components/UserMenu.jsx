import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export const UserMenu = () => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', mr: 3 }}>
      <Typography variant="h6" component="p" sx={{ mr: 2 }}>
        User@mail.com
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
