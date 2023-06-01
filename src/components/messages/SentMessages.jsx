import React from 'react';

const SentMessages = ({ messages }) => {
  return (
    <div>
      <h1>Sent Messages</h1>
      {messages.length === 0 ? (
        <p>No messages sent</p>
      ) : (
        <ol style={{color:'#13131f'}}>
          {messages.map(message => (
            <li key={message.id}>
              <p style={{fontWeight:'bold'}}>Contact: {message.contact}</p>
              <p>Timestamp: {message.timestamp}</p>
              <p>OTP: {message.otp}</p>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
};

export default SentMessages;
