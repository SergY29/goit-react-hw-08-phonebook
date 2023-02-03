import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';

import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';

export const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <>
      <ListItemAvatar>
        <Avatar>
          <FolderIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={name} />
      <ListItemText primary={number} />
      <IconButton aria-label="delete" type="button" onClick={handleDelete}>
        <DeleteIcon />
      </IconButton>
    </>
  );
};
