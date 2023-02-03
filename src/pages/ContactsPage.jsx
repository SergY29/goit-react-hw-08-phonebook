import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet-async';
import { useContacts } from 'hooks';

import { ContactForm } from 'components/ContactForm';
import { fetchContacts } from 'redux/contacts/operations';
import { ContactList } from 'components/ContactList';
import { Filter } from 'components/Filter';

import { selectFilter } from 'redux/filter/selectors';
import { setFilter } from 'redux/filter/filterSlice';

export default function ContactsPage() {
  const { isLoading, contacts } = useContacts();
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const loadingContactsList = contacts.length > 0;

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filteredNames = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  console.log(contacts);

  const handleFilter = event => {
    const { value } = event.target;
    dispatch(setFilter(value));
  };

  return (
    <main>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>
      <ContactForm />
      <Filter filter={filter} onFilter={handleFilter} />
      {isLoading && <div>Request in progress...</div>}
      {loadingContactsList && <ContactList contacts={filteredNames} />}
    </main>
  );
}
