const DATA =require('../data/contacts.json');
const MESSAGES =require('../data/messages.json');


export const getContacts = async () => {
  try {
    const data=DATA;
    return data;
  } catch (error) {
    throw new Error('Failed to fetch contacts');
  }
};

export const getSentMessages = async () => {
  try {
    const data=MESSAGES;
    return data;
  } catch (error) {
    throw new Error('Failed to fetch sent messages');
  }
};

export const sendMessage = async (message) => {
  try {
    const otp = Math.floor(100000 + Math.random() * 900000);
    const timestamp = new Date().toLocaleString();
    
    console.log('Sending message:', message);
  } catch (error) {
    throw new Error('Failed to send message');
  }
};
