import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, Outlet } from 'react-router-dom';
import ContactList from './contacts/ContactList';
import ContactDetails from './contacts/ContactDetails';
import SentMessages from './messages/SentMessages';
import ComposeMessage from './messages/ComposeMessage';
import Header from './Header';
import NotFound from './NotFount';
import { getContacts, getSentMessages, sendMessage } from '../services/api';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetchContacts();
    fetchSentMessages();
  }, []);

  const fetchContacts = async () => {
    try {
      const data = await getContacts();
      setContacts(data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchSentMessages = async () => {
    try {
      const data = await getSentMessages();
      setMessages(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSendMessage = async (message) => {
    try {
      await sendMessage(message);
      fetchSentMessages();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <Header />
      <nav className='navbar'>
        <ul>
          <li>
            <Link style={{textDecoration:'none'}} to="/">Contact List</Link>
          </li>
          <li>
            <Link style={{textDecoration:'none'}} to="/sent-messages">Sent Messages</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<ContactList contacts={contacts} />} />
        <Route path="/contacts/:id" element={<ContactDetails contacts={contacts} />} />
        <Route path="/contacts/:id/send-message" element={<ComposeMessage sendMessage={handleSendMessage} />} />
        <Route path="/sent-messages" element={<SentMessages messages={messages} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
