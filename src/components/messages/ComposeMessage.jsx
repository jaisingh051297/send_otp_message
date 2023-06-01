import React, { useState } from 'react';

const ComposeMessage = ({ sendMessage }) => {
  const [message, setMessage] = useState('');
  
  const handleSendMessage = () => {
    sendMessage(message);
    setMessage('');
  };

  return (
    <div style={{display:"flex",flexDirection:'column', width:'250px',margin:'15px'}}>
      <h1>Compose Message</h1>
      <textarea
        style={{fontSize:'16px',height:'100px', width:'230px',margin:'15px'}}
        value={message}
        onChange={e => setMessage(e.target.value)}
        placeholder="Enter Message"
      ></textarea>
      <button style={{height:'45px',borderRadius:'8px',color:'white',background:'#13131f',cursor:'pointer' ,width:'100px',margin:'15px'}} onClick={handleSendMessage}>Send</button>
    </div>
  );
};

export default ComposeMessage;
