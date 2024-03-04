import css from './ContactList.module.css';
import Contact from '../Contact/Contact';

const ContactList = ({ ContactsList, onDelete }) => {
  return (
    <ul className={css.list}>
      {ContactsList.map(contactItem => (
        <li className={css.listItem} key={contactItem.id}>
          <Contact contactItem={contactItem} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
