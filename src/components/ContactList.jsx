import { useContacts } from 'hooks';
import { Contact } from 'components/Contact1';
import { Item } from 'components/ContactList.styled';

export const ContactList = () => {
  const { contacts } = useContacts();

  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <Item key={id}>
          <Contact id={id} name={name} number={number} />
        </Item>
      ))}
    </ul>
  );
};
