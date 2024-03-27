import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import BasicExample from './components/Table';
import { Row, Col } from 'react-bootstrap';
import TableStructure from './components/TableStructure';
import ChatRoom from './components/ChatRoom';

function App() {
  return (
    <Row>
      <Col xs={3}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center', // Centers the child component horizontally
            alignItems: 'center', // Centers the child component vertically
          }}
        >
          <ChatRoom />
        </div>
      </Col>
      <Col xs={8}>
        <div className='App'>
          <TableStructure />
        </div>
      </Col>
    </Row>
  );
}

export default App;
