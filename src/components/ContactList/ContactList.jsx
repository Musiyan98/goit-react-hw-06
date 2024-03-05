import css from './ContactList.module.css';
import Contact from '../Contact/Contact';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';

const ContactList = ({ ContactsList }) => {
  const dispatch = useDispatch();

  return (
    <ul className={css.list}>
      {ContactsList.map(contactItem => (
        <li className={css.listItem} key={contactItem.id}>
          <Contact
            contactItem={contactItem}
            onDelete={id => {
              dispatch(deleteContact(id));
            }}
          />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
