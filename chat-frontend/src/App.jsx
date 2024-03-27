import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ChatRoom from './components/ChatRoom';
// import BasicExample from './components/Table';
import Example from './components/Transition';

function App() {
  return (
    <div className='App'>
      <Example />
      <ChatRoom />
    </div>
  );
}

export default App;
