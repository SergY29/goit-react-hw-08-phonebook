import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { Contact } from 'components/Contact';

export const ContactList = ({ contacts }) => {
  return (
    <Box
      sx={{
        mt: 5,
        ml: 15,
      }}
    >
      <Typography component="h2" variant="h4">
        Contacts
      </Typography>
      <List>
        {contacts.map(({ id, name, number }) => (
          <ListItem
            key={id}
            sx={{
              width: 500,
            }}
          >
            <Contact id={id} name={name} number={number} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
