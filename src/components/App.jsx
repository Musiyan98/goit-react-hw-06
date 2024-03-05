import { useSelector } from 'react-redux';
import ContactList from './ContactList/ContactList';
import SearchBox from './SearchBox/SearchBox';
import ContactForm from './ContactForm/ContactForm';
import Notification from './Notification/Notification';
import './App.css';

function App() {
  const contacts = useSelector(state => state.contacts.items);
  const inputValue = useSelector(state => state.filters.name);

  const contactsFilter = contacts.filter(contact =>
    contact.name.toLowerCase().includes(inputValue.toLowerCase())
  );

  const isContact = contacts.length !== 0;
  const isFilter = contactsFilter.length !== 0;

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
        <SearchBox />

        {isContact ? (
          isFilter ? (
            <ContactList ContactsList={contactsFilter} />
          ) : (
            <Notification type={'isFilter'} />
          )
        ) : (
          <Notification type={'isContact'} />
        )}
      </div>
    </>
  );
}

export default App;
