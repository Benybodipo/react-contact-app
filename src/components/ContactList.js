import React from 'react';
import ContactCard from './ContactCard';


const ContactList = (props) => 
{
    console.log(props);
    const deleteContactHandler = (id) => {
        props.getContactId(id);
    };

    const contactList  = props.contacts.map((contact)=> {
        return (
            <li className="list-group-item clearfix">
                <ContactCard contact={contact} clickHandler={deleteContactHandler}></ContactCard>
            </li>
        )
    });

    

    return (
        <ul className="list-group">
            {contactList}
        </ul>
    );
}

export default ContactList;