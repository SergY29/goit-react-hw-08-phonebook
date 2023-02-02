import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { Button } from 'components/Contact1.styled';

export const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <>
      <p>
        {name}: {number}
      </p>
      <Button type="button" onClick={handleDelete}>
        Delete
      </Button>
    </>
  );
};
