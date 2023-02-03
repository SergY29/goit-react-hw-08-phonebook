import { Label, Input } from 'components/Filter1.styled';

export const Filter = ({ filter, onFilter }) => {
  return (
    <Label>
      Find contacts by name
      <Input
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={onFilter}
        value={filter}
      />
    </Label>
  );
};
