import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { FormControl, InputLabel, Input } from '@mui/material';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
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
        <InputLabel htmlFor="my-input">Username</InputLabel>
        <Input required id="my-input" type="text" name="name" />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-email">Email</InputLabel>
        <Input required id="my-emai" type="email" name="email" />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">Password</InputLabel>
        <Input required id="my-passwor" name="password" autoComplete="on" />
      </FormControl>
      <Button variant="outlined" type="submit">
        Register
      </Button>
    </Box>
  );
};

