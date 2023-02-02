import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

import { Link } from 'react-router-dom';

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

import { useAuth } from 'hooks';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const { error } = useAuth();

  const handleSubmit = e => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    dispatch(
      register({
        name: data.get('name'),
        email: data.get('email'),
        password: data.get('password'),
      })
    );
    if (error === true) {
      toast.error(
        `Opps! Failed to register, invalid email address or blank fields`
      );
      return;
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
          Create a Contact manager
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }} required>
          <TextField
            margin="normal"
            fullWidth
            id="name"
            label="Name"
            name="name"
            autoComplete="name"
            autoFocus
            required
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Register
          </Button>
          <Grid container>
            <Grid item>
              <Link to="/login" variant="body2">
                {'Or use an existing account'}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

// export const RegisterForm = () => {
//   const dispatch = useDispatch();

//   return (
//     <Box
//       component="form"
//       onSubmit={handleSubmit}
//       autoComplete="off"
//       sx={{
//         py: 2,
//         display: 'flex',
//         flexDirection: 'column',
//         gap: 2,
//         alignItems: 'center',
//         flexWrap: 'wrap',
//       }}
//     >
//       <FormControl>
//         <InputLabel htmlFor="my-input">Username</InputLabel>
//         <Input required id="my-input" type="text" name="name" />
//       </FormControl>
//       <FormControl>
//         <InputLabel htmlFor="my-email">Email</InputLabel>
//         <Input required id="my-emai" type="email" name="email" />
//       </FormControl>
//       <FormControl>
//         <InputLabel htmlFor="my-input">Password</InputLabel>
//         <Input required id="my-passwor" name="password" autoComplete="on" />
//       </FormControl>
//       <Button variant="outlined" type="submit">
//         Register
//       </Button>
//     </Box>
//   );
// };
