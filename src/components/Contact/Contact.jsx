import css from './Contact.module.css';
import { FiPhone, FiUser } from 'react-icons/fi';

const Contact = ({ onDelete, contactItem: { name, number, id } }) => {
  return (
    <div className={css.container}>
      <div className={css.contactInfo}>
        <p>
          <FiUser className={css.icon} /> {name}
        </p>
        <p>
          <FiPhone className={css.icon} /> {number}
        </p>
      </div>
      <button className={css.buttons} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
