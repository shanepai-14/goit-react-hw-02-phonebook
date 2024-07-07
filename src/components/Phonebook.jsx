import React,{useState} from 'react';
import { data } from '../data/data';
import ContactForm from '../components/ContactForm';
import ContactList from '../components/ContactList';
import Filter from '../components/Filter';
const Phonebook = () => {
      const [contacts,setContacts] = useState(data);
      const [filter, setFilter] = useState('');

      const addContact = (name, number) => {
        const contactExists = contacts.some(
          contact => contact.name.toLowerCase() === name.toLowerCase()
        );
    
        if (contactExists) {
          alert(`${name} is already in contacts.`);
          return;
        }
    
        const newContact = {
          id: Date.now().toString(),
          name,
          number,
        };
        setContacts([...contacts, newContact]);
      };
    
      const deleteContact = (id) => {
        setContacts(contacts.filter(contact => contact.id !== id));
      };
    
      const filteredContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      );
    return (
        <div>
        <h1>Phonebook</h1>
        <ContactForm addContact={addContact} />
  
        <h2>Contacts</h2>
        <Filter filter={filter} setFilter={setFilter} />
        <ContactList contacts={filteredContacts} deleteContact={deleteContact} />
      </div>
    )
}

export default Phonebook