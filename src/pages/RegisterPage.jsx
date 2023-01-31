import { RegisterForm } from 'components//RegisterForm';
import { Helmet } from 'react-helmet-async';

export default function RegisterPage() {
  return (
    <div>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <RegisterForm />
    </div>
  );
}
