import { useState, useEffect } from 'react';

import ContactList from './ContactList/ContactList';
import SearchBox from './SearchBox/SearchBox';
import ContactForm from './ContactForm/ContactForm';
import Notification from './Notification/Notification';
import './App.css';

function getInitContactsList() {
  const initContactsList = window.localStorage.getItem('ContactsList');
  if (initContactsList !== null) {
    return JSON.parse(initContactsList);
  }
  return [];
}

function App() {
  const [contacts, setContacts] = useState(getInitContactsList);
  const [inputValue, setInputValue] = useState('');

  const contactsFilter = contacts.filter(contact =>
    contact.name.toLowerCase().includes(inputValue.toLowerCase())
  );

  useEffect(() => {
    window.localStorage.setItem('ContactsList', JSON.stringify(contacts));
  }, [contacts]);

  const addContacts = newContact => {
    setContacts(prewContacts => {
      return [...prewContacts, newContact];
    });
  };

  const deleteContact = ContactId => {
    setContacts(prewContacts => {
      return prewContacts.filter(Contact => Contact.id !== ContactId);
    });
  };

  const isContact = contacts.length !== 0;
  const isFilter = contactsFilter.length !== 0;

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm onAdd={addContacts} />
        <SearchBox value={inputValue} onChange={evt => setInputValue(evt.target.value)} />

        {isContact ? (
          isFilter ? (
            <ContactList ContactsList={contactsFilter} onDelete={deleteContact} />
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
