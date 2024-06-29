import './App.css';
import { ContactForm, ContactList, SearchBox } from '../index';
import contactsList from '../../datas/contacts.json';
import { useEffect, useState } from 'react';

const localStorageContactsKey = 'contacts';

const App = () => {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = window.localStorage.getItem(localStorageContactsKey);

    if (savedContacts !== null) {
      return JSON.parse(savedContacts);
    }

    return contactsList;
  });
  const [filterValue, setFilterValue] = useState('');

  const addContact = (newContact) => {
    setContacts((prevContacts) => {
      return [...prevContacts, newContact];
    });
  };

  const searchContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filterValue.toLowerCase())
  );

  const deletedContact = (contactId) => {
    setContacts((prevContacts) => {
      return prevContacts.filter(({ id }) => id !== contactId);
    });
  };

  useEffect(() => {
    window.localStorage.setItem(
      localStorageContactsKey,
      JSON.stringify(contacts)
    );
  }, [contacts]);

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <SearchBox value={filterValue} onFilter={setFilterValue} />
      <ContactList contacts={searchContacts} deletedContact={deletedContact} />
    </>
  );
};

export default App;