import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export const AppBarHeader = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, flexGrow: 1 }}>
            <Typography variant="h6" component="div" sx={{ mr: 2 }}>
              News
            </Typography>
            <Typography variant="h6" component="div" sx={{ mr: 2 }}>
              Newssss
            </Typography>
            <Typography variant="h6" component="div" sx={{ mr: 2 }}>
              Newssssqwewqeqs
            </Typography>
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Typography variant="h6" component="div" sx={{ mr: 2 }}>
              Newsddd
            </Typography>
            <Button variant="contained" color="secondary">
              {' '}
              Logout
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
