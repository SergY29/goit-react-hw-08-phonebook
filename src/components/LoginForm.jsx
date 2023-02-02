import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { logIn } from 'redux/auth/operations';
import { useAuth } from 'hooks';

import { toast } from 'react-toastify';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const { error } = useAuth();

  const handleSubmit = e => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    dispatch(
      logIn({
        email: data.get('email'),
        password: data.get('password'),
      })
    );

    if (error === true) {
      toast.error(
        `Opps! We can't seem to find that email and password combination, try another?`
      );
    }
    e.currentTarget.reset();
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <AccountCircleIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Log in to Contact manager
        </Typography>
        <Box required component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            required
            margin="normal"
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            required
            margin="normal"
            fullWidth
            name="password"
            label="Password"
            type="password"
            autoComplete="current-password"
            id="password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Log In
          </Button>
          <Grid container>
            <Grid item>
              <Link to="/register" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

// <Box
//   component="form"
//   onSubmit={handleSubmit}
//   autoComplete="off"
//   sx={{
//     py: 2,
//     display: 'flex',
//     flexDirection: 'column',
//     gap: 2,
//     alignItems: 'center',
//     flexWrap: 'wrap',
//   }}
// >
//   <FormControl>
//     <InputLabel htmlFor="my-email">Email</InputLabel>
//     <Input required id="my-emai" type="email" name="email" />
//   </FormControl>
//   <FormControl>
//     <InputLabel htmlFor="my-input">Password</InputLabel>
//     <Input required id="my-passwor" name="password" autoComplete="on" />
//   </FormControl>
//   <Button variant="outlined" type="submit">
//     Log In
//   </Button>
// </Box>;
