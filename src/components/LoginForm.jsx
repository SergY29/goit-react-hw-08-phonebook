import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { FormControl, InputLabel, Input } from '@mui/material';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      autoComplete="off"
      sx={{
        py: 2,
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        alignItems: 'center',
        flexWrap: 'wrap',
      }}
    >
      <FormControl>
        <InputLabel htmlFor="my-email">Email</InputLabel>
        <Input required id="my-emai" type="email" name="email" />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">Password</InputLabel>
        <Input required id="my-passwor" name="password" autoComplete="on" />
      </FormControl>
      <Button variant="outlined" type="submit">
        Log In
      </Button>
    </Box>
  );
};
