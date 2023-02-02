import { Helmet } from 'react-helmet-async';
import { useContacts } from 'hooks';

import { ContactForm } from 'components/ContactForm';

export default function ContactsPage() {
  const { isLoading } = useContacts();
  console.log(isLoading);
  return (
    <div>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>

      <ContactForm />
      <div>{isLoading && 'Request in progress...'}</div>
    </div>
  );
}
