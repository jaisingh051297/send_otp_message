import React from 'react';
import { useParams, Link } from 'react-router-dom';

const ContactDetails = ({ contacts }) => {
  const { id } = useParams();
  const contact = contacts.find(c => c.id === parseInt(id));

  if (!contact) {
    return <div>Contact not found</div>;
  }

  return (
    <div>
      <h1>Contact Details</h1>
      <p style={{color:'#13131f',fontWeight:'bold',padding:'10px'}}>Name: {contact.firstName} {contact.lastName}</p>
      <p style={{color:'#13131f',fontWeight:'bold',padding:'10px'}}>Phone: {contact.phone}</p>
      <Link style={{textDecoration:'none', background:'blue', color:'white',padding:'10px',borderRadius:'5px',marginLeft:'15px'}} to={`/contacts/${contact.id}/send-message`}>Send Message</Link>
    </div>
  );
};

export default ContactDetails;
