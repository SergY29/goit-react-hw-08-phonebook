import { Button, Item } from 'components/ContactList.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
// import { formatTime } from 'utils/formatTime';
import { useContacts } from 'hooks';

export const ContactList = () => {
  const { contacts } = useContacts();
  const dispatch = useDispatch();

  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <Item key={id}>
          <p>
            {name}: {number}
          </p>
          <Button type="button" onClick={() => dispatch(deleteContact(id))}>
            Delete
          </Button>
        </Item>
      ))}
    </ul>
  );
};

// onClick={() => dispatch(deleteContact(id))}
