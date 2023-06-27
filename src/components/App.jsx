import { useState } from 'react';
import { nanoid } from 'nanoid';
import css from './App.module.css';
import ContactList from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import useLocalStorage from './hooks';

function App() {
  const [contacts, setContacts] = useLocalStorage('contacts', []);

  const [filter, setFilter] = useState('');

  const addContact = (name, number) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    if (
      contacts.find(
        contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts`);
      return;
    }

    setContacts(contacts => [newContact, ...contacts]);
  };

  const deleteContact = id => {
    setContacts(prevState => prevState.filter(contact => contact.id !== id));
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        fontSize: 18,
        color: '#010101',
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />

      <h2 className={css.titleContacts}>Contacts</h2>
      <div className={css.allContacts}>All contacts: {contacts.length}</div>

      <Filter value={filter} onChange={changeFilter} />
      <ContactList contacts={getVisibleContacts()} onDelete={deleteContact} />
    </div>
  );
}

export default App;
