import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Helmet } from 'react-helmet-async';
import { useContacts } from 'hooks';

import { ContactForm } from 'components/ContactForm';
import { fetchContacts } from 'redux/contacts/operations';
import { ContactList } from 'components/ContactList';

export default function ContactsPage() {
  const { isLoading, contacts } = useContacts();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>
      <ContactForm />
      <div>{isLoading && contacts.length && 'Request in progress...'}</div>
      {contacts.length > 0 && <ContactList />}
    </div>
  );
}
