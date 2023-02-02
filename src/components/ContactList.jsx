import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { useContacts } from 'hooks';
import { Contact } from 'components/Contact1';
import { Item } from 'components/ContactList.styled';

export const ContactList = () => {
  const { contacts } = useContacts();

  return (
    <Box
      sx={{
        mt: 5,
        mr: 15,
        ml: 15,
      }}
    >
      <Typography component="h2" variant="h4">
        Contacts
      </Typography>
      <ul>
        {contacts.map(({ id, name, number }) => (
          <Item key={id}>
            <Contact id={id} name={name} number={number} />
          </Item>
        ))}
      </ul>
    </Box>
  );
};
