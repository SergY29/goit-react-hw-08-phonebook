import { useDispatch } from 'react-redux';
import { useState } from 'react';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { MuiTelInput } from 'mui-tel-input';

import { addContact } from 'redux/contacts/operations';

export const ContactForm = () => {
  const [phone, setPhone] = useState('');

  const handleChange = newPhone => {
    setPhone(newPhone);
  };
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    dispatch(
      addContact({
        name: data.get('name'),
        number: data.get('number'),
      })
    );
    e.currentTarget.reset();
    setPhone('');
  };

  return (
    <Box
      sx={{
        mt: 5,
        mr: 15,
        ml: 15,
      }}
    >
      <Typography component="h1" variant="h4">
        Create Contact
      </Typography>
      <Box
        onSubmit={handleSubmit}
        component="form"
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <TextField
          margin="normal"
          required
          fullWidth
          id="name"
          label="Name"
          name="name"
          autoFocus
          sx={{
            mr: 6,
          }}
        />
        <MuiTelInput
          name="number"
          required
          margin="normal"
          fullWidth
          label="Number"
          id="number"
          value={phone}
          onChange={handleChange}
          sx={{
            mr: 6,
          }}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Add contact
        </Button>
      </Box>
    </Box>
  );
};

// inputProps={{ pattern: '[0-9] ' }}
// pattern="+?d{1,4}?[-.s]?(?d{1,3}?)?[-.s]?d{1,4}[-.s]?d{1,4}[-.s]?d{1,9}"

// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// // import AddIcCallIcon from '@mui/icons-material/AddIcCall';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';

// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';

// export default function ContactsPage() {
//   return (
//     <Container component="main" maxWidth="xs">
//       <CssBaseline />
//   <Box
//     sx={{
//       marginTop: 8,
//       display: 'flex',
//       flexDirection: 'column',
//       alignItems: 'center',
//     }}
//   >
//         <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
//           <AccountCircleIcon />
//         </Avatar>
//         <Typography component="h1" variant="h5">
//           Sign in
//         </Typography>
// <Box component="form" sx={{ mt: 1 }}>
//   <TextField
//     margin="normal"
//     required
//     fullWidth
//     id="email"
//     label="Email Address"
//     name="email"
//     autoComplete="email"
//     autoFocus
//   />
//   <TextField
//     margin="normal"
//     required
//     fullWidth
//     name="password"
//     label="Password"
//     type="password"
//     id="password"
//     autoComplete="current-password"
//   />
//   <FormControlLabel
//     control={<Checkbox value="remember" color="primary" />}
//     label="Remember me"
//   />
//   <Button
//     type="submit"
//     fullWidth
//     variant="contained"
//     sx={{ mt: 3, mb: 2 }}
//   >
//     Sign In
//   </Button>
//   <Grid container>
//     <Grid item xs>
//       <Link href="#" variant="body2">
//         Forgot password?
//       </Link>
//     </Grid>
//     <Grid item>
//       <Link href="#" variant="body2">
//         {"Don't have an account? Sign Up"}
//       </Link>
//     </Grid>
//   </Grid>
// </Box>
//       </Box>
//     </Container>
//   );
// }

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
