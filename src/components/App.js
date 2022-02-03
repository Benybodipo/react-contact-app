import React, {useState, useEffect} from 'react';
import { uuid } from 'uuidv4'
import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';


function App() {
  const LOCAL_STORAGE_KEY = 'contacts';
  const [contacts, setContacts] = useState([

  ]); 

  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, {id: uuid(), ...contact}])
  }

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList);
  }

  useEffect(() => {
    const contactsFromLocalStorage = JSON.parse( localStorage.getItem(LOCAL_STORAGE_KEY));

    if (contactsFromLocalStorage)
      setContacts(contactsFromLocalStorage);
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts))
  }, [contacts])

  return (
    <div>
      <Header />
      <div className='container'>
        <div className='row'>
          <div className='col-sm-4'>
            <AddContact  addContactHandler={addContactHandler}/>
          </div>
          <div className='col-sm-6 pt-4'>
            <h2>Contact List</h2>
            <ContactList contacts={contacts} getContactId={removeContactHandler}/>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default App;
