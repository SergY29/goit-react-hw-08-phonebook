import { useSelector } from 'react-redux';
import {
    selectContacts,
    selectIsLoading,
    selectError,
    selectFilter,
} from 'redux/contacts/selectors';

export const useAuth = () => {
    const contacts = useSelector(selectContacts);
    const isLoading = useSelector(selectIsLoading);
    const isError = useSelector(selectError);
    const filter = useSelector(selectFilter);

    return {
        contacts,
        isLoading,
        isError,
        filter,
    };
};