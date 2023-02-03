// import { Label, Input } from 'components/Filter1.styled';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export const Filter = ({ filter, onFilter }) => {
  return (
    <Box
      sx={{
        ml: 15,
        mr: 61,
      }}
    >
      <Typography
        component="p"
        variant="h6"
        sx={{
          mt: 3,
        }}
      >
        Find contacts by name
      </Typography>
      <TextField
        margin="normal"
        onChange={onFilter}
        value={filter}
        required
        fullWidth
        id="filter"
        label="Enter contact name"
        name="filter"
        type="text"
        autoFocus
        sx={{
          mr: 6,
        }}
      />
    </Box>
  );
};
