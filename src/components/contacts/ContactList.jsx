import React from 'react';
import { Link } from 'react-router-dom';

const ContactList = ({ contacts }) => {
  return (
    <div>
      <h1>Contact List</h1>
      <ol style={{color:'#13131f' ,fontSize:'20px',fontWeight:'bold'}}>
        {contacts.map(contact => (
          <li key={contact.id}>
            <Link style={{textDecoration:'none'}} to={`/contacts/${contact.id}`}>{contact.firstName} {contact.lastName}</Link>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default ContactList;
