import React, { useEffect, useState } from 'react';
import { Socket } from 'phoenix';

function ChatRoom() {
  const [messages, setMessages] = useState([]);
  const [messageBody, setMessageBody] = useState('');
  // Define channel at a higher scope so it's accessible throughout the component
  const [channel, setChannel] = useState(null);

  useEffect(() => {
    const socket = new Socket('ws://192.168.1.107:4000/socket', {
      params: { token: window.userToken },
    });

    socket.connect();

    // Create the channel and make it available in the component's state
    const newChannel = socket.channel('room:lobby', {});
    setChannel(newChannel);

    newChannel
      .join()
      .receive('ok', (resp) => {
        console.log('Joined successfully', resp);

        // The server sends the latest 20 messages in descending order
        // Reversed here, but debating where to reverse
        setMessages(resp.messages.reverse());
      })
      .receive('error', (resp) => {
        console.log('Unable to join', resp);
      });

    newChannel.on('new_msg', (payload) => {
      // Use a function to correctly handle previous state due to closure
      setMessages((currentMessages) => [...currentMessages, payload]);
    });

    // Cleanup on component unmount
    return () => {
      newChannel.leave();
      socket.disconnect();
    };
  }, []); // Removed messages from dependency array to avoid re-connecting

  const sendMessage = (e) => {
    e.preventDefault();
    if (channel) {
      channel.push('new_msg', { body: messageBody });
      setMessageBody('');
    } else {
      console.log('Channel is not ready');
    }
  };

  return (
    <div>
      {messages.map((msg) => (
        // Ensure you have a unique key for each message
        // The key could be the message ID or another unique property
        <p key={msg.id}>{msg.body}</p>
      ))}
      <form onSubmit={sendMessage}>
        <input
          type='text'
          value={messageBody}
          onChange={(e) => setMessageBody(e.target.value)}
        />
        <button type='submit'>Send</button>
      </form>
    </div>
  );
}

export default ChatRoom;
